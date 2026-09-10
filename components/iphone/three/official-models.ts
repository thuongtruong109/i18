import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Finish } from "../product-data";

export const OFFICIAL_PRO_MODEL_URLS: Partial<Record<Finish, string>> = {
  burgundy: "/models/iphone-18-pro.glb",
  glacier: "/models/iphone-18-pro-glacier.glb",
  silver: "/models/iphone-18-pro-silver.glb",
  black: "/models/iphone-18-pro-black.glb",
};

export type DuoPose = "closed" | "landscape";

export const OFFICIAL_DUO_MODEL_URLS: Record<DuoPose, Partial<Record<Finish, string>>> = {
  closed: {
    "night-sky": "/models/iphone-duo-night-sky.glb",
    "star-white": "/models/iphone-duo.glb",
  },
  landscape: {
    "night-sky": "/models/iphone-duo-night-sky-landscape.glb",
    "star-white": "/models/iphone-duo-landscape.glb",
  },
};

export type OfficialProduct = {
  root: THREE.Group;
  meshCount: number;
  parts: Array<{
    mesh: THREE.Mesh;
    origin: THREE.Vector3;
    direction: THREE.Vector3;
  }>;
};

function orientTallProduct(source: THREE.Group) {
  const sourceBox = new THREE.Box3().setFromObject(source);
  const sourceSize = sourceBox.getSize(new THREE.Vector3());
  const oriented = new THREE.Group();
  oriented.add(source);

  if (sourceSize.z >= sourceSize.x && sourceSize.z >= sourceSize.y) {
    source.rotation.x = -Math.PI / 2;
  } else if (sourceSize.x >= sourceSize.y && sourceSize.x >= sourceSize.z) {
    source.rotation.z = Math.PI / 2;
  }
  return oriented;
}

export async function loadOfficialProduct(url: string, targetHeight: number): Promise<OfficialProduct> {
  const loader = new GLTFLoader();
  const source = (await loader.loadAsync(url)).scene;
  const oriented = orientTallProduct(source);
  oriented.updateMatrixWorld(true);

  const orientedBox = new THREE.Box3().setFromObject(oriented);
  const center = orientedBox.getCenter(new THREE.Vector3());
  const size = orientedBox.getSize(new THREE.Vector3());
  oriented.position.sub(center);

  const normalized = new THREE.Group();
  normalized.add(oriented);
  normalized.scale.setScalar(targetHeight / Math.max(size.y, 0.0001));
  normalized.rotation.y = Math.PI;

  let meshCount = 0;
  const parts: OfficialProduct["parts"] = [];
  normalized.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;
    meshCount += 1;
    object.castShadow = true;
    object.receiveShadow = true;
    object.geometry.computeBoundingBox();
    const partCenter = object.geometry.boundingBox?.getCenter(new THREE.Vector3()) ?? new THREE.Vector3();
    const depth = partCenter.z - center.z;
    parts.push({
      mesh: object,
      origin: object.position.clone(),
      direction: new THREE.Vector3(
        (partCenter.x - center.x) * 0.08,
        (partCenter.y - center.y) * 0.035,
        Math.sign(depth || 1) * (0.5 + Math.min(Math.abs(depth) * 0.3, 0.8)),
      ),
    });
  });

  return { root: normalized, meshCount, parts };
}

export function setOfficialExploded(product: OfficialProduct, amount: number) {
  product.parts.forEach(({ mesh, origin, direction }) => {
    mesh.position.copy(origin).addScaledVector(direction, amount * 2.4);
  });
}
