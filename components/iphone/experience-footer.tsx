import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Translation } from "./i18n";
import { FooterGlow } from "./footer-glow";
import { productSourceGroups } from "./footer-source-data";

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
          <nav className="footer-source-groups" aria-label={content.navLabel}>
            {productSourceGroups.map((group) => (
              <div className="footer-source-group" key={group.product}>
                <span className="footer-source-group__label">{group.product}</span>
                <div className="footer-source-group__links">
                  {group.series.map((series) => (
                    <a href={series.href} target="_blank" rel="noreferrer" key={series.label}>
                      {series.label} <ArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-column footer-column--experience">
          <span className="footer-column__label">{content.experience}</span>
          <a href="#experience" className="footer-top-link">{content.backToTop} <span aria-hidden="true">↑</span></a>
          <p>{content.conceptNote}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>APPLE PRODUCT LAB / 2026</span>
        <span>THREE.JS / APPLE AR</span>
      </div>
    </footer>
  );
}
