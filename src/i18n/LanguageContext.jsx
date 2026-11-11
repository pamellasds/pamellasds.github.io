import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = (key) => {
    return translations[lang]?.[key] || translations['en'][key] || translations['pt'][key] || key
  }

  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt')

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
