import type { Language } from '../types/i18n';

const STORAGE_KEY = 'la-carta-doro-lang';

export function detectLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'it' || stored === 'en') {
    return stored;
  }

  const browserLang =
    navigator.language || navigator.languages?.[0] || 'en';
  return browserLang.toLowerCase().startsWith('it') ? 'it' : 'en';
}

export function persistLanguage(language: Language): void {
  localStorage.setItem(STORAGE_KEY, language);
}

export { STORAGE_KEY };
