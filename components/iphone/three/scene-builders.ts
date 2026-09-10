import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export type DeviceAssembly = {
  root: THREE.Group;
  finishMaterials: THREE.MeshPhysicalMaterial[];
  screenParts: THREE.Object3D[];
  cameraParts: THREE.Object3D[];
  frameParts: THREE.Object3D[];
};

export type DuoAssembly = DeviceAssembly & {
  leftPivot: THREE.Group;
  rightPivot: THREE.Group;
};

function roundedMesh(
  width: number,
  height: number,
  depth: number,
  radius: number,
  material: THREE.Material,
) {
  return new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 8, radius), material);
}

function createFinishMaterial(color: string) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.72,
    roughness: 0.24,
    clearcoat: 0.58,
    clearcoatRoughness: 0.18,
    envMapIntensity: 1.5,
  });
}

function createGlassMaterial() {
  return new THREE.MeshPhysicalMaterial({
    color: "#09101b",
    metalness: 0.08,
    roughness: 0.09,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
  });
}

function createScreenTexture(variant: "pro" | "duo-left" | "duo-right") {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 1400;
  const context = canvas.getContext("2d");
  if (!context) return new THREE.CanvasTexture(canvas);

  const palette = variant === "pro"
    ? ["#050813", "#2f1330", "#a34b57", "#f6aa84"]
    : variant === "duo-left"
      ? ["#07111d", "#183c5c", "#54b9cb", "#d2fcff"]
      : ["#080b16", "#312457", "#8262d6", "#efb7ff"];
  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  palette.forEach((color, index) => gradient.addColorStop(index / (palette.length - 1), color));
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.globalAlpha = 0.62;
  for (let index = 0; index < 7; index += 1) {
    const glow = context.createRadialGradient(
      canvas.width * (0.15 + index * 0.12),
      canvas.height * (0.18 + (index % 3) * 0.24),
      10,
      canvas.width * (0.15 + index * 0.12),
      canvas.height * (0.18 + (index % 3) * 0.24),
      260,
    );
    glow.addColorStop(0, "rgba(255,255,255,.42)");
    glow.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  context.globalAlpha = 1;
  context.fillStyle = "rgba(255,255,255,.92)";
  context.textAlign = "center";
  context.font = "500 112px Arial";
  context.fillText(variant === "pro" ? "9:41" : "10:09", canvas.width / 2, 230);
  context.font = "500 24px Arial";
  context.fillStyle = "rgba(255,255,255,.7)";
  context.fillText(variant === "pro" ? "Wednesday, September 16" : "Hello, hello.", canvas.width / 2, 285);

  if (variant !== "pro") {
    context.fillStyle = "rgba(255,255,255,.14)";
    for (let row = 0; row < 2; row += 1) {
      for (let column = 0; column < 2; column += 1) {
        roundRect(context, 80 + column * 320, 880 + row * 180, 270, 140, 34);
        context.fill();
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function roundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath();
  context.roundRect(x, y, width, height, radius);
}

function addLens(parent: THREE.Group, x: number, y: number, z: number, size = 0.42) {
  const ringMaterial = new THREE.MeshPhysicalMaterial({
    color: "#242428",
    metalness: 0.92,
    roughness: 0.18,
    clearcoat: 0.6,
  });
  const lensMaterial = new THREE.MeshPhysicalMaterial({
    color: "#05060a",
    metalness: 0.25,
    roughness: 0.06,
    transmission: 0.08,
    clearcoat: 1,
  });
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(size, size, 0.16, 64), ringMaterial);
  ring.rotation.x = Math.PI / 2;
  ring.position.set(x, y, z);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(size * 0.78, size * 0.8, 0.17, 64), lensMaterial);
  glass.rotation.x = Math.PI / 2;
  glass.position.set(x, y, z - 0.055);
  const reflection = new THREE.Mesh(
    new THREE.CircleGeometry(size * 0.26, 32),
    new THREE.MeshBasicMaterial({ color: "#5269a4", transparent: true, opacity: 0.42 }),
  );
  reflection.position.set(x - size * 0.18, y + size * 0.17, z - 0.15);
  reflection.rotation.y = Math.PI;
  parent.add(ring, glass, reflection);
}

function addSideDetails(root: THREE.Group, width: number, height: number) {
  const dark = new THREE.MeshStandardMaterial({ color: "#15171b", metalness: 0.8, roughness: 0.25 });
  const volume = roundedMesh(0.07, 0.78, 0.12, 0.03, dark);
  volume.position.set(-width / 2 - 0.035, height * 0.18, 0.02);
  const action = roundedMesh(0.07, 0.34, 0.12, 0.03, dark);
  action.position.set(-width / 2 - 0.035, height * 0.37, 0.02);
  const camera = roundedMesh(0.07, 0.72, 0.12, 0.03, dark);
  camera.position.set(width / 2 + 0.035, -height * 0.04, 0.02);
  root.add(volume, action, camera);
}

export function createProModel(): DeviceAssembly {
  const root = new THREE.Group();
  const finish = createFinishMaterial("#5b1828");
  const glass = createGlassMaterial();
  const finishMaterials = [finish];

  const body = roundedMesh(3.12, 6.35, 0.46, 0.34, finish);
  body.castShadow = true;
  body.receiveShadow = true;
  root.add(body);

  const screen = roundedMesh(2.94, 6.16, 0.055, 0.27, new THREE.MeshBasicMaterial({ map: createScreenTexture("pro") }));
  screen.position.z = 0.252;
  root.add(screen);

  const island = roundedMesh(0.76, 0.16, 0.045, 0.08, new THREE.MeshStandardMaterial({ color: "#050609", roughness: 0.22 }));
  island.position.set(0, 2.63, 0.292);
  root.add(island);

  const cameraDeck = new THREE.Group();
  const deck = roundedMesh(2.93, 2.05, 0.2, 0.27, finish);
  deck.position.set(0, 1.96, -0.29);
  cameraDeck.add(deck);
  addLens(cameraDeck, -0.72, 2.28, -0.49);
  addLens(cameraDeck, 0.18, 1.83, -0.49);
  addLens(cameraDeck, -0.72, 1.38, -0.49);

  const flash = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.2, 0.08, 48),
    new THREE.MeshPhysicalMaterial({ color: "#fff3d1", emissive: "#ffd89b", emissiveIntensity: 0.28, roughness: 0.2 }),
  );
  flash.rotation.x = Math.PI / 2;
  flash.position.set(0.92, 2.28, -0.46);
  const lidar = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 48), glass);
  lidar.rotation.x = Math.PI / 2;
  lidar.position.set(0.9, 1.5, -0.46);
  cameraDeck.add(flash, lidar);
  root.add(cameraDeck);
  addSideDetails(root, 3.12, 6.35);

  return {
    root,
    finishMaterials,
    screenParts: [screen, island],
    cameraParts: [cameraDeck],
    frameParts: [body],
  };
}

