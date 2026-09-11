"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languageOptions, type Language } from "./i18n";

type LanguageSelectProps = {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
};

export function LanguageSelect({ language, label, onChange }: LanguageSelectProps) {
  const selectedLanguage = languageOptions.find((option) => option.value === language);
  const selectedFlag = selectedLanguage ? `https://flagcdn.com/20x15/${selectedLanguage.flagCode}.png` : undefined;

  return (
    <Select value={language} onValueChange={(value) => onChange(value as Language)}>
      <SelectTrigger className="language-trigger" size="sm" aria-label={label} title={label}>
        {selectedFlag && <img src={selectedFlag} width="20" height="15" alt="" className="language-flag" />}
        <SelectValue>{selectedLanguage?.label}</SelectValue>
      </SelectTrigger>
      <SelectContent className="language-menu" position="popper" align="end">
        {languageOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
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
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
