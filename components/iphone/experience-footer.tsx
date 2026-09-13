import { Sparkles } from "lucide-react";
import type { Translation } from "./i18n";
import { FooterGlow } from "./footer-glow";
import { FooterOrbitNav } from "./footer-orbit-nav";

type ExperienceFooterProps = {
  content: Translation["sources"];
};

export function ExperienceFooter({ content }: ExperienceFooterProps) {
  return (
    <footer className="experience-footer" id="sources">
      <FooterGlow />

      <div className="footer-closing">
        <article className="footer-manifesto">
          <div className="footer-badge">
            <Sparkles aria-hidden="true" />
            <span>{content.badge}</span>
          </div>
          <h2>{content.title}</h2>
          <p className="footer-manifesto__intro">{content.description}</p>
          <div className="footer-manifesto__note">
            <span className="footer-column__label">{content.experience}</span>
            <p>{content.conceptNote}</p>
          </div>
        </article>

        <FooterOrbitNav
          backToTop={content.backToTop}
          experienceLabel={content.experience}
          navLabel={content.navLabel}
          resourcesLabel={content.resources}
        />
      </div>

      <div className="footer-bottom">
        <span>APPLE PRODUCT LAB / 2026</span>
        <span>THREE.JS / APPLE AR / INDEPENDENT</span>
      </div>
    </footer>
  );
}