function createDuoPanel(side: "left" | "right", finish: THREE.MeshPhysicalMaterial) {
  const panel = new THREE.Group();
  const body = roundedMesh(3.0, 6.15, 0.38, 0.3, finish);
  body.castShadow = true;
  panel.add(body);

  const screenMaterial = new THREE.MeshBasicMaterial({ map: createScreenTexture(side === "left" ? "duo-left" : "duo-right") });
  const screen = roundedMesh(2.85, 5.98, 0.05, 0.24, screenMaterial);
  screen.position.z = 0.214;
  panel.add(screen);
  return { panel, body, screen };
}

export function createDuoModel(): DuoAssembly {
  const root = new THREE.Group();
  const finish = createFinishMaterial("#172231");
  const finishMaterials = [finish];
  const leftPivot = new THREE.Group();
  const rightPivot = new THREE.Group();
  const left = createDuoPanel("left", finish);
  const right = createDuoPanel("right", finish);
  left.panel.position.x = -1.56;
  right.panel.position.x = 1.56;
  leftPivot.add(left.panel);
  rightPivot.add(right.panel);
  root.add(leftPivot, rightPivot);

  const hinge = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.115, 5.86, 10, 24),
    new THREE.MeshPhysicalMaterial({ color: "#9197a0", metalness: 0.95, roughness: 0.18, clearcoat: 0.5 }),
  );
  hinge.position.z = -0.06;
  root.add(hinge);

  const cameraGroup = new THREE.Group();
  const deck = roundedMesh(1.15, 2.22, 0.18, 0.25, finish);
  deck.position.set(-0.67, 1.8, -0.28);
  cameraGroup.add(deck);
  addLens(cameraGroup, -0.67, 2.16, -0.47, 0.38);
  addLens(cameraGroup, -0.67, 1.36, -0.47, 0.38);
  const flash = new THREE.Mesh(
    new THREE.CylinderGeometry(0.15, 0.15, 0.07, 40),
    new THREE.MeshBasicMaterial({ color: "#fff1cd" }),
  );
  flash.rotation.x = Math.PI / 2;
  flash.position.set(-0.25, 1.76, -0.45);
  cameraGroup.add(flash);
  left.panel.add(cameraGroup);

  addSideDetails(left.panel, 3, 6.15);
  addSideDetails(right.panel, 3, 6.15);

  return {
    root,
    finishMaterials,
    screenParts: [left.screen, right.screen],
    cameraParts: [cameraGroup],
    frameParts: [left.body, right.body, hinge],
    leftPivot,
    rightPivot,
  };
}

export function setAssemblyExploded(assembly: DeviceAssembly, amount: number) {
  assembly.screenParts.forEach((part) => { part.position.z += (0.8 * amount - (part.userData.explodeAmount ?? 0)); part.userData.explodeAmount = 0.8 * amount; });
  assembly.cameraParts.forEach((part) => { part.position.z -= (0.85 * amount - (part.userData.explodeAmount ?? 0)); part.userData.explodeAmount = 0.85 * amount; });
  assembly.frameParts.forEach((part, index) => {
    const direction = index % 2 === 0 ? -1 : 1;
    part.rotation.z = direction * amount * 0.035;
  });
}
