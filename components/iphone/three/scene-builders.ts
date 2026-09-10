import * as THREE from "three";
import { addLens, addSideDetails, createAppleMark, roundedMesh } from "./device-details";
import { createBackGlassMaterial, createFinishMaterial, createScreenGlassMaterial } from "./materials";
import { createDuoInnerTextures, createDuoOuterTexture, createProScreenTexture } from "./textures";

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

function createFlash(radius: number, z: number) {
  const flash = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, 0.075, 48),
    new THREE.MeshPhysicalMaterial({
      color: "#fff8e4",
      emissive: "#ffdca4",
      emissiveIntensity: 0.35,
      roughness: 0.16,
      clearcoat: 0.8,
    }),
  );
  flash.rotation.x = Math.PI / 2;
  flash.position.z = z;
  return flash;
}

function createSensor(radius: number, z: number, color = "#050609") {
  const sensor = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, 0.07, 40),
    new THREE.MeshPhysicalMaterial({ color, metalness: 0.3, roughness: 0.12, clearcoat: 0.8 }),
  );
  sensor.rotation.x = Math.PI / 2;
  sensor.position.z = z;
  return sensor;
}

export function createProModel(): DeviceAssembly {
  const root = new THREE.Group();
  const shellFinish = createFinishMaterial("#5b1828");
  const plateauFinish = createFinishMaterial("#5b1828");
  const backGlass = createBackGlassMaterial("#511622");
  const finishMaterials = [shellFinish, plateauFinish, backGlass];

  const shell = roundedMesh(3.12, 6.42, 0.43, 0.38, shellFinish);
  shell.castShadow = true;
  shell.receiveShadow = true;
  root.add(shell);

  const rearPanel = roundedMesh(2.96, 4.48, 0.035, 0.27, backGlass);
  rearPanel.position.set(0, -0.79, -0.233);
  root.add(rearPanel);

  const frontAssembly = new THREE.Group();
  const frontGlass = roundedMesh(3.015, 6.31, 0.05, 0.335, createScreenGlassMaterial());
  frontGlass.position.z = 0.232;
  const display = roundedMesh(
    2.88,
    6.17,
    0.024,
    0.285,
    new THREE.MeshBasicMaterial({ map: createProScreenTexture() }),
  );
  display.position.z = 0.264;
  const island = roundedMesh(0.72, 0.18, 0.025, 0.085, new THREE.MeshBasicMaterial({ color: "#010205" }));
  island.position.set(0, 2.68, 0.286);
  frontAssembly.add(frontGlass, display, island);
  root.add(frontAssembly);

  const cameraAssembly = new THREE.Group();
  const plateau = roundedMesh(3.015, 1.82, 0.215, 0.285, plateauFinish);
  plateau.position.set(0, 2.25, -0.305);
  plateau.castShadow = true;
  cameraAssembly.add(plateau);

  addLens(cameraAssembly, -0.77, 2.57, -0.49, 0.4);
  addLens(cameraAssembly, 0.12, 2.22, -0.49, 0.4);
  addLens(cameraAssembly, -0.77, 1.77, -0.49, 0.4);

  const flash = createFlash(0.185, -0.475);
  flash.position.set(0.92, 2.55, flash.position.z);
  const microphone = createSensor(0.035, -0.48);
  microphone.position.set(0.94, 2.13, microphone.position.z);
  const lidar = createSensor(0.17, -0.475, "#06070b");
  lidar.position.set(0.92, 1.75, lidar.position.z);
  cameraAssembly.add(flash, microphone, lidar);
  root.add(cameraAssembly);

  const logo = createAppleMark("#1b0710");
  logo.position.set(0, -0.62, -0.256);
  logo.rotation.y = Math.PI;
  root.add(logo);
  addSideDetails(root, 3.12, 6.42);

  return {
    root,
    finishMaterials,
    screenParts: [frontAssembly],
    cameraParts: [cameraAssembly],
    frameParts: [shell, rearPanel],
  };
}

type DuoPanel = {
  panel: THREE.Group;
  body: THREE.Mesh;
  backSurface: THREE.Mesh;
  innerAssembly: THREE.Group;
};

function createDuoPanel(
  side: "left" | "right",
  finish: THREE.MeshPhysicalMaterial,
  backMaterial: THREE.MeshPhysicalMaterial,
  innerTexture: THREE.Texture,
): DuoPanel {
  const panel = new THREE.Group();
  const body = roundedMesh(2.62, 6.12, 0.31, 0.31, finish);
  body.castShadow = true;
  panel.add(body);

  const backSurface = roundedMesh(2.5, 5.98, 0.026, 0.255, backMaterial);
  backSurface.position.z = -0.169;
  panel.add(backSurface);

  const innerAssembly = new THREE.Group();
  const bezel = roundedMesh(2.56, 6.045, 0.034, 0.275, createScreenGlassMaterial());
  bezel.position.z = 0.166;
  const screen = roundedMesh(
    2.48,
    5.94,
    0.018,
    0.24,
    new THREE.MeshBasicMaterial({ map: innerTexture }),
  );
  screen.position.z = 0.19;
  innerAssembly.add(bezel, screen);
  panel.add(innerAssembly);
  addSideDetails(panel, 2.62, 6.12, side === "left" ? { left: true, right: false } : { left: false, right: true });
  return { panel, body, backSurface, innerAssembly };
}

