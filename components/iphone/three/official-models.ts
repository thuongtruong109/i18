import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Finish, Model } from "../product-data";

const OFFICIAL_MODEL_URLS: Record<Exclude<Model, "duo">, Partial<Record<Finish, string>>> = {
  pro: {
    burgundy: "/models/iphone-18-pro.glb",
    glacier: "/models/iphone-18-pro-glacier.glb",
    silver: "/models/iphone-18-pro-silver.glb",
    black: "/models/iphone-18-pro-black.glb",
  },
  "17-pro": {
    "cosmic-orange": "/models/iphone-17-pro.glb",
  },
  "17-pro-max": {
    "cosmic-orange": "/models/iphone-17-pro-max.glb",
  },
  air: {
    "sky-blue": "/models/iphone-air.glb",
  },
  "17": {
    lavender: "/models/iphone-17.glb",
  },
  "17e": {
    "soft-pink": "/models/iphone-17e.glb",
  },
  "16-pro": {
    "desert-titanium": "/models/iphone-16-pro.glb",
  },
  "16-pro-max": {
    "desert-titanium": "/models/iphone-16-pro-max.glb",
  },
  "16": {
    ultramarine: "/models/iphone-16.glb",
  },
  "16-plus": {
    ultramarine: "/models/iphone-16-plus.glb",
  },
  "16e": {
    white: "/models/iphone-16e.glb",
  },
  "15-pro": {
    "natural-titanium": "/models/iphone-15-pro.glb",
  },
  "15-pro-max": {
    "natural-titanium": "/models/iphone-15-pro-max.glb",
  },
  "15": {
    pink: "/models/iphone-15.glb",
  },
  "15-plus": {
    pink: "/models/iphone-15-plus.glb",
  },
  "ipad-pro-m5": {
    "space-black": "/models/ipad-pro-m5.glb",
  },
  "ipad-air-m4": {
    blue: "/models/ipad-air-m4.glb",
  },
  "ipad-a16": {
    pink: "/models/ipad-a16.glb",
  },
  "ipad-mini-a17-pro": {
    purple: "/models/ipad-mini-a17-pro.glb",
  },
  "apple-watch-series-11": {
    "rose-gold": "/models/apple-watch-series-11.glb",
  },
  "apple-watch-ultra-3": {
    "natural-titanium": "/models/apple-watch-ultra-3.glb",
  },
  "apple-watch-se-3": {
    midnight: "/models/apple-watch-se-3.glb",
  },
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

export function getOfficialModelUrl(
  model: Model,
  finish: Finish,
  duoPose: DuoPose,
): string | undefined {
  if (model === "duo") return OFFICIAL_DUO_MODEL_URLS[duoPose][finish];
  return OFFICIAL_MODEL_URLS[model][finish];
}

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
