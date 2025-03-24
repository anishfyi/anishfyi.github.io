import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import resumePDF from '../assets/anish_resume_2.pdf';

interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    onThemeChange(theme === 'light' ? 'dark' : 'light');
  };

  // Define only the navLinkClass that's actually used
  const navLinkClass = "px-3 py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 dark:after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full";
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/' || location.pathname === '';
  
  // Function to handle scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white h-8 w-8">
                {/* Empty Link - still navigates to home but has no text */}
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="hidden md:flex space-x-4">
              <a href={resumePDF} download className={navLinkClass}>Resume</a>
              {!isHomePage && (
                <Link to="/" className={navLinkClass}>Home</Link>
              )}
              <Link to="/blogs" className={navLinkClass}>Blogs</Link>
              <Link to="/projects" className={navLinkClass}>Projects</Link>
            </div>
            
            <div className="ml-4 flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              >
                {theme === 'dark' ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none mr-2"
            >
              {theme === 'dark' ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 
              bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
              focus:outline-none transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Main menu"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Full-page semi-transparent mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 md:hidden" onClick={() => setIsOpen(false)}>
          <div 
            className="bg-white dark:bg-gray-800 w-full max-w-sm h-full shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Menu</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="px-4 py-6 space-y-4">
              <a 
                href={resumePDF} 
                download
                className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
              {!isHomePage && (
                <Link 
                  to="/" 
                  className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link 
                to="/blogs" 
                className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                to="/projects" 
                className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;