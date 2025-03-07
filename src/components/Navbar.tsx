import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleThemeToggle = () => {
    onThemeChange(theme === 'light' ? 'dark' : 'light');
  };

  // Define a custom nav link style with animated underline
  const navLinkClass = "px-3 py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 dark:after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full";
  const mobileNavLinkClass = "block px-3 py-2 text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 dark:after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white h-8 w-8">
                {/* You can leave this completely empty or add a small spacer if needed */}
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {location.pathname !== '/' && (
              <Link to="/" className={navLinkClass}>Home</Link>
            )}
            {location.pathname === '/' ? (
              <>
                <a
                  href="#experience"
                  className={navLinkClass}
                >
                  Experience
                </a>
                <a
                  href="#skills"
                  className={navLinkClass}
                >
                  Skills
                </a>
                <a
                  href="#education"
                  className={navLinkClass}
                >
                  Education
                </a>
              </>
            ) : null}
            <Link
              to="/blogs"
              className={navLinkClass}
            >
              Blogs
            </Link>
            <Link
              to="/projects"
              className={navLinkClass}
            >
              Projects
            </Link>
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <SunIcon className="h-5 w-5 text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleThemeToggle}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <SunIcon className="h-5 w-5 text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Full-page semi-transparent mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="bg-white dark:bg-gray-800 w-full max-w-sm h-full shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Menu</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="px-4 py-6 space-y-4">
              {location.pathname !== '/' && (
                <Link 
                  to="/" 
                  className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              
              {location.pathname === '/' ? (
                <>
                  <a 
                    href="#experience" 
                    className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Experience
                  </a>
                  <a 
                    href="#skills" 
                    className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </a>
                  <a 
                    href="#education" 
                    className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Education
                  </a>
                </>
              ) : null}
              
              <Link 
                to="/blogs" 
                className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              
              <Link 
                to="/projects" 
                className="block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
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