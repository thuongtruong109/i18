import * as THREE from "three";

export function createFinishMaterial(color: string) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.76,
    roughness: 0.22,
    clearcoat: 0.62,
    clearcoatRoughness: 0.15,
    envMapIntensity: 1.6,
  });
}

export function createBackGlassMaterial(color: string) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.34,
    roughness: 0.42,
    clearcoat: 0.35,
    clearcoatRoughness: 0.3,
    envMapIntensity: 1.1,
  });
}

export function createScreenGlassMaterial() {
  return new THREE.MeshPhysicalMaterial({
    color: "#02040a",
    metalness: 0.04,
    roughness: 0.08,
    clearcoat: 1,
    clearcoatRoughness: 0.035,
  });
}

export function createDarkMetalMaterial() {
  return new THREE.MeshStandardMaterial({
    color: "#111318",
    metalness: 0.88,
    roughness: 0.2,
  });
}
