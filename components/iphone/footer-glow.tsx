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

const appleLogoPath = "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-72.5-19.7-39.2.6-75.3 22.8-95.5 58.4-40.7 70.6-10.4 174.9 29.2 232.2 19.8 28.6 43.5 60.8 74.6 59.6 29.8-1.2 41-19.3 76.9-19.3 35.9 0 46 19.3 77.5 18.7 32-.6 52.3-29.1 71.9-57.8-81.1-38.1-76.9-111.9-75.5-114.1zm-58.2-164.2c26.7-31.6 24.2-60.4 23.4-70.8-23.5 1.4-50.7 16-66.2 34-17 19.2-27 43-24.9 69.8 25.4 2 48.5-11.1 67.7-33z";

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
        viewBox="0 0 1400 360"
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
        <path d={appleLogoPath} transform="translate(180 34) scale(.54)" className="footer-glow__mark footer-glow__text--base" />
        <text x="880" y="286" textAnchor="middle" className="footer-glow__text footer-glow__text--base">Apple</text>
        <path d={appleLogoPath} transform="translate(180 34) scale(.54)" className="footer-glow__mark footer-glow__text--ambient" aria-hidden="true" />
        <text x="880" y="286" textAnchor="middle" className="footer-glow__text footer-glow__text--ambient" aria-hidden="true">Apple</text>
      </svg>
      <div className="footer-glow__spotlight" aria-hidden="true">
        <svg className="footer-glow__logo" viewBox="0 0 1400 360" preserveAspectRatio="xMidYMid meet">
          <path d={appleLogoPath} transform="translate(180 34) scale(.54)" className="footer-glow__mark footer-glow__text--lit" />
          <text x="880" y="286" textAnchor="middle" className="footer-glow__text footer-glow__text--lit">Apple</text>
        </svg>
      </div>
    </div>
  );
}
