import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPreview {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

const Blogs: React.FC = () => {
  const blogs: BlogPreview[] = [
    {
      id: 'angular-optimization',
      title: 'Angular Performance Optimization Techniques',
      description: 'Learn how to optimize your Angular applications for better performance and user experience.',
      date: 'May 15, 2024',
      readTime: '8 min read',
      tags: ['Angular', 'Performance', 'Optimization']
    },
    {
      id: 'cypress-e2e-testing',
      title: 'End-to-End Testing with Cypress in Angular',
      description: 'A comprehensive guide to implementing end-to-end tests using Cypress for modern web applications.',
      date: 'June 22, 2024',
      readTime: '10 min read',
      tags: ['Cypress', 'Testing', 'E2E']
    },
    {
      id: 'jasmine-karma-unit-testing',
      title: 'Unit Testing Angular Applications with Jasmine and Karma',
      description: 'Master unit testing in Angular using Jasmine and Karma to create robust, maintainable applications.',
      date: 'July 10, 2024',
      readTime: '12 min read',
      tags: ['Angular', 'Testing', 'Jasmine', 'Karma']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Technical Blog</h1>
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
    </div>
  );
};

export default Blogs; 