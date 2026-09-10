import * as THREE from "three";

function textureFromCanvas(canvas: HTMLCanvasElement) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function drawSoftWallpaper(context: CanvasRenderingContext2D, width: number, height: number, colors: string[]) {
  const base = context.createLinearGradient(0, 0, width, height);
  colors.forEach((color, index) => base.addColorStop(index / (colors.length - 1), color));
  context.fillStyle = base;
  context.fillRect(0, 0, width, height);

  context.globalCompositeOperation = "screen";
  context.globalAlpha = 0.72;
  for (let index = 0; index < 5; index += 1) {
    const x = width * (0.12 + index * 0.21);
    const y = height * (0.16 + (index % 3) * 0.27);
    const radius = width * (0.42 + index * 0.04);
    const glow = context.createRadialGradient(x, y, 0, x, y, radius);
    glow.addColorStop(0, "rgba(255,255,255,.34)");
    glow.addColorStop(0.42, "rgba(255,255,255,.07)");
    glow.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);
  }
  context.globalCompositeOperation = "source-over";
  context.globalAlpha = 1;
}

function drawLockScreen(context: CanvasRenderingContext2D, width: number, height: number, large = false) {
  context.textAlign = "center";
  context.fillStyle = "rgba(255,255,255,.78)";
  context.font = `500 ${large ? 38 : 26}px Arial`;
  context.fillText("Wed Apr 1", width / 2, height * 0.12);
  context.font = `300 ${large ? 210 : 138}px Arial`;
  context.fillStyle = "rgba(255,255,255,.68)";
  context.fillText("9:41", width / 2, height * 0.31);

  context.strokeStyle = "rgba(255,255,255,.92)";
  context.lineWidth = large ? 11 : 8;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(width * 0.38, height * 0.94);
  context.lineTo(width * 0.62, height * 0.94);
  context.stroke();
}

export function createProScreenTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 1600;
  const context = canvas.getContext("2d");
  if (!context) return textureFromCanvas(canvas);

  drawSoftWallpaper(context, canvas.width, canvas.height, ["#09040a", "#451624", "#9a485d", "#e39a8d"]);
  drawLockScreen(context, canvas.width, canvas.height);
  return textureFromCanvas(canvas);
}

export function createDuoInnerTextures() {
  const canvas = document.createElement("canvas");
  canvas.width = 1600;
  canvas.height = 1500;
  const context = canvas.getContext("2d");
  if (!context) return [textureFromCanvas(canvas), textureFromCanvas(canvas)] as const;

  drawSoftWallpaper(context, canvas.width, canvas.height, ["#06111f", "#25364b", "#655361", "#c8b7a0"]);
  drawLockScreen(context, canvas.width, canvas.height, true);

  const left = textureFromCanvas(canvas);
  left.repeat.set(0.5, 1);
  left.offset.set(0, 0);
  left.needsUpdate = true;
  const right = left.clone();
  right.offset.set(0.5, 0);
  right.needsUpdate = true;
  return [left, right] as const;
}

export function createDuoOuterTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 760;
  canvas.height = 1500;
  const context = canvas.getContext("2d");
  if (!context) return textureFromCanvas(canvas);

  drawSoftWallpaper(context, canvas.width, canvas.height, ["#071321", "#24354b", "#4c4557", "#ad9486"]);
  drawLockScreen(context, canvas.width, canvas.height);
  return textureFromCanvas(canvas);
}
