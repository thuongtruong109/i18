import { ArrowUp, ArrowUpRight } from "lucide-react";
import { footerProductLinks } from "./footer-source-data";

type FooterOrbitNavProps = {
  backToTop: string;
  experienceLabel: string;
  navLabel: string;
  resourcesLabel: string;
};

export function FooterOrbitNav({
  backToTop,
  experienceLabel,
  navLabel,
  resourcesLabel,
}: FooterOrbitNavProps) {
  return (
    <nav className="footer-orbit-nav" aria-label={navLabel}>
      <span className="footer-orbit-nav__eyebrow">{resourcesLabel}</span>
      <span className="footer-orbit-nav__ring" aria-hidden="true" />
      <span className="footer-orbit-nav__satellite" aria-hidden="true" />
      <span className="footer-orbit-nav__beam" aria-hidden="true" />

      <a href="#experience" className="footer-orbit-nav__center">
        <span>{experienceLabel}</span>
        <strong>{backToTop}</strong>
        <ArrowUp aria-hidden="true" />
      </a>

      <ol className="footer-orbit-nav__links">
        {footerProductLinks.map((product, index) => (
          <li className={`footer-orbit-nav__item footer-orbit-nav__item--${index + 1}`} key={product.label}>
            <a href={product.href} target="_blank" rel="noreferrer">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <span>{product.label}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
