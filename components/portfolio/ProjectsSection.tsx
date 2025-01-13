import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolioData';
import { translations } from '@/data/translations';


export function ProjectsSection() {
  const { language } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-14">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">{translations[language].sections.projects}</h2>
      <div className="space-y-6">
        {portfolioData[language].projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.name}</h3>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-700 text-blue-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                View Project →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
