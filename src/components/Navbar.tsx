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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700 
          shadow-lg rounded-b-lg mx-4 mt-1`}
        >
          <div className="px-4 pt-3 pb-4 space-y-2 sm:px-4">
            {location.pathname !== '/' && (
              <Link to="/" className={mobileNavLinkClass}>Home</Link>
            )}
            {location.pathname === '/' ? (
              <>
                <a href="#experience" className={mobileNavLinkClass}>Experience</a>
                <a href="#skills" className={mobileNavLinkClass}>Skills</a>
                <a href="#education" className={mobileNavLinkClass}>Education</a>
              </>
            ) : null}
            <Link to="/blogs" className={mobileNavLinkClass}>Blogs</Link>
            <Link to="/projects" className={mobileNavLinkClass}>Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;