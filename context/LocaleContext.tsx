"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "fr" | "en";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("locale");
      if (stored === "fr" || stored === "en") {
        setLocaleState(stored);
        return;
      }
      const browserLang = navigator.language || "";
      setLocaleState(browserLang.startsWith("en") ? "en" : "fr");
    } catch {
      setLocaleState("fr");
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
};