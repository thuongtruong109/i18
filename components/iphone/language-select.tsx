"use client";

import { Languages } from "lucide-react";
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

  return (
    <Select value={language} onValueChange={(value) => onChange(value as Language)}>
      <SelectTrigger className="language-trigger" size="sm" aria-label={label} title={label}>
        <Languages aria-hidden="true" />
        <SelectValue>{selectedLanguage?.shortLabel}</SelectValue>
      </SelectTrigger>
      <SelectContent className="language-menu" position="popper" align="end">
        {languageOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <span className="language-option-code" aria-hidden="true">{option.shortLabel}</span>
            <span>{option.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
