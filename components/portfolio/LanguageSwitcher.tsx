import { useLanguage } from '@/context/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
    >
      <span className="text-base">
        {language === 'en' ? '🇫🇷' : '🇬🇧'}
      </span>
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}