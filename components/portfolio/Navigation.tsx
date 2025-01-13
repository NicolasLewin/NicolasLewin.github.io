import { type NavigationProps } from '@/types/portfolio';
import { translations } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navigation({ activeSection }: NavigationProps) {
  const { language } = useLanguage();
  const sections = ['studies', 'experience', 'projects', 'skills'] as const;

  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        <ul className="flex space-x-8">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`transition-colors ${
                  activeSection === section
                    ? 'text-blue-400 font-semibold'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {translations[language].navigation[section]}
              </a>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}