export function createDuoModel(): DuoAssembly {
  const root = new THREE.Group();
  const shellFinish = createFinishMaterial("#172231");
  const cameraFinish = createFinishMaterial("#172231");
  const leftBack = createBackGlassMaterial("#111b29");
  const rightBack = createBackGlassMaterial("#111b29");
  const finishMaterials = [shellFinish, cameraFinish, leftBack, rightBack];
  const [leftTexture, rightTexture] = createDuoInnerTextures();

  const leftPivot = new THREE.Group();
  const rightPivot = new THREE.Group();
  const left = createDuoPanel("left", shellFinish, leftBack, leftTexture);
  const right = createDuoPanel("right", shellFinish, rightBack, rightTexture);
  left.panel.position.x = -1.33;
  right.panel.position.x = 1.33;
  leftPivot.add(left.panel);
  rightPivot.add(right.panel);
  root.add(leftPivot, rightPivot);

  const hingeMaterial = createFinishMaterial("#354255");
  finishMaterials.push(hingeMaterial);
  const hinge = roundedMesh(0.155, 5.9, 0.34, 0.075, hingeMaterial);
  hinge.position.z = -0.01;
  root.add(hinge);

  const cameraAssembly = new THREE.Group();
  const cameraPlateau = roundedMesh(2.28, 1.08, 0.175, 0.29, cameraFinish);
  cameraPlateau.position.set(0, 2.17, -0.27);
  cameraAssembly.add(cameraPlateau);
  addLens(cameraAssembly, -0.5, 2.17, -0.43, 0.34);
  addLens(cameraAssembly, 0.22, 2.17, -0.43, 0.34);
  const duoMic = createSensor(0.035, -0.435);
  duoMic.position.set(0.82, 2.37, duoMic.position.z);
  const duoFlash = createFlash(0.145, -0.43);
  duoFlash.position.set(0.82, 2.06, duoFlash.position.z);
  cameraAssembly.add(duoMic, duoFlash);
  left.panel.add(cameraAssembly);

  const logo = createAppleMark("#08101a");
  logo.position.set(0, -0.58, -0.19);
  logo.rotation.y = Math.PI;
  left.panel.add(logo);

  const outerAssembly = new THREE.Group();
  outerAssembly.userData.explodeDirection = -1;
  const outerGlass = roundedMesh(2.56, 6.045, 0.034, 0.275, createScreenGlassMaterial());
  outerGlass.position.z = -0.174;
  outerGlass.rotation.y = Math.PI;
  const outerScreen = roundedMesh(
    2.48,
    5.94,
    0.018,
    0.24,
    new THREE.MeshBasicMaterial({ map: createDuoOuterTexture() }),
  );
  outerScreen.position.z = -0.198;
  outerScreen.rotation.y = Math.PI;
  const outerCamera = new THREE.Mesh(
    new THREE.CircleGeometry(0.105, 32),
    new THREE.MeshBasicMaterial({ color: "#010205", side: THREE.DoubleSide }),
  );
  outerCamera.position.set(0.87, 2.54, -0.21);
  outerCamera.rotation.y = Math.PI;
  outerAssembly.add(outerGlass, outerScreen, outerCamera);
  right.panel.add(outerAssembly);

  return {
    root,
    finishMaterials,
    screenParts: [left.innerAssembly, right.innerAssembly, outerAssembly],
    cameraParts: [cameraAssembly],
    frameParts: [left.body, left.backSurface, right.body, right.backSurface, hinge],
    leftPivot,
    rightPivot,
  };
}

export function setAssemblyExploded(assembly: DeviceAssembly, amount: number) {
  assembly.screenParts.forEach((part) => {
    const nextOffset = (part.userData.explodeDirection ?? 1) * 0.8 * amount;
    part.position.z += nextOffset - (part.userData.explodeAmount ?? 0);
    part.userData.explodeAmount = nextOffset;
  });
  assembly.cameraParts.forEach((part) => {
    part.position.z -= 0.85 * amount - (part.userData.explodeAmount ?? 0);
    part.userData.explodeAmount = 0.85 * amount;
  });
  assembly.frameParts.forEach((part, index) => {
    const direction = index % 2 === 0 ? -1 : 1;
    part.rotation.z = direction * amount * 0.035;
  });
}
