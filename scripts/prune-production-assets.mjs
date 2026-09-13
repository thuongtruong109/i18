import { readdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const productionModelsDirectory = fileURLToPath(
  new URL("../dist/client/models/", import.meta.url),
);

try {
  const modelFiles = await readdir(productionModelsDirectory, { withFileTypes: true });
  const sourceAssets = modelFiles.filter(
    (entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".usdz"),
  );

  await Promise.all(
    sourceAssets.map((entry) => rm(`${productionModelsDirectory}/${entry.name}`)),
  );

  console.log(`Removed ${sourceAssets.length} source-only USDZ assets from the production bundle.`);
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
  console.log("No production model directory found; nothing to prune.");
}
