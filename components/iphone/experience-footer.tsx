import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Translation } from "./i18n";
import { FooterGlow } from "./footer-glow";

type ExperienceFooterProps = {
  content: Translation["sources"];
};

export function ExperienceFooter({ content }: ExperienceFooterProps) {
  return (
    <footer className="experience-footer" id="sources">
      <FooterGlow />

      <div className="footer-content">
        <div className="footer-about">
          <div className="footer-badge"><Sparkles aria-hidden="true" /><span>{content.badge}</span></div>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <div className="footer-column">
          <span className="footer-column__label">{content.resources}</span>
          <nav aria-label={content.navLabel}>
            <a href="https://www.apple.com/iphone-18-pro/" target="_blank" rel="noreferrer">Apple · 18 Pro <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://www.apple.com/iphone-duo/" target="_blank" rel="noreferrer">Apple · Duo <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://www.apple.com/iphone-air/" target="_blank" rel="noreferrer">Apple · Air <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://www.apple.com/iphone-17/" target="_blank" rel="noreferrer">Apple · 17 <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://www.apple.com/iphone-17e/" target="_blank" rel="noreferrer">Apple · 17e <ArrowUpRight aria-hidden="true" /></a>
          </nav>
        </div>

        <div className="footer-column footer-column--experience">
          <span className="footer-column__label">{content.experience}</span>
          <a href="#experience" className="footer-top-link">{content.backToTop} <span aria-hidden="true">↑</span></a>
          <p>{content.conceptNote}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>iPHONE AR LAB / 2026</span>
        <span>THREE.JS / APPLE AR</span>
      </div>
    </footer>
  );
}
