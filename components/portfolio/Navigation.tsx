import { useState } from 'react';
import { type NavigationProps } from '@/types/portfolio';
import { translations } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export function Navigation({ activeSection }: NavigationProps) {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['studies', 'experience', 'projects', 'skills', 'contact'] as const;

  return (
    <nav className="py-4">
      <div className="flex items-center justify-between lg:hidden px-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-300 hover:text-blue-400 transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        <LanguageSwitcher />
      </div>

      <div className="hidden lg:flex items-center justify-between">
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

      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4 items-center">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setIsMenuOpen(false)}
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
        </div>
      )}
    </nav>
  );
}