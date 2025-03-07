import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Loading from './components/Loading'

const Header = lazy(() => import('./components/Header'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))
const Blogs = lazy(() => import('./components/Blogs'))
const BlogPost = lazy(() => import('./components/BlogPost'))
const Projects = lazy(() => import('./components/Projects'))

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
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Suspense fallback={<Loading />}>
          <Navbar theme={theme} onThemeChange={setTheme} />
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4 pt-12 pb-8">
                <Header />
                <main className="space-y-2">
                  <Experience />
                  <Skills />
                  <Education />
                </main>
              </div>
            } />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  )
}

export default App
