"use client"

import { useState, useEffect } from 'react';
import { Header } from '@/components/portfolio/Header';
import { Navigation } from '@/components/portfolio/Navigation';
import { StudiesSection } from '@/components/portfolio/StudiesSection';
import { ExperiencesSection } from '@/components/portfolio/ExperiencesSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ContactSection } from './ContactSection';

export function Portfolio() {
  const [activeSection, setActiveSection] = useState('studies');

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sections = ['studies', 'experience', 'projects', 'skills'];
    
    const handleScroll = () => {
      const bottomThreshold = 10;
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - bottomThreshold) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

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
              if ((window.innerHeight + window.scrollY) < document.documentElement.scrollHeight - 50) {
                setActiveSection(sectionId);
              }
            }
          });
        }, observerOptions);
        
        observers[sectionId].observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}