import React from 'react';
import { useEffect, useState, useRef } from 'react';

const Education = () => {

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Dr. APJ Abdul Kalam University',
      location: 'Uttar Pradesh, India',
      period: '2020 - 2024',
    }
  ];

  return (
    <section className="section relative bg-white dark:bg-black" id="education">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black opacity-50"></div>
      <div className="content-wrapper relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Education</h2>
        <div className="space-y-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="opacity-100"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300">{edu.institution} | {edu.location}</p>
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;