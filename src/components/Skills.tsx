import React from 'react';
import { useEffect, useState, useRef } from 'react';

const Skills = () => {

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        'Advanced **Angular** development with **PrimeNG** and **Angular Material**',
        'Modern CSS with **Tailwind CSS**',
        'Component-driven development and state management',
        'Comprehensive **end-to-end testing** with **Cypress**'
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        '**Python** and **Django** framework expertise',
        'Database management with **SQL (Postgres)**',
        'RESTful API design and implementation',
        'Backend testing with **pytest**'
      ]
    },
    {
      category: 'Languages & Core Skills',
      skills: [
        '**JavaScript/TypeScript** development',
        '**Python** programming',
        '**C++** development'
      ]
    },
    {
      category: 'Testing & Quality Assurance',
      skills: [
        'End-to-end testing with **Cypress**',
        'Unit testing with **Jasmine** and **Karma**',
        'Backend testing with **pytest**',
        'Maintaining high code coverage standards'
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        'Version control with **Git** and **GitHub**',
        'CI/CD with **GitHub Actions**',
        '**Docker** containerization',
        '**AWS** cloud services',
        'Development in **VS Code**'
      ]
    }

  ];

  return (
    <section className="section relative bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 opacity-50"></div>
      <div className="content-wrapper relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="opacity-100"
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