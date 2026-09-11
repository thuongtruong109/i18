"use client";

import { useEffect, useState } from "react";
import { htmlLanguage, translations, type Language } from "./i18n";

const STORAGE_KEY = "iphone-experience-language";

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "vi" || value === "pt" || value === "es" || value === "zh" || value === "ja";
}

function browserLanguage(): Language {
  const candidate = navigator.language.toLowerCase().split("-")[0];
  return isLanguage(candidate) ? candidate : "vi";
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    try {
      const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
      setLanguage(isLanguage(savedLanguage) ? savedLanguage : browserLanguage());
    } catch {
      setLanguage(browserLanguage());
    }
  }, []);

  useEffect(() => {
    const content = translations[language];
    document.documentElement.lang = htmlLanguage[language];
    document.title = content.meta.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", content.meta.description);

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // The experience still works when storage is unavailable.
    }
  }, [language]);

  return { language, setLanguage, content: translations[language] };
}
