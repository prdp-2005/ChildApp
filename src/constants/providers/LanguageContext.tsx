"use client";
import { createContext } from "react";

export const LanguageContext = createContext<{
  slug: string;
  changeLanguage: (language: string) => void;
}>({
  slug: "",
  changeLanguage: () => { },
});
