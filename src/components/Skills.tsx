import React from 'react';
import { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const index = Math.floor(scrollProgress * skillCategories.length);
        setActiveIndex(Math.min(Math.max(0, index), skillCategories.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        'Advanced **React** and **Angular** development',
        'Modern CSS with **Tailwind** and **SCSS**',
        'State management with **NgRx** and **Redux**',
        'UI Libraries: **PrimeNG**, **Material**'
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        '**Python** and **Django** framework expertise',
        'RESTful API design and implementation',
        'Database design with **PostgreSQL**',
        'API testing with **Postman** and **pytest**'
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        'Version control with **Git** and **GitHub**',
        'CI/CD pipelines implementation',
        'Docker containerization',
        'AWS cloud services'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="section relative bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 opacity-50"></div>
      <div className="content-wrapper relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-16 tracking-tight">Skills</h2>
        <div className="space-y-24">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'}`}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{category.category}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transform hover:scale-105 transition-transform duration-300"
                    dangerouslySetInnerHTML={{
                      __html: skill.replace(/\*\*(.*?)\*\*/g, '<span class="text-gray-900 dark:text-white font-semibold">$1</span>')
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

export default Skills;