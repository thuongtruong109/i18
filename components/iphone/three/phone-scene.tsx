"use client";

import * as THREE from "three";
import { useEffect, useRef, useState, type RefObject } from "react";
import type { Finish, Model } from "../product-data";
import {
  loadOfficialProduct,
  OFFICIAL_DUO_MODEL_URLS,
  OFFICIAL_PRO_MODEL_URLS,
  setOfficialExploded,
  type DuoPose,
  type OfficialProduct,
} from "./official-models";
import { createDuoModel, createProModel, setAssemblyExploded } from "./scene-builders";

const finishColors: Record<Finish, string> = {
  burgundy: "#5f1d2a",
  glacier: "#c4dbe0",
  silver: "#c8c9ca",
  black: "#202125",
  "night-sky": "#182433",
  "star-white": "#e4e2dd",
};

const AUTO_ROTATION_IDLE_DELAY_MS = 1800;
const AUTO_ROTATION_SPEED = 0.18;
const AUTO_ROTATION_EASING = 2.8;

type PhoneSceneProps = {
  containerRef: RefObject<HTMLElement | null>;
  model: Model;
  finish: Finish;
  duoPose: DuoPose;
  exploded: boolean;
  resetKey: number;
};

export function PhoneScene({ containerRef, model, finish, duoPose, exploded, resetKey }: PhoneSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const configRef = useRef({ model, finish, duoPose, exploded, resetKey });
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    configRef.current = { model, finish, duoPose, exploded, resetKey };
  }, [duoPose, exploded, finish, model, resetKey]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
    } catch {
      const fallbackTimer = window.setTimeout(() => setFailed(true), 0);
      return () => window.clearTimeout(fallbackTimer);
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#050506");
    scene.fog = new THREE.FogExp2("#050506", 0.045);
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 13.2);

    const world = new THREE.Group();
    const pro = createProModel();
    const duo = createDuoModel();
    const officialProHost = new THREE.Group();
    const officialDuoHost = new THREE.Group();
    world.add(pro.root, duo.root, officialProHost, officialDuoHost);
    scene.add(world);

    const officialProModels = new Map<Finish, OfficialProduct>();
    const pendingOfficialFinishes = new Set<Finish>();
    let disposed = false;
    const requestOfficialPro = (requestedFinish: Finish) => {
      const url = OFFICIAL_PRO_MODEL_URLS[requestedFinish];
      if (!url || officialProModels.has(requestedFinish) || pendingOfficialFinishes.has(requestedFinish)) return;
      pendingOfficialFinishes.add(requestedFinish);
      void loadOfficialProduct(url, 6.42)
        .then((product) => {
          pendingOfficialFinishes.delete(requestedFinish);
          if (disposed || product.meshCount === 0) {
            canvas.dataset.modelSource = "procedural-fallback";
            return;
          }
          product.root.visible = false;
          officialProModels.set(requestedFinish, product);
          officialProHost.add(product.root);
          canvas.dataset.modelSource = "apple-ar-mesh";
          canvas.dataset.meshCount = String(product.meshCount);
        })
        .catch(() => {
          pendingOfficialFinishes.delete(requestedFinish);
          canvas.dataset.modelSource = "procedural-fallback";
        });
    };
    requestOfficialPro("burgundy");

    const officialDuoModels = new Map<string, OfficialProduct>();
    const pendingOfficialDuoModels = new Set<string>();
    const requestOfficialDuo = (requestedFinish: Finish, requestedPose: DuoPose) => {
      const url = OFFICIAL_DUO_MODEL_URLS[requestedPose][requestedFinish];
      const key = `${requestedFinish}:${requestedPose}`;
      if (!url || officialDuoModels.has(key) || pendingOfficialDuoModels.has(key)) return;
      pendingOfficialDuoModels.add(key);
      void loadOfficialProduct(url, 6.1)
        .then((product) => {
          pendingOfficialDuoModels.delete(key);
          if (disposed || product.meshCount === 0) return;
          product.root.visible = false;
          officialDuoModels.set(key, product);
          officialDuoHost.add(product.root);
        })
        .catch(() => pendingOfficialDuoModels.delete(key));
    };

    const ambient = new THREE.HemisphereLight("#b7d8ff", "#16090d", 1.7);
    const key = new THREE.DirectionalLight("#ffffff", 7.5);
    key.position.set(-4, 7, 9);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    const burgundyLight = new THREE.PointLight("#ff3f68", 42, 18, 2);
    burgundyLight.position.set(-6, -1, 4);
    const blueLight = new THREE.PointLight("#559dff", 36, 18, 2);
    blueLight.position.set(6, 2, 3);
    scene.add(ambient, key, burgundyLight, blueLight);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(32, 22),
      new THREE.MeshStandardMaterial({ color: "#09090b", metalness: 0.35, roughness: 0.48 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -4.25;
    floor.receiveShadow = true;
    scene.add(floor);

    let scrollProgress = 0;
    let pointerDown = false;
    let pointerX = 0;
    let pointerY = 0;
    let dragX = 0;
    let dragY = 0;
    let targetDragX = 0;
    let targetDragY = 0;
    let zoom = 0;
    let targetZoom = 0;
    let explodeAmount = 0;
    let autoRotation = 0;
    let autoRotationSpeed = 0;
    let lastFrameTime = performance.now();
    let lastInteractionTime = performance.now();
    let lastResetKey = configRef.current.resetKey;
    let animationFrame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetColor = new THREE.Color();

    const markInteraction = () => {
      lastInteractionTime = performance.now();
    };

    const updateScroll = () => {
      const bounds = container.getBoundingClientRect();
      const distance = Math.max(1, container.offsetHeight - window.innerHeight);
      scrollProgress = THREE.MathUtils.clamp(-bounds.top / distance, 0, 1);
      container.style.setProperty("--journey", String(scrollProgress));
    };

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(1, height);
      camera.updateProjectionMatrix();
    };

    const handlePointerDown = (event: PointerEvent) => {
      markInteraction();
      pointerDown = true;
      pointerX = event.clientX;
      pointerY = event.clientY;
      canvas.setPointerCapture(event.pointerId);
      canvas.classList.add("is-grabbing");
    };
    const handlePointerMove = (event: PointerEvent) => {
      markInteraction();
      if (!pointerDown) return;
      targetDragY += (event.clientX - pointerX) * 0.008;
      targetDragX += (event.clientY - pointerY) * 0.006;
      targetDragX = THREE.MathUtils.clamp(targetDragX, -0.85, 0.85);
      pointerX = event.clientX;
      pointerY = event.clientY;
    };
    const handlePointerUp = (event: PointerEvent) => {
      markInteraction();
      pointerDown = false;
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
      canvas.classList.remove("is-grabbing");
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "+", "-"].includes(event.key)) return;
      markInteraction();
      event.preventDefault();
      if (event.key === "ArrowLeft") targetDragY -= 0.18;
      if (event.key === "ArrowRight") targetDragY += 0.18;
      if (event.key === "ArrowUp") targetDragX -= 0.12;
      if (event.key === "ArrowDown") targetDragX += 0.12;
      if (event.key === "+") targetZoom = Math.min(2, targetZoom + 0.3);
      if (event.key === "-") targetZoom = Math.max(-1.2, targetZoom - 0.3);
    };
    const handleScroll = () => {
      markInteraction();
      updateScroll();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("scroll", handleScroll, { passive: true });
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointercancel", handlePointerUp);
    canvas.addEventListener("keydown", handleKeyDown);
    resize();
    updateScroll();

    const timer = new THREE.Timer();
    timer.connect(document);
    const animate = (timestamp: number) => {
      timer.update(timestamp);
      const elapsed = timer.getElapsed();
      const frameDelta = Math.min((timestamp - lastFrameTime) / 1000, 0.05);
      lastFrameTime = timestamp;
      const config = configRef.current;
      if (config.resetKey !== lastResetKey) {
        targetDragX = 0;
        targetDragY = 0;
        targetZoom = 0;
        autoRotation = 0;
        autoRotationSpeed = 0;
        markInteraction();
        lastResetKey = config.resetKey;
      }

      const idleRotationSpeed = !reducedMotion && !pointerDown && timestamp - lastInteractionTime >= AUTO_ROTATION_IDLE_DELAY_MS
        ? AUTO_ROTATION_SPEED
        : 0;
      autoRotationSpeed += (idleRotationSpeed - autoRotationSpeed) * Math.min(1, frameDelta * AUTO_ROTATION_EASING);
      autoRotation += autoRotationSpeed * frameDelta;

      requestOfficialPro(config.finish);
      const activeOfficialPro = officialProModels.get(config.finish) ?? null;
      if (config.model === "duo") requestOfficialDuo(config.finish, config.duoPose);
      const activeDuoKey = `${config.finish}:${config.duoPose}`;
      const activeOfficialDuo = officialDuoModels.get(activeDuoKey) ?? null;
      const useOfficialPro = activeOfficialPro !== null;
      const useOfficialDuo = activeOfficialDuo !== null;
      pro.root.visible = config.model === "pro" && !useOfficialPro;
      officialProHost.visible = config.model === "pro" && useOfficialPro;
      officialProModels.forEach((product, productFinish) => {
        product.root.visible = useOfficialPro && productFinish === config.finish;
      });
      duo.root.visible = config.model === "duo" && !useOfficialDuo;
      officialDuoHost.visible = config.model === "duo" && useOfficialDuo;
      officialDuoModels.forEach((product, productKey) => {
        product.root.visible = useOfficialDuo && productKey === activeDuoKey;
      });
      targetColor.set(finishColors[config.finish]);
      [...pro.finishMaterials, ...duo.finishMaterials].forEach((material) => material.color.lerp(targetColor, 0.08));

      const foldAngle = config.duoPose === "landscape" ? 180 : 24;
      const fold = (Math.PI - THREE.MathUtils.degToRad(foldAngle)) / 2;
      duo.leftPivot.rotation.y += (fold - duo.leftPivot.rotation.y) * 0.1;
      duo.rightPivot.rotation.y += (-fold - duo.rightPivot.rotation.y) * 0.1;

      dragX += (targetDragX - dragX) * 0.09;
      dragY += (targetDragY - dragY) * 0.09;
      zoom += (targetZoom - zoom) * 0.08;
      explodeAmount += ((config.exploded ? 1 : 0) - explodeAmount) * 0.08;
      setAssemblyExploded(pro, explodeAmount);
      setAssemblyExploded(duo, explodeAmount);
      if (activeOfficialPro) setOfficialExploded(activeOfficialPro, explodeAmount);
      if (activeOfficialDuo) setOfficialExploded(activeOfficialDuo, explodeAmount);

      const chapter = scrollProgress * 4;
      const orbit = scrollProgress * Math.PI * 2.75;
      const breathing = reducedMotion ? 0 : Math.sin(elapsed * 0.72) * 0.055;
      const cameraPush = Math.sin(Math.min(1, Math.max(0, chapter - 1)) * Math.PI) * 1.2;
      const foldRatio = fold / (Math.PI / 2);
      const closeViewAssist = THREE.MathUtils.smoothstep(foldRatio, 0.52, 0.9);
      const duoViewRotation = config.model === "duo" ? fold * closeViewAssist : 0;
      const targetRotationY = Math.PI + duoViewRotation + orbit + dragY + autoRotation;
      const targetRotationX = -0.08 + Math.sin(scrollProgress * Math.PI * 2) * 0.24 + dragX;
      world.rotation.y += (targetRotationY - world.rotation.y) * 0.055;
      world.rotation.x += (targetRotationX - world.rotation.x) * 0.055;
      world.rotation.z += ((scrollProgress - 0.5) * 0.12 - world.rotation.z) * 0.04;
      const introOffset = window.innerWidth < 760 ? (config.model === "duo" ? 0.15 : 0.65) : 1.2;
      world.position.x += ((scrollProgress < 0.18 ? introOffset : scrollProgress > 0.78 ? -0.8 : 0) - world.position.x) * 0.04;
      world.position.y = breathing + Math.sin(scrollProgress * Math.PI * 3) * 0.18;
      const baseScale = config.model === "duo" ? (window.innerWidth < 760 ? 0.58 : 0.76) : (window.innerWidth < 760 ? 0.72 : 0.94);
      const focusScale = 1 + Math.max(0, 1 - Math.abs(scrollProgress - 0.48) * 7) * 0.33;
      world.scale.setScalar(baseScale * focusScale);
      camera.position.z += ((13.2 - zoom - cameraPush) - camera.position.z) * 0.06;

      burgundyLight.color.lerp(targetColor, 0.05);
      burgundyLight.intensity = 34 + Math.sin(scrollProgress * Math.PI) * 20;
      blueLight.position.x = Math.cos(elapsed * 0.35) * 6;
      blueLight.position.y = 2 + Math.sin(elapsed * 0.35) * 2;

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      timer.dispose();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerUp);
      canvas.removeEventListener("keydown", handleKeyDown);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if ("map" in material && material.map instanceof THREE.Texture) material.map.dispose();
            material.dispose();
          });
        }
      });
      renderer.dispose();
    };
  }, [containerRef]);

  if (failed) {
    return <div className="webgl-fallback">WebGL chưa khả dụng trên trình duyệt này.</div>;
  }

  return (
    <canvas
      ref={canvasRef}
      className="three-canvas"
      tabIndex={0}
      aria-label="Mô hình 3D tương tác. Kéo để xoay, dùng phím mũi tên để đổi góc nhìn, phím cộng và trừ để zoom."
    />
  );
}
