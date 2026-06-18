import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Language, LanguageContextValue } from '../types/i18n';
import { detectLanguage, persistLanguage } from './detectLanguage';
import { getTranslations } from './translations';

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => detectLanguage());

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    persistLanguage(lang);
  }, []);

  const t = useMemo(() => getTranslations(language), [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.meta.description);
    }
  }, [language, t.meta.title, t.meta.description]);

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguageContext(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return context;
}
