import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const { language } = useLanguage();

  return (
    <header className="max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-blue-400 mb-4">{portfolioData[language].header.name}</h1>
          <p className="text-xl text-gray-300 mb-6">{portfolioData[language].header.title}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/api/placeholder/200/200"
            alt="Profile Picture"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-400"
          />
        </div>
      </div>
    </header>
  );
}