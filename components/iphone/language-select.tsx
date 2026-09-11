"use client";

/* eslint-disable @next/next/no-img-element -- FlagCDN provides the requested fixed-size remote flag assets. */

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { languageOptions, type Language } from "./i18n";

type LanguageSelectProps = {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
};

export function LanguageSelect({ language, label, onChange }: LanguageSelectProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const selectedLanguage = languageOptions.find((option) => option.value === language);
  const selectedFlag = selectedLanguage ? `https://flagcdn.com/20x15/${selectedLanguage.flagCode}.png` : undefined;

  useEffect(() => {
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!detailsRef.current?.contains(event.target as Node)) detailsRef.current?.removeAttribute("open");
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") detailsRef.current?.removeAttribute("open");
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const selectLanguage = (nextLanguage: Language) => {
    onChange(nextLanguage);
    detailsRef.current?.removeAttribute("open");
  };

  return (
    <details ref={detailsRef} className="language-select">
      <summary className="language-trigger" aria-label={label} title={label}>
        {selectedFlag && <img src={selectedFlag} width="20" height="15" alt="" className="language-flag" />}
        <span className="language-value">{selectedLanguage?.label}</span>
        <ChevronDown className="language-chevron" aria-hidden="true" />
      </summary>
      <div className="language-menu" role="menu" aria-label={label}>
        {languageOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            role="menuitemradio"
            aria-checked={language === option.value}
            onClick={() => selectLanguage(option.value)}
          >
            <img
              src={`https://flagcdn.com/20x15/${option.flagCode}.png`}
              srcSet={`https://flagcdn.com/40x30/${option.flagCode}.png 2x`}
              width="20"
              height="15"
              alt=""
              className="language-flag"
              loading="lazy"
            />
            <span>{option.label}</span>
            <Check className="language-check" aria-hidden="true" />
          </button>
        ))}
      </div>
    </details>
  );
}
