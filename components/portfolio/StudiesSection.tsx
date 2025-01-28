import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { translations } from '@/data/translations';

export function StudiesSection() {
  const { language } = useLanguage();
  
  return (
    <section id="studies" className="scroll-mt-14">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">{translations[language].sections.studies}</h2>
      <div className="space-y-6">
        {portfolioData[language].studies.map((study, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">{study.degree}</h3>
                  <p className="text-gray-300">{study.school}</p>
                  <p className="text-gray-400 text-sm">{study.year}</p>
                  <ul className="mt-2 space-y-1">
                    {study.description.map((study, id) => (
                      <li key={id} className="text-gray-300">- {study}</li>
                    ))}
                  </ul>
                </div>
                <img  
                  src={study.logo}
                  alt={`${study.school} logo`}
                  className="w-36 h-36 object-contain bg-white rounded-lg p-3 ml-6"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
