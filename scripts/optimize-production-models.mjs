import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const JSON_CHUNK_TYPE = 0x4e4f534a;
const BIN_CHUNK_TYPE = 0x004e4942;
const GLB_MAGIC = 0x46546c67;
const productionModelsDirectory = fileURLToPath(
  new URL("../dist/client/models/", import.meta.url),
);

function padBuffer(buffer, fill = 0) {
  const paddingLength = (4 - (buffer.length % 4)) % 4;
  return paddingLength === 0
    ? buffer
    : Buffer.concat([buffer, Buffer.alloc(paddingLength, fill)]);
}

function readGlb(source) {
  if (source.readUInt32LE(0) !== GLB_MAGIC || source.readUInt32LE(4) !== 2) {
    throw new Error("Only GLB 2.0 files are supported");
  }

  let offset = 12;
  let json;
  let binary;
  while (offset < source.length) {
    const chunkLength = source.readUInt32LE(offset);
    const chunkType = source.readUInt32LE(offset + 4);
    const chunk = source.subarray(offset + 8, offset + 8 + chunkLength);
    if (chunkType === JSON_CHUNK_TYPE) {
      json = JSON.parse(chunk.toString("utf8").replace(/[\u0000\u0020]+$/, ""));
    } else if (chunkType === BIN_CHUNK_TYPE) {
      binary = chunk;
    }
    offset += 8 + chunkLength;
  }

  if (!json || !binary) throw new Error("GLB is missing its JSON or binary chunk");
  return { json, binary };
}

function rebuildBinary(json, binary, replacements) {
  const orderedViews = json.bufferViews
    .map((view, index) => ({ index, view }))
    .sort((left, right) => (left.view.byteOffset ?? 0) - (right.view.byteOffset ?? 0));
  const chunks = [];
  let outputOffset = 0;

  for (const { index, view } of orderedViews) {
    if (view.buffer !== undefined && view.buffer !== 0) {
      throw new Error("External GLB buffers are not supported");
    }

    const alignment = (4 - (outputOffset % 4)) % 4;
    if (alignment > 0) {
      chunks.push(Buffer.alloc(alignment));
      outputOffset += alignment;
    }

    const start = view.byteOffset ?? 0;
    const data = replacements.get(index)
      ?? binary.subarray(start, start + view.byteLength);
    view.byteOffset = outputOffset;
    view.byteLength = data.length;
    chunks.push(data);
    outputOffset += data.length;
  }

  const rebuilt = Buffer.concat(chunks);
  json.buffers[0].byteLength = rebuilt.length;
  return rebuilt;
}

function writeGlb(json, binary) {
  const jsonChunk = padBuffer(Buffer.from(JSON.stringify(json)), 0x20);
  const binaryChunk = padBuffer(binary);
  const totalLength = 12 + 8 + jsonChunk.length + 8 + binaryChunk.length;
  const header = Buffer.alloc(12);
  header.writeUInt32LE(GLB_MAGIC, 0);
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(totalLength, 8);

  const jsonHeader = Buffer.alloc(8);
  jsonHeader.writeUInt32LE(jsonChunk.length, 0);
  jsonHeader.writeUInt32LE(JSON_CHUNK_TYPE, 4);
  const binaryHeader = Buffer.alloc(8);
  binaryHeader.writeUInt32LE(binaryChunk.length, 0);
  binaryHeader.writeUInt32LE(BIN_CHUNK_TYPE, 4);

  return Buffer.concat([header, jsonHeader, jsonChunk, binaryHeader, binaryChunk]);
}

async function optimizeModel(filePath) {
  const source = await readFile(filePath);
  const { json, binary } = readGlb(source);
  const replacements = new Map();

  for (const image of json.images ?? []) {
    if (!Number.isInteger(image.bufferView) || replacements.has(image.bufferView)) continue;
    if (image.mimeType !== "image/png" && image.mimeType !== "image/jpeg") continue;
    const view = json.bufferViews[image.bufferView];
    const original = binary.subarray(
      view.byteOffset ?? 0,
      (view.byteOffset ?? 0) + view.byteLength,
    );
    let webp;
    try {
      webp = await sharp(original)
        .webp({ quality: 88, alphaQuality: 92, effort: 4, smartSubsample: true })
        .toBuffer();
    } catch {
      continue;
    }

    if (webp.length >= original.length) continue;
    replacements.set(image.bufferView, webp);
    image.mimeType = "image/webp";
  }

  if (replacements.size === 0) return { before: source.length, after: source.length };
  const rebuiltBinary = rebuildBinary(json, binary, replacements);
  const optimized = writeGlb(json, rebuiltBinary);
  await writeFile(filePath, optimized);
  return { before: source.length, after: optimized.length };
}

try {
  const modelFiles = (await readdir(productionModelsDirectory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".glb"));
  let before = 0;
  let after = 0;

  for (const entry of modelFiles) {
    const result = await optimizeModel(path.join(productionModelsDirectory, entry.name));
    before += result.before;
    after += result.after;
  }

  const savedMegabytes = ((before - after) / 1024 / 1024).toFixed(1);
  console.log(`Optimized ${modelFiles.length} production GLB files; saved ${savedMegabytes} MiB.`);
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
  console.log("No production model directory found; nothing to optimize.");
}
