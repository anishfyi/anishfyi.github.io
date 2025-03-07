import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPreview {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  category: 'frontend' | 'backend';
}

const Blogs: React.FC = () => {
  const blogs: BlogPreview[] = [
    // Frontend Blogs
    {
      id: 'angular-optimization',
      title: 'Angular Performance Optimization Techniques',
      description: 'Learn how to optimize your Angular applications for better performance and user experience.',
      date: 'May 15, 2024',
      readTime: '8 min read',
      tags: ['Angular', 'Performance', 'Optimization'],
      category: 'frontend'
    },
    {
      id: 'angular-migration-best-practices',
      title: 'Things to Take Care While Doing Angular Migration',
      description: 'Essential considerations and best practices for successfully migrating between Angular versions.',
      date: 'April 5, 2024',
      readTime: '9 min read',
      tags: ['Angular', 'Migration', 'Best Practices'],
      category: 'frontend'
    },
    {
      id: 'unit-test-coverage-istanbul',
      title: 'How to Add Unit Test Coverage Using Istanbul Instrumenter',
      description: 'A comprehensive guide to implementing and analyzing test coverage with Istanbul in your JavaScript projects.',
      date: 'May 12, 2024',
      readTime: '11 min read',
      tags: ['Testing', 'Istanbul', 'Code Coverage', 'JavaScript'],
      category: 'frontend'
    },
    {
      id: 'cypress-e2e-testing',
      title: 'End-to-End Testing with Cypress in Angular',
      description: 'A comprehensive guide to implementing end-to-end tests using Cypress for modern web applications.',
      date: 'June 22, 2024',
      readTime: '10 min read',
      tags: ['Cypress', 'Testing', 'E2E'],
      category: 'frontend'
    },
    {
      id: 'jasmine-karma-unit-testing',
      title: 'Unit Testing Angular Applications with Jasmine and Karma',
      description: 'Master unit testing in Angular using Jasmine and Karma to create robust, maintainable applications.',
      date: 'July 10, 2024',
      readTime: '12 min read',
      tags: ['Angular', 'Testing', 'Jasmine', 'Karma'],
      category: 'frontend'
    },
    
    // Backend Blogs
    {
      id: 'django-api-creation',
      title: 'How Are APIs Created in Django ',
      description: 'Learn how to build robust RESTful APIs using Django and Django REST Framework, Django is a powerful Python web framework...',
      date: 'June 8, 2024',
      readTime: '10 min read',
      tags: ['Django', 'API', 'REST', 'Python'],
      category: 'backend'
    },
    {
      id: 'django-signals',
      title: 'Understanding Django Signals',
      description: 'Learn how Django signals work and how to effectively use them for decoupled communication between applications.',
      date: 'January 15, 2025',
      readTime: '10 min read',
      tags: ['Django', 'Python', 'Signals', 'Web Development'],
      category: 'backend'
    },
    {
      id: 'django-migrations',
      title: 'What Are Migrations in Django',
      description: 'Understanding Djangos migration system for managing database schema changes effectively.',
      date: 'July 20, 2024',
      readTime: '7 min read',
      tags: ['Django', 'Migrations', 'Database', 'Python'],
      category: 'backend'
    }
  ];

  // Sort blogs by date (newest first)
  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const frontendBlogs = sortedBlogs.filter(blog => blog.category === 'frontend');
  const backendBlogs = sortedBlogs.filter(blog => blog.category === 'backend');

  const BlogGrid = ({ blogs }: { blogs: BlogPreview[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <Link 
          to={`/blogs/${blog.id}`} 
          key={blog.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {blog.tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Technical Blog</h1>
      
      {/* Frontend Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          Frontend Development
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Explore articles about modern frontend frameworks, testing strategies, and performance optimization techniques.
        </p>
        <BlogGrid blogs={frontendBlogs} />
      </div>
      
      {/* Backend Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          Backend Development
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Discover insights about server-side technologies, API development, and database management.
        </p>
        <BlogGrid blogs={backendBlogs} />
      </div>
    </div>
  );
};

export default Blogs; 