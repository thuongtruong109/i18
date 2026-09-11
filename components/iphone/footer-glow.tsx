"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";

type GlowStyle = CSSProperties & {
  "--footer-glow-x": string;
  "--footer-glow-y": string;
  "--footer-glow-opacity": number;
};

const initialGlowStyle: GlowStyle = {
  "--footer-glow-x": "50%",
  "--footer-glow-y": "50%",
  "--footer-glow-opacity": 0,
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
        viewBox="0 0 1200 360"
        role="img"
        aria-label="Apple"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="footer-neon-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6f2235" />
            <stop offset="35%" stopColor="#e77b90" />
            <stop offset="58%" stopColor="#ffe0e7" />
            <stop offset="78%" stopColor="#bc405a" />
            <stop offset="100%" stopColor="#6f2235" />
          </linearGradient>
        </defs>
        <text x="600" y="286" textAnchor="middle" className="footer-glow__text footer-glow__text--base">Apple</text>
        <text x="600" y="286" textAnchor="middle" className="footer-glow__text footer-glow__text--ambient" aria-hidden="true">Apple</text>
      </svg>
      <div className="footer-glow__spotlight" aria-hidden="true">
        <svg className="footer-glow__logo" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid meet">
          <text x="600" y="286" textAnchor="middle" className="footer-glow__text footer-glow__text--lit">Apple</text>
        </svg>
      </div>
    </div>
  );
}
