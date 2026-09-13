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
  "--footer-glow-opacity": 0.45,
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
      <svg className="footer-glow__grid" viewBox="0 0 1400 420" preserveAspectRatio="none" aria-hidden="true">
        <g>
          {Array.from({ length: 15 }, (_, index) => (
            <line key={`v-${index}`} x1={index * 100} y1="0" x2={index * 100} y2="420" />
          ))}
          {Array.from({ length: 6 }, (_, index) => (
            <line key={`h-${index}`} x1="0" y1={index * 84} x2="1400" y2={index * 84} />
          ))}
        </g>
      </svg>

      <div className="footer-glow__datum footer-glow__datum--left" aria-hidden="true">
        <span>AR / 001—020</span>
        <span>OBJ / LIVE</span>
      </div>
      <div className="footer-glow__datum footer-glow__datum--right" aria-hidden="true">
        <span>WEBGL / RGB</span>
        <span>60 FPS / XYZ</span>
      </div>

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
        <path d={appleLogoPath} transform="translate(166 66) scale(.47)" className="footer-glow__mark footer-glow__text--base" />
        <text x="895" y="283" textAnchor="middle" className="footer-glow__text footer-glow__text--base">spatial.</text>
        <path d={appleLogoPath} transform="translate(166 66) scale(.47)" className="footer-glow__mark footer-glow__text--ambient" aria-hidden="true" />
        <text x="895" y="283" textAnchor="middle" className="footer-glow__text footer-glow__text--ambient" aria-hidden="true">spatial.</text>
      </svg>
      <div className="footer-glow__spotlight" aria-hidden="true">
        <svg className="footer-glow__logo" viewBox="0 0 1400 420" preserveAspectRatio="xMidYMid meet">
          <path d={appleLogoPath} transform="translate(166 66) scale(.47)" className="footer-glow__mark footer-glow__text--lit" />
          <text x="895" y="283" textAnchor="middle" className="footer-glow__text footer-glow__text--lit">spatial.</text>
        </svg>
      </div>
    </div>
  );
}
