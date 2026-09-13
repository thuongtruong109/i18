"use client";

import { useEffect, useState } from "react";
import { htmlLanguage, isLanguage, translations, type Language } from "./i18n";

const STORAGE_KEY = "apple-product-experience-language";
const LEGACY_STORAGE_KEY = "iphone-experience-language";

function browserLanguage(): Language {
  const candidate = navigator.language.toLowerCase().split("-")[0];
  return isLanguage(candidate) ? candidate : "vi";
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    let initialLanguage: Language;
    try {
      const savedLanguage = window.localStorage.getItem(STORAGE_KEY)
        ?? window.localStorage.getItem(LEGACY_STORAGE_KEY);
      initialLanguage = isLanguage(savedLanguage) ? savedLanguage : browserLanguage();
    } catch {
      initialLanguage = browserLanguage();
    }

    const hydrationTimer = window.setTimeout(() => setLanguage(initialLanguage), 0);
    return () => window.clearTimeout(hydrationTimer);
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
