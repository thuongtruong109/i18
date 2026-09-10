import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { createDarkMetalMaterial } from "./materials";

export function roundedMesh(
  width: number,
  height: number,
  depth: number,
  radius: number,
  material: THREE.Material,
) {
  return new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 10, radius), material);
}

export function addLens(parent: THREE.Group, x: number, y: number, z: number, size = 0.42) {
  const outerRing = new THREE.Mesh(
    new THREE.CylinderGeometry(size * 1.14, size * 1.14, 0.115, 72),
    new THREE.MeshPhysicalMaterial({ color: "#2b2c31", metalness: 0.94, roughness: 0.16, clearcoat: 0.7 }),
  );
  outerRing.rotation.x = Math.PI / 2;
  outerRing.position.set(x, y, z + 0.045);

  const colorRing = new THREE.Mesh(
    new THREE.CylinderGeometry(size, size * 1.04, 0.13, 72),
    new THREE.MeshPhysicalMaterial({ color: "#17181d", metalness: 0.72, roughness: 0.16, clearcoat: 0.8 }),
  );
  colorRing.rotation.x = Math.PI / 2;
  colorRing.position.set(x, y, z - 0.035);

  const glass = new THREE.Mesh(
    new THREE.CylinderGeometry(size * 0.78, size * 0.84, 0.105, 72),
    new THREE.MeshPhysicalMaterial({
      color: "#02040a",
      metalness: 0.18,
      roughness: 0.045,
      transmission: 0.12,
      clearcoat: 1,
    }),
  );
  glass.rotation.x = Math.PI / 2;
  glass.position.set(x, y, z - 0.12);

  const iris = new THREE.Mesh(
    new THREE.CircleGeometry(size * 0.42, 48),
    new THREE.MeshBasicMaterial({ color: "#11172a", side: THREE.DoubleSide }),
  );
  iris.position.set(x, y, z - 0.18);
  iris.rotation.y = Math.PI;

  const reflection = new THREE.Mesh(
    new THREE.CircleGeometry(size * 0.13, 24),
    new THREE.MeshBasicMaterial({ color: "#91a7df", transparent: true, opacity: 0.62, side: THREE.DoubleSide }),
  );
  reflection.position.set(x - size * 0.18, y + size * 0.18, z - 0.188);
  reflection.rotation.y = Math.PI;
  parent.add(outerRing, colorRing, glass, iris, reflection);
}

type SideDetailOptions = { left?: boolean; right?: boolean };

export function addSideDetails(root: THREE.Group, width: number, height: number, options: SideDetailOptions = {}) {
  const { left = true, right = true } = options;
  const dark = createDarkMetalMaterial();

  if (left) {
    const volume = roundedMesh(0.065, 0.72, 0.105, 0.025, dark);
    volume.position.set(-width / 2 - 0.028, height * 0.17, 0.01);
    const action = roundedMesh(0.065, 0.3, 0.105, 0.025, dark);
    action.position.set(-width / 2 - 0.028, height * 0.36, 0.01);
    root.add(volume, action);
  }

  if (right) {
    const power = roundedMesh(0.065, 0.68, 0.105, 0.025, dark);
    power.position.set(width / 2 + 0.028, height * 0.18, 0.01);
    const cameraControl = roundedMesh(0.065, 0.62, 0.105, 0.025, dark);
    cameraControl.position.set(width / 2 + 0.028, -height * 0.15, 0.01);
    root.add(power, cameraControl);
  }
}

export function createAppleMark(color = "#1b0a10") {
  const group = new THREE.Group();
  const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.42, side: THREE.DoubleSide });
  const bodyShape = new THREE.Shape();
  bodyShape.moveTo(0, -0.52);
  bodyShape.bezierCurveTo(-0.18, -0.52, -0.32, -0.4, -0.42, -0.2);
  bodyShape.bezierCurveTo(-0.6, 0.12, -0.48, 0.46, -0.26, 0.55);
  bodyShape.bezierCurveTo(-0.08, 0.63, 0.04, 0.5, 0.16, 0.5);
  bodyShape.bezierCurveTo(0.28, 0.5, 0.39, 0.59, 0.52, 0.5);
  bodyShape.bezierCurveTo(0.37, 0.4, 0.3, 0.27, 0.31, 0.12);
  bodyShape.bezierCurveTo(0.31, -0.03, 0.39, -0.17, 0.51, -0.24);
  bodyShape.bezierCurveTo(0.4, -0.45, 0.25, -0.54, 0.1, -0.54);
  bodyShape.bezierCurveTo(0.06, -0.54, 0.02, -0.52, 0, -0.52);

  const body = new THREE.Mesh(new THREE.ShapeGeometry(bodyShape, 24), material);
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0.02, 0.67);
  leafShape.bezierCurveTo(0.08, 0.88, 0.23, 0.98, 0.4, 0.99);
  leafShape.bezierCurveTo(0.39, 0.82, 0.25, 0.68, 0.02, 0.67);
  const leaf = new THREE.Mesh(new THREE.ShapeGeometry(leafShape, 16), material);
  group.add(body, leaf);
  group.scale.setScalar(0.53);
  return group;
}
