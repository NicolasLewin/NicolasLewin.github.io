import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from '@/data/portfolioData';
import { translations } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';
import { Skills } from '@/types/portfolio';

export function SkillsSection() {
  const { language } = useLanguage();
  const skills = portfolioData[language].skills;

  return (
    <section id="skills" className="scroll-mt-14">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">
        {translations[language].sections.skills}
      </h2>
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(Object.keys(skills) as Array<keyof Skills>).map((category) => (
              <div key={category}>
                <h3 className="font-semibold mb-2 text-blue-300">
                  {category === 'IDEs' ? 'IDEs' : category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category].map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}