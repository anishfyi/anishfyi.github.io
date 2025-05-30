const Experience = () => {

  const experiences = [
    {
      title: 'Member of Technical Staff - 2',
      company: 'Fyle Technologies Pvt. Ltd.',
      location: 'Bengaluru, KA',
      period: 'July 2024 – Present',
      responsibilities: [
        '**Frontend Development**: Shipped multiple user-facing features while creating reusable components that reduced UI code duplication by 40%.',
        '**Backend Optimization**: Implemented real-time updates using signal-based architecture and delivered 5+ REST APIs improving system responsiveness.',
        '**Quality Assurance**: Established and managed team testing standards, utilizing **Notion** and **Sheets** for efficient testing of new features prior to production deployment.',
        'Automated support tasks by developing multiple scripts, resulting in **increased productivity** and **reduced service requests by over 40%**.',
        '**Test Coverage**: Boosted code coverage from 30% to 70% by implementing comprehensive unit tests across critical paths using Jasmine/Karma.',
        '**Leadership**: **Mentored interns** and provided guidance on project development.'
      ]
    },
    {
      title: 'Member of Technical Staff - 1',
      company: 'Fyle Technologies Pvt. Ltd.',
      location: 'Bengaluru, KA',
      period: 'Mar. 2024 – June 2024',
      responsibilities: [
        '**Component Development**: Designed and developed multiple reusable frontend components from scratch using **PrimeNG** as Angular framework, reducing frontend repository size by **50%** and promoting code re-usability.',
        '**CSS Optimization**: Implemented **Tailwind CSS** for all styling needs, refactored CSS classes for cross-repository usage, and maintained a central color library for consistent color schemes.',
        '**Application Revamp**: Rebuilt an outdated Angular UI app using **PrimeNG** and **Angular 14**, referencing Figma UI designs from the design team. Conducted multiple rounds of reviews with engineering and design teams, ensuring a bug-free delivery that reduced customer friction by **60%** (as reported by AppCues).',
        '**Backend Enhancements**: Worked on multiple backend modules, added new environments, and created multiple testing environments to streamline team testing and collaboration.',
        '**Usability Improvements**: Identified and resolved multiple usability issues, enhancing the overall user experience and application accessibility.',
        '**End-to-End Testing**: Added comprehensive **end-to-end tests** using **cypress** framework to the newly written frontend code in **Angular 14**, ensuring best standards suggested by cypress.',
        '**Code Quality**: Achieved **97% code coverage** with **unit tests** using **Jasmine** and **Karma**, guaranteeing high-quality code that meets industry standards.',
        '**Customer Support**: Excelled as a support engineer, attending customer calls, triaging bugs on call, and providing timely resolutions to ensure high customer satisfaction.'
      ]
    },
    {
      title: 'Engineering Intern',
      company: 'Fyle Technologies Pvt. Ltd.',
      location: 'Bengaluru, KA',
      period: 'Oct. 2022 – Feb. 2024',
      responsibilities: [
        '**Frontend Development**: Built features using **Angular** and **Angular Material**, with comprehensive unit tests using **Jasmine-Karma**.',
        '**Backend Excellence**: Achieved **100% code coverage** in unit tests using **pytest** for backend code changes.',
        '**Email Integration**: Developed customer notification system using **Jinja** templating.',
        '**Documentation**: Consistently maintained detailed engineering documentation for knowledge sharing and efficient onboarding.'
      ]
    }
  ];

  return (
    <section className="section relative bg-black" id="experience">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
      <div className="content-wrapper relative z-10">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-white mb-8 tracking-tight">Experience</h2>
        <div className="space-y-8 md:space-y-12 px-4 md:px-0">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="opacity-100 pb-6 md:pb-12"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-8 text-white space-y-4 md:space-y-0">
              <div>
                <h3 className="text-[clamp(1.25rem,4vw,1.875rem)] font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300">{exp.company} | {exp.location}</p>
              </div>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 font-medium">{exp.period}</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
              {exp.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 text-[clamp(0.875rem,2vw,1.125rem)] leading-relaxed px-4 py-2 md:px-2 transition-opacity hover:opacity-80"
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