import { ArrowUp, ArrowUpRight, Sparkles } from "lucide-react";
import type { Translation } from "./i18n";
import { FooterGlow } from "./footer-glow";
import { footerProductLinks } from "./footer-source-data";

type ExperienceFooterProps = {
  content: Translation["sources"];
};

export function ExperienceFooter({ content }: ExperienceFooterProps) {
  return (
    <footer className="experience-footer" id="sources">
      <FooterGlow />

      <div className="footer-content">
        <div className="footer-about">
          <div className="footer-badge">
            <Sparkles aria-hidden="true" />
            <span>{content.badge}</span>
          </div>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <div className="footer-return">
          <span className="footer-column__label">{content.experience}</span>
          <p>{content.conceptNote}</p>
          <a href="#experience" className="footer-top-link">
            <span>{content.backToTop}</span>
            <ArrowUp aria-hidden="true" />
          </a>
        </div>

        <nav className="footer-source-line" aria-label={content.navLabel}>
          <span className="footer-column__label">{content.resources}</span>
          <div className="footer-source-line__links">
            {footerProductLinks.map((product, index) => (
              <a href={product.href} target="_blank" rel="noreferrer" key={product.label}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <span>{product.label}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>APPLE PRODUCT LAB / 2026</span>
        <span>THREE.JS / APPLE AR / INDEPENDENT</span>
      </div>
    </footer>
  );
}
