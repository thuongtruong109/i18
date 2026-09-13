import { ArrowUp, ArrowUpRight, Sparkles } from "lucide-react";
import { languageOptions, type Language, type Translation } from "./i18n";
import { FooterGlow } from "./footer-glow";
import { productSourceGroups } from "./footer-source-data";

type ExperienceFooterProps = {
  content: Translation["sources"];
  language: Language;
  languageLabel: string;
  onLanguageChange: (language: Language) => void;
};

const sourceCount = productSourceGroups.reduce((total, group) => total + group.series.length, 0);

export function ExperienceFooter({
  content,
  language,
  languageLabel,
  onLanguageChange,
}: ExperienceFooterProps) {
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

          <div className="footer-proof" aria-hidden="true">
            <span><strong>{String(productSourceGroups.length).padStart(2, "0")}</strong>{content.resources}</span>
            <i />
            <span><strong>{String(sourceCount).padStart(2, "0")}</strong>APPLE.COM</span>
          </div>
        </div>

        <div className="footer-atlas">
          <div className="footer-atlas__heading">
            <span className="footer-column__label">{content.resources}</span>
            <span aria-hidden="true">001 — {String(sourceCount).padStart(3, "0")}</span>
          </div>
          <nav className="footer-source-groups" aria-label={content.navLabel}>
            {productSourceGroups.map((group, groupIndex) => (
              <div className="footer-source-group" key={group.product}>
                <div className="footer-source-group__heading">
                  <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                  <strong>{group.product}</strong>
                  <span>{String(group.series.length).padStart(2, "0")}</span>
                </div>
                <div className="footer-source-group__links">
                  {group.series.map((series) => (
                    <a href={series.href} target="_blank" rel="noreferrer" key={series.label}>
                      <span>{series.label}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-return">
          <span className="footer-column__label">{content.experience}</span>
          <p>{content.conceptNote}</p>
          <a href="#experience" className="footer-top-link">
            <span>{content.backToTop}</span>
            <ArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-language-rail" aria-label={languageLabel}>
        <span className="footer-language-rail__label">{languageLabel}</span>
        <div className="footer-language-rail__options">
          {languageOptions.map((option) => (
            <button
              type="button"
              key={option.value}
              aria-pressed={language === option.value}
              onClick={() => onLanguageChange(option.value)}
            >
              <span>{option.value.toUpperCase()}</span>
              <small>{option.label}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>APPLE PRODUCT LAB / 2026</span>
        <span className="footer-bottom__pulse"><i /> LIVE GEOMETRY</span>
        <span>THREE.JS / APPLE AR / INDEPENDENT</span>
      </div>
    </footer>
  );
}
