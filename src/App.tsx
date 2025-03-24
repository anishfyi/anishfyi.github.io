import { useState, useEffect, lazy, Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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

// 404 Not Found Component
const NotFound = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-6">The page you're looking for doesn't exist.</p>
      <a href="#/" className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-2 rounded-md">
        Back to Home
      </a>
    </div>
  </div>
);

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

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
            <Route path="#/" element={
              <div className="container mx-auto px-4 pt-12 pb-8">
                <Header />
                <main className="space-y-2">
                  <Experience />
                  <Skills />
                  <Education />
                </main>
              </div>
            } />
            <Route path="#/blogs" element={<Blogs />} />
            <Route path="#/blogs/:id" element={<BlogPost />} />
            <Route path="#/projects" element={<Projects />} />
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  )
}

export default App
