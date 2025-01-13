import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { translations } from '@/data/translations';

export function ExperiencesSection() {
  const { language } = useLanguage();
  
  return (
    <section id="experience" className="scroll-mt-14">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">{translations[language].sections.experience}</h2>
      <div className="space-y-6">
        {portfolioData[language].experience.map((exp, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">{exp.title}</h3>
                  <p className="text-gray-300 font-bold">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300">{resp}</li>
                    ))}
                  </ul>
                </div>
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 object-contain bg-white rounded-lg p-2 ml-6"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
