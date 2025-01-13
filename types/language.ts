export type Language = 'en' | 'fr';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}