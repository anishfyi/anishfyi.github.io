import { useEffect, useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="section relative overflow-hidden">
      <div className="parallax-bg bg-gradient-to-b from-gray-900 to-gray-800 dark:from-black dark:to-gray-900"></div>
      <div className="content-wrapper relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''} space-y-6 max-w-4xl`}>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white tracking-tight">
            Anish Kr Singh
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
            Crafting exceptional digital experiences through innovative engineering
          </p>
          <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300 text-lg pt-8">
            <a href="mailto:anishfyi@gmail.com" 
               className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-2">
              <span className="border-b border-gray-500 hover:border-gray-900 dark:hover:border-white pb-1">anishfyi@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/anishfyi" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-2">
              <span className="border-b border-gray-500 hover:border-gray-900 dark:hover:border-white pb-1">LinkedIn</span>
            </a>
            <a href="https://github.com/anishfyi" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 flex items-center gap-2">
              <span className="border-b border-gray-500 hover:border-gray-900 dark:hover:border-white pb-1">GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-6 h-6 border-2 border-white border-t-0 border-l-0 transform rotate-45 opacity-50"></div>
      </div>
    </header>
  );
};

export default Header;