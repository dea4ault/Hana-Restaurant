"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translations, isRTL } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("hana-language") as Language
    if (saved && ["en", "ar", "ru", "tr"].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("hana-language", language)
    document.documentElement.dir = isRTL(language) ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = translations[language]
  const dir = isRTL(language) ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
