import React from 'react';

import { useEffect, useState, useRef } from 'react';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const index = Math.floor(scrollProgress * experiences.length);
        setActiveIndex(Math.min(Math.max(0, index), experiences.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: 'Member of Technical Staff - 2',
      company: 'Fyle Technologies Pvt. Ltd.',
      location: 'Bengaluru, KA',
      period: 'July 2024 – Present',
      responsibilities: [
        'Angular Migration: Spearheaded migration from **Angular 14 to 17**, modernizing the frontend codebase.',
        'Quality Assurance: Established and managed team testing standards, utilizing **Notion** and **Sheets** for efficient testing of new features prior to production deployment.',
        'Automated support tasks by developing multiple scripts, resulting in **increased productivity** and **reduced service requests by over 40%**.',
        'Leadership: **Mentored interns** and provided guidance on project development.'
      ]
    },
    {
      title: 'Member of Technical Staff - 1',
      company: 'Fyle Technologies Pvt. Ltd.',
      location: 'Bengaluru, KA',
      period: 'Mar. 2023 – June 2024',
      responsibilities: [
        'Component Development: Designed and developed multiple reusable frontend components using **PrimeNG** and **Angular**, reducing frontend repository size by **50%**.',
        'CSS Optimization: Implemented **Tailwind CSS** for styling needs, refactored CSS classes for cross-repository usage.',
        'Application Revamp: Rebuilt Angular UI app using **PrimeNG** and **Angular 14**, reducing customer friction by **60%**.',
        'Backend Development: Enhanced multiple backend modules and created testing environments for streamlined collaboration.',
        'Testing Excellence: Added **end-to-end tests** using **Cypress**, achieving **97% code coverage** with **Jasmine** and **Karma**.',
        'Customer Success: Excelled in support engineering, providing timely bug resolutions and maintaining high customer satisfaction.'
      ]
    },
    {
      title: 'Engineering Intern',
      company: 'Fyle Technologies Pvt. Ltd.',
      location: 'Bengaluru, KA',
      period: 'Oct. 2022 – Feb. 2023',
      responsibilities: [
        'Frontend Development: Built features using **Angular** and **Angular Material**, with comprehensive unit tests using **Jasmine-Karma**.',
        'Backend Excellence: Achieved **100% code coverage** in unit tests using **pytest** for backend code changes.',
        'Email Integration: Developed customer notification system using **Jinja** templating.',
        'Documentation: Consistently maintained detailed engineering documentation for knowledge sharing and efficient onboarding.'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="section relative bg-black" id="experience">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
      <div className="content-wrapper relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">Experience</h2>
        <div className="space-y-24">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ${index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'}`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 text-white">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-xl text-gray-300">{exp.company} | {exp.location}</p>
              </div>
              <p className="text-xl text-gray-300 font-medium">{exp.period}</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {exp.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 text-lg leading-relaxed transform hover:scale-105 transition-transform duration-300"
                  dangerouslySetInnerHTML={{
                    __html: resp.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-semibold">$1</span>')
                  }}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Experience;