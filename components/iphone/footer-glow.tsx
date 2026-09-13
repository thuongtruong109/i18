"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";
import { AppleMarkPath } from "./apple-mark";

type GlowStyle = CSSProperties & {
  "--footer-glow-x": string;
  "--footer-glow-y": string;
  "--footer-glow-opacity": number;
};

const initialGlowStyle: GlowStyle = {
  "--footer-glow-x": "50%",
  "--footer-glow-y": "50%",
  "--footer-glow-opacity": 0.45,
};

export function FooterGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  function updateGlow(event: PointerEvent<HTMLDivElement>) {
    const element = glowRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    element.style.setProperty("--footer-glow-x", `${event.clientX - bounds.left}px`);
    element.style.setProperty("--footer-glow-y", `${event.clientY - bounds.top}px`);
    element.style.setProperty("--footer-glow-opacity", "1");
  }

  function hideGlow() {
    glowRef.current?.style.setProperty("--footer-glow-opacity", "0");
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
        <g transform="translate(156 -98) scale(14.5)">
          <AppleMarkPath className="footer-glow__mark footer-glow__text--base" />
        </g>
        <text x="895" y="283" textAnchor="middle" className="footer-glow__text footer-glow__text--base">spatial.</text>
        <g transform="translate(156 -98) scale(14.5)" aria-hidden="true">
          <AppleMarkPath className="footer-glow__mark footer-glow__text--ambient" />
        </g>
        <text x="895" y="283" textAnchor="middle" className="footer-glow__text footer-glow__text--ambient" aria-hidden="true">spatial.</text>
      </svg>
      <div className="footer-glow__spotlight" aria-hidden="true">
        <svg className="footer-glow__logo" viewBox="0 0 1400 420" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(156 -98) scale(14.5)">
            <AppleMarkPath className="footer-glow__mark footer-glow__text--lit" />
          </g>
          <text x="895" y="283" textAnchor="middle" className="footer-glow__text footer-glow__text--lit">spatial.</text>
        </svg>
      </div>
    </div>
  );
}
