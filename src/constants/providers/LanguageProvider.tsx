"use client";
import { ReactNode, useState, useCallback } from "react";
import { LanguageContext } from "./LanguageContext";

export default function LanguageProvider({
  children,
  initialLanguage = "en",
}: {
  children: ReactNode;
  initialLanguage?: string;
}) {
  const [slug, setSlug] = useState<string>(initialLanguage);

  const changeLanguage = useCallback((language: string) => {
    setSlug(language);
  }, []);

  return (
    <LanguageContext.Provider value={{ slug, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
