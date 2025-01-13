"use client"

import { useState, useEffect } from 'react';
import { Header } from '@/components/portfolio/Header';
import { Navigation } from '@/components/portfolio/Navigation';
import { StudiesSection } from '@/components/portfolio/StudiesSection';
import { ExperiencesSection } from '@/components/portfolio/ExperiencesSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';

export function Portfolio() {
  const [activeSection, setActiveSection] = useState('studies');

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sections = ['studies', 'experience', 'projects', 'skills'];
    
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '-56px 0px -40% 0px'
    };

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observers[sectionId] = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        }, observerOptions);
        
        observers[sectionId].observe(element);
      }
    });

    return () => {
      sections.forEach(sectionId => {
        if (observers[sectionId]) {
          observers[sectionId].disconnect();
        }
      });
    };
  }, []);


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="sticky top-0 bg-gray-800 border-b border-gray-700 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navigation activeSection={activeSection}/>
        </div>
      </div>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Header />
          <div className="space-y-12">
            <StudiesSection />
            <ExperiencesSection />
            <ProjectsSection />
            <SkillsSection />
          </div>
        </div>
      </div>
    </div>
  );
}