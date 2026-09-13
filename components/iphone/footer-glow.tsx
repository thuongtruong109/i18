"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";
import { FooterWordmark } from "./footer-wordmark";

type GlowStyle = CSSProperties & {
  "--footer-glow-x": string;
  "--footer-glow-y": string;
  "--footer-glow-opacity": number;
  "--footer-shift-x": string;
  "--footer-shift-y": string;
  "--footer-shift-x-reverse": string;
  "--footer-shift-y-reverse": string;
};

const initialGlowStyle: GlowStyle = {
  "--footer-glow-x": "50%",
  "--footer-glow-y": "50%",
  "--footer-glow-opacity": 0.45,
  "--footer-shift-x": "0px",
  "--footer-shift-y": "0px",
  "--footer-shift-x-reverse": "0px",
  "--footer-shift-y-reverse": "0px",
};

export function FooterGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  function updateGlow(event: PointerEvent<HTMLDivElement>) {
    const element = glowRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const shiftX = ((localX / bounds.width) - 0.5) * 8;
    const shiftY = ((localY / bounds.height) - 0.5) * 5;

    element.style.setProperty("--footer-glow-x", `${localX}px`);
    element.style.setProperty("--footer-glow-y", `${localY}px`);
    element.style.setProperty("--footer-glow-opacity", "1");
    element.style.setProperty("--footer-shift-x", `${shiftX}px`);
    element.style.setProperty("--footer-shift-y", `${shiftY}px`);
    element.style.setProperty("--footer-shift-x-reverse", `${-shiftX}px`);
    element.style.setProperty("--footer-shift-y-reverse", `${-shiftY}px`);
  }

  function hideGlow() {
    const element = glowRef.current;
    if (!element) return;

    element.style.setProperty("--footer-glow-opacity", "0");
    element.style.setProperty("--footer-shift-x", "0px");
    element.style.setProperty("--footer-shift-y", "0px");
    element.style.setProperty("--footer-shift-x-reverse", "0px");
    element.style.setProperty("--footer-shift-y-reverse", "0px");
  }

  return (
    <div
      ref={glowRef}
      className="footer-glow"
      style={initialGlowStyle}
      onPointerEnter={updateGlow}
      onPointerMove={updateGlow}
      onPointerLeave={hideGlow}
    >
      <div className="footer-glow__aura" aria-hidden="true" />

      <svg
        className="footer-glow__logo"
        viewBox="0 0 1400 420"
        role="img"
        aria-label="Apple spatial geometry"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="footer-glow__orbit" aria-hidden="true">
          <circle cx="285" cy="210" r="150" />
          <ellipse cx="285" cy="210" rx="220" ry="72" transform="rotate(-18 285 210)" />
          <circle cx="487" cy="145" r="5" />
          <circle cx="116" cy="286" r="3" />
        </g>
        <path
          className="footer-glow__sweep footer-glow__sweep--quiet"
          d="M56 304C302 70 646 40 1008 112c184 37 294 122 342 216"
          aria-hidden="true"
        />
        <path
          className="footer-glow__sweep footer-glow__sweep--energy"
          d="M56 304C302 70 646 40 1008 112c184 37 294 122 342 216"
          pathLength="1000"
          aria-hidden="true"
        />
        <FooterWordmark className="footer-glow__wordmark footer-glow__wordmark--base" />
        <FooterWordmark className="footer-glow__wordmark footer-glow__wordmark--refraction footer-glow__wordmark--cyan" />
        <FooterWordmark className="footer-glow__wordmark footer-glow__wordmark--refraction footer-glow__wordmark--rose" />
        <FooterWordmark className="footer-glow__wordmark footer-glow__wordmark--ambient" />
        <FooterWordmark className="footer-glow__wordmark footer-glow__wordmark--trace" />
      </svg>
      <div className="footer-glow__spotlight" aria-hidden="true">
        <svg className="footer-glow__logo" viewBox="0 0 1400 420" preserveAspectRatio="xMidYMid meet">
          <FooterWordmark className="footer-glow__wordmark footer-glow__wordmark--lit" />
        </svg>
      </div>
    </div>
  );
}
