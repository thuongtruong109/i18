import { AppleMarkPath } from "./apple-mark";

type FooterWordmarkProps = {
  className: string;
};

export function FooterWordmark({ className }: FooterWordmarkProps) {
  return (
    <g className={className} aria-hidden="true">
      <g transform="translate(156 -98) scale(14.5)">
        <AppleMarkPath pathLength={100} className="footer-glow__mark" />
      </g>
      <text x="895" y="283" textAnchor="middle" className="footer-glow__text">
        Apple
      </text>
    </g>
  );
}
