import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'

const Header = lazy(() => import('./components/Header'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar theme={theme} onThemeChange={setTheme} />
        <div className="container mx-auto px-4 pt-12 pb-8">
          <Header />
          <main className="space-y-2">
            <Experience />
            <Skills />
            <Education />
          </main>
          <Footer />
        </div>
      </Suspense>
    </div>
  )
}

export default App
