import { Card, CardContent } from "@/components/ui/card";
import { translations } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';
import { Mail } from 'lucide-react';

export function ContactSection() {
  const { language } = useLanguage();
  const email = "nicolas.lewin@outlook.com";

  return (
    <section id="contact" className="scroll-mt-14">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">
        {translations[language].sections.contact}
      </h2>
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-300 mb-4">
              {translations[language].contact.text}
            </p>
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              {email}
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}