import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from '@/data/portfolioData';
import { translations } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const { language } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-14">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">{translations[language].sections.projects}</h2>
      <div className="space-y-6">
        {portfolioData[language].projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-blue-300">{project.name}</h3>
                <span className="text-gray-400 text-sm">{project.date}</span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-700 text-blue-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-blue-400 rounded-md transition-all text-sm"
                  >
                    <Github className="w-4 h-4" />
                    {translations[language].viewCode}
                  </a>
                )}
                {project.demoLink && (
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-blue-400 rounded-md transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {translations[language].viewDemo}
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}