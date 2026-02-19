/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "../lib/translations";
import { translations } from "../lib/translations";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "it";

  const saved = window.localStorage.getItem("language");
  if (saved === "it" || saved === "en") return saved;

  const browserLanguages = [
    window.navigator.language,
    ...(window.navigator.languages ?? []),
  ]
    .filter(Boolean)
    .map((value) => value.toLowerCase());
  const hasItalianLanguage = browserLanguages.some((value) =>
    value.startsWith("it"),
  );
  if (hasItalianLanguage) return "it";

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  const italianTimezones = new Set([
    "Europe/Rome",
    "Europe/San_Marino",
    "Europe/Vatican",
  ]);
  if (italianTimezones.has(timezone)) return "it";

  const region = window.navigator.language.split("-")[1]?.toUpperCase();
  if (region === "IT") return "it";

  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(detectInitialLanguage);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "it" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
