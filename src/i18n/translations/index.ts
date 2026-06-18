import { it } from './it';
import { en } from './en';
import type { Language, Translations } from '../../types/i18n';

export const translations: Record<Language, Translations> = { it, en };

export function getTranslations(language: Language): Translations {
  return translations[language];
}
