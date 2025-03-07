import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Navbar from './components/Navbar'

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
      <Navbar theme={theme} onThemeChange={setTheme} />
      <div className="container mx-auto px-4 pt-20 pb-8">
      <Header />
      <main className="space-y-6">
        <Experience />
        <Skills />
        <Education />
      </main>
    </div>
    </div>
  )
}

export default App
