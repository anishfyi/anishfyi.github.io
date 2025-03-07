import React, { JSX } from 'react';
import { useParams, Link } from 'react-router-dom';

interface BlogContent {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: JSX.Element;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const blogPosts: Record<string, BlogContent> = {
    'angular-optimization': {
      id: 'angular-optimization',
      title: 'Angular Performance Optimization Techniques',
      date: 'May 15, 2024',
      readTime: '8 min read',
      tags: ['Angular', 'Performance', 'Optimization'],
      content: (
        <>
          <p className="mb-4">
            Angular is a powerful framework for building complex web applications, but with great power comes the responsibility to ensure your application performs well. In this blog post, we'll explore several techniques to optimize your Angular applications.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. OnPush Change Detection Strategy</h2>
          <p className="mb-4">
            By default, Angular uses the <code>Default</code> change detection strategy, which checks the entire component tree for changes whenever any event occurs. This can be inefficient for large applications. The <code>OnPush</code> strategy only checks a component when:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>An input property changes</li>
            <li>An event emits from the component or its children</li>
            <li>An observable subscribed to with the async pipe emits a new value</li>
          </ul>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent { ... }`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Lazy Loading Modules</h2>
          <p className="mb-4">
            Lazy loading is a design pattern that defers the initialization of modules until they're actually needed. This reduces the initial load time of your application.
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  }
];`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Pure Pipes Instead of Methods</h2>
          <p className="mb-4">
            Using pure pipes instead of methods in your templates can significantly improve performance because pipes are only re-evaluated when their input changes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Virtual Scrolling</h2>
          <p className="mb-4">
            For long lists, use Angular's <code>ScrollingModule</code> to implement virtual scrolling, which only renders the items currently visible in the viewport.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. AOT Compilation</h2>
          <p className="mb-4">
            Always use Ahead-of-Time (AOT) compilation in production. It compiles your Angular HTML and TypeScript code into efficient JavaScript during the build process, resulting in faster rendering.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            Optimizing Angular applications is crucial for providing a smooth user experience. By implementing these techniques, you can significantly improve your application's performance and responsiveness.
          </p>
        </>
      )
    },
    'cypress-e2e-testing': {
      id: 'cypress-e2e-testing',
      title: 'End-to-End Testing with Cypress in Angular',
      date: 'June 22, 2024',
      readTime: '10 min read',
      tags: ['Cypress', 'Testing', 'E2E'],
      content: (
        <>
          <p className="mb-4">
            End-to-end (E2E) testing is essential for verifying that your application works as expected from a user's perspective. Cypress is a modern E2E testing framework that makes writing and debugging tests easier than ever before.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Getting Started with Cypress</h2>
          <p className="mb-4">
            Installing Cypress is straightforward with npm:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>npm install cypress --save-dev</code>
          </pre>
          <p className="mb-4">
            After installation, you can open Cypress with:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>npx cypress open</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Writing Your First Test</h2>
          <p className="mb-4">
            Cypress tests are written in JavaScript and follow a simple, readable syntax:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should login with valid credentials', () => {
    cy.get('[data-cy=username]').type('testuser')
    cy.get('[data-cy=password]').type('password123')
    cy.get('[data-cy=login-button]').click()
    
    // Assert that we've redirected to the dashboard
    cy.url().should('include', '/dashboard')
    cy.get('[data-cy=welcome-message]').should('contain', 'Welcome, testuser')
  })
})`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Best Practices for Cypress Tests</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Use data attributes (like <code>data-cy</code>) for selecting elements</li>
            <li>Keep tests independent from each other</li>
            <li>Avoid testing implementation details; focus on user behavior</li>
            <li>Use custom commands for repetitive actions</li>
            <li>Set up test data programmatically rather than through the UI</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Handling Asynchronous Operations</h2>
          <p className="mb-4">
            Cypress automatically waits for commands to complete before moving on, but sometimes you need more control:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`// Wait for an API response
cy.intercept('GET', '/api/users').as('getUsers')
cy.visit('/users')
cy.wait('@getUsers')
cy.get('[data-cy=user-list]').should('be.visible')`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. CI Integration</h2>
          <p className="mb-4">
            Cypress can be integrated with CI/CD pipelines to run tests automatically:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>npx cypress run</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            Cypress provides a powerful, developer-friendly approach to E2E testing. By following the practices outlined in this post, you can create reliable tests that help ensure your application works correctly for your users.
          </p>
        </>
      )
    },
    'jasmine-karma-unit-testing': {
      id: 'jasmine-karma-unit-testing',
      title: 'Unit Testing Angular Applications with Jasmine and Karma',
      date: 'July 10, 2024',
      readTime: '12 min read',
      tags: ['Angular', 'Testing', 'Jasmine', 'Karma'],
      content: (
        <>
          <p className="mb-4">
            Unit testing is a fundamental practice in software development that helps ensure individual parts of your application work as expected. In the Angular ecosystem, Jasmine and Karma are the standard tools for writing and running unit tests.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Understanding Jasmine and Karma</h2>
          <p className="mb-4">
            <strong>Jasmine</strong> is a behavior-driven development framework for testing JavaScript code. It provides functions to structure your tests and make assertions.
          </p>
          <p className="mb-4">
            <strong>Karma</strong> is a test runner that executes your tests in real browsers. It's configured to work seamlessly with Angular projects.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Testing Components</h2>
          <p className="mb-4">
            Here's an example of testing a simple component:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter when increment button is clicked', () => {
    // Arrange
    const initialValue = component.counter;
    const button = fixture.debugElement.query(By.css('.increment-button'));
    
    // Act
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    // Assert
    expect(component.counter).toBe(initialValue + 1);
  });
})`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Testing Services</h2>
          <p className="mb-4">
            Services often contain business logic and API calls, making them critical to test:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve users from the API', () => {
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ];

    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
})`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Using Test Doubles: Spies, Stubs, and Mocks</h2>
          <p className="mb-4">
            Jasmine provides spies to simulate and track function calls:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`it('should call the authentication service when logging in', () => {
  // Create a spy on the auth service
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
  authServiceSpy.login.and.returnValue(of({ success: true }));
  
  // Configure the component with the spy
  TestBed.configureTestingModule({
    declarations: [LoginComponent],
    providers: [{ provide: AuthService, useValue: authServiceSpy }]
  });
  
  // Test the component
  const fixture = TestBed.createComponent(LoginComponent);
  const component = fixture.componentInstance;
  
  component.username = 'testuser';
  component.password = 'password';
  component.login();
  
  expect(authServiceSpy.login).toHaveBeenCalledWith('testuser', 'password');
})`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Testing Asynchronous Code</h2>
          <p className="mb-4">
            Angular provides utilities for testing asynchronous code:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`it('should load data asynchronously', fakeAsync(() => {
  let dataLoaded = false;
  
  // Function that returns a promise
  component.loadData().then(() => {
    dataLoaded = true;
  });
  
  // Simulate the passage of time
  tick();
  
  expect(dataLoaded).toBe(true);
}));`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            Unit testing with Jasmine and Karma is an essential practice for Angular development. By thoroughly testing your components, services, and other code, you can catch bugs early and ensure your application behaves as expected.
          </p>
        </>
      )
    }
  };
  
  const blog = blogPosts[id || ''];
  
  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-2 rounded-md">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        to="/blogs" 
        className="inline-flex items-center text-gray-600 dark:text-gray-400 mb-6 hover:underline py-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Back to Blogs</span>
      </Link>
      
      <article className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>{blog.date}</span>
            <span className="mx-2">•</span>
            <span>{blog.readTime}</span>
          </div>
        </header>
        
        <div className="prose dark:prose-invert max-w-none">
          {blog.content}
        </div>
      </article>
    </div>
  );
};

export default BlogPost; 