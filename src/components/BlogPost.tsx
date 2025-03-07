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
    },
    'angular-migration-best-practices': {
      id: 'angular-migration-best-practices',
      title: 'Things to Take Care While Doing Angular Migration',
      date: 'April 5, 2024',
      readTime: '9 min read',
      tags: ['Angular', 'Migration', 'Best Practices'],
      content: (
        <>
          <p className="mb-4">
            Migrating an Angular application from one version to another can be a complex process, especially when moving across major versions. This guide outlines key considerations and best practices to ensure a smooth migration process.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Understand the Migration Path</h2>
          <p className="mb-4">
            Before starting any migration, understand the specific upgrade path for your current Angular version. Angular provides official upgrade guides for each version jump. For example, migrating from Angular 8 to Angular 13 might require incremental updates through versions 9, 10, 11, and 12.
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# Check current Angular version
ng version

# Update Angular CLI globally
npm install -g @angular/cli@latest

# Update local project
ng update @angular/core @angular/cli`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Review Deprecated Features</h2>
          <p className="mb-4">
            Each Angular version deprecates certain features that may be removed in future versions. Review the deprecation notes for each version in your migration path and update your code accordingly.
          </p>
          <p className="mb-4">
            Common deprecations include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Changes to Angular forms</li>
            <li>Router API changes</li>
            <li>HttpClient modifications</li>
            <li>Template syntax updates</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Update Third-Party Dependencies</h2>
          <p className="mb-4">
            Ensure all third-party libraries are compatible with your target Angular version. Some libraries may require specific versions to work with newer Angular releases.
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# Check for outdated packages
npm outdated

# Update compatible packages
ng update --all`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Use the Angular Update Guide</h2>
          <p className="mb-4">
            The official <a href="https://update.angular.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Angular Update Guide</a> is an invaluable resource. It provides step-by-step instructions tailored to your specific migration path.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Update TypeScript Version</h2>
          <p className="mb-4">
            Each Angular version requires a specific range of TypeScript versions. Ensure you're using a compatible TypeScript version for your target Angular version.
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# Install specific TypeScript version
npm install typescript@4.6.x --save-dev`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Run Tests After Each Step</h2>
          <p className="mb-4">
            Maintain a comprehensive test suite and run it after each migration step to catch issues early. This is especially important when migrating across multiple versions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Update RxJS</h2>
          <p className="mb-4">
            Angular heavily depends on RxJS, and each Angular version may require a specific RxJS version. Pay special attention to RxJS breaking changes, especially if migrating from versions using RxJS 5 to those using RxJS 6+.
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# Update RxJS
npm install rxjs@latest`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Consider Ivy Compatibility</h2>
          <p className="mb-4">
            If migrating to Angular 9+, ensure your code is compatible with the Ivy rendering engine. This may require updates to how you use Angular's APIs, especially for advanced use cases.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Use ng update Schematics</h2>
          <p className="mb-4">
            Angular's <code>ng update</code> command uses schematics to automatically update your code for compatibility with newer versions. Always run these schematics as they can save significant manual work.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Plan for Downtime</h2>
          <p className="mb-4">
            Major migrations can take time. Plan accordingly and consider feature freezes during the migration process to avoid complicating the upgrade with new code.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            Angular migrations require careful planning and execution. By following these best practices, you can minimize disruption and ensure a successful upgrade to newer Angular versions, allowing your application to benefit from the latest features, performance improvements, and security updates.
          </p>
        </>
      )
    },
    'unit-test-coverage-istanbul': {
      id: 'unit-test-coverage-istanbul',
      title: 'How to Add Unit Test Coverage Using Istanbul Instrumenter',
      date: 'May 12, 2024',
      readTime: '11 min read',
      tags: ['Testing', 'Istanbul', 'Code Coverage', 'JavaScript'],
      content: (
        <>
          <p className="mb-4">
            Code coverage is a critical metric for understanding how thoroughly your code is tested. Istanbul is one of the most popular code coverage tools for JavaScript projects. This guide will walk you through implementing Istanbul for comprehensive test coverage reporting.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Understanding Istanbul and Code Coverage</h2>
          <p className="mb-4">
            Istanbul measures code coverage by instrumenting your JavaScript code and tracking which lines, statements, branches, and functions are executed during tests. It provides several metrics:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Statement coverage</strong>: Has each statement been executed?</li>
            <li><strong>Branch coverage</strong>: Has each branch of control structures been executed?</li>
            <li><strong>Function coverage</strong>: Has each function been called?</li>
            <li><strong>Line coverage</strong>: Has each line been executed?</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Setting Up Istanbul in a JavaScript Project</h2>
          <p className="mb-4">
            For a basic JavaScript project using Jest, Mocha, or other test frameworks, you can add Istanbul with:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# For npm
npm install --save-dev nyc

# For yarn
yarn add --dev nyc`}</code>
          </pre>
          <p className="mb-4">
            NYC is the command-line interface for Istanbul. Configure it in your package.json:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`{
  "scripts": {
    "test": "mocha tests/**/*.js",
    "coverage": "nyc --reporter=lcov --reporter=text npm test"
  },
  "nyc": {
    "exclude": [
      "tests/**/*.js"
    ],
    "all": true
  }
}`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Setting Up Istanbul with Angular</h2>
          <p className="mb-4">
            Angular CLI projects already include Istanbul through Karma. You can run coverage reports with:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`ng test --code-coverage`}</code>
          </pre>
          <p className="mb-4">
            Configure coverage thresholds in your karma.conf.js:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`module.exports = function (config) {
  config.set({
    // ... other config
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 80,
        lines: 80,
        branches: 70,
        functions: 80
      }
    }
  });
};`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Using Istanbul Instrumenter Loader with Webpack</h2>
          <p className="mb-4">
            For projects using Webpack, you can use istanbul-instrumenter-loader to instrument your code during the build process:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`npm install --save-dev istanbul-instrumenter-loader`}</code>
          </pre>
          <p className="mb-4">
            Configure it in your webpack.config.js:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`module.exports = {
  // ... other config
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'post',
        exclude: /node_modules|\.spec\.js$/,
      }
    ]
  }
};`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Interpreting Coverage Reports</h2>
          <p className="mb-4">
            Istanbul generates detailed reports in various formats:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>HTML</strong>: Interactive reports showing covered/uncovered code</li>
            <li><strong>LCOV</strong>: Format compatible with tools like Coveralls or CodeCov</li>
            <li><strong>Text/Text-Summary</strong>: Console output showing coverage percentages</li>
            <li><strong>JSON</strong>: Machine-readable format for custom processing</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Setting Coverage Thresholds</h2>
          <p className="mb-4">
            Enforce minimum coverage requirements by setting thresholds. Tests will fail if coverage falls below these thresholds:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`// In .nycrc or package.json
{
  "check-coverage": true,
  "statements": 80,
  "branches": 70,
  "functions": 80,
  "lines": 80
}`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Ignoring Code from Coverage</h2>
          <p className="mb-4">
            Some code doesn't need coverage (e.g., configuration files). Exclude it using comments or configuration:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`// In your code
/* istanbul ignore next */
function debugOnly() {
  console.log('This function is ignored in coverage');
}

// In configuration
{
  "exclude": [
    "**/*.config.js",
    "**/vendor/**"
  ]
}`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Integrating with CI/CD</h2>
          <p className="mb-4">
            Integrate coverage reporting into your CI/CD pipeline to track coverage over time:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# Example GitHub Actions workflow
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '14.x'
      - run: npm ci
      - run: npm run coverage
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v1`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Best Practices for Improving Coverage</h2>
          <p className="mb-4">
            To improve your coverage metrics:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Focus on testing business logic and complex code paths</li>
            <li>Use test-driven development (TDD) to ensure coverage from the start</li>
            <li>Write tests for edge cases and error handling</li>
            <li>Review uncovered code to identify missing test scenarios</li>
            <li>Don't chase 100% coverage blindly; focus on meaningful tests</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            Istanbul provides powerful tools for measuring and enforcing code coverage in JavaScript projects. By implementing coverage reporting and setting appropriate thresholds, you can ensure your codebase is thoroughly tested, leading to more reliable and maintainable software.
          </p>
        </>
      )
    },
    'django-api-creation': {
      id: 'django-api-creation',
      title: 'How Are APIs Created in Django',
      date: 'June 8, 2024',
      readTime: '10 min read',
      tags: ['Django', 'API', 'REST', 'Python'],
      content: (
        <>
          <p className="mb-4">
            Django is a powerful Python web framework that provides robust tools for building web applications. When it comes to creating APIs, Django REST Framework (DRF) extends Django's capabilities to make API development straightforward and powerful. This guide will walk you through the process of creating RESTful APIs in Django.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Setting Up Django REST Framework</h2>
          <p className="mb-4">
            First, install Django and Django REST Framework:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`pip install django djangorestframework
django-admin startproject myproject
cd myproject
python manage.py startapp myapi`}</code>
          </pre>
          <p className="mb-4">
            Add REST Framework to your installed apps in settings.py:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`INSTALLED_APPS = [
    # Django apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # Third-party apps
    'rest_framework',
    
    # Local apps
    'myapi',
]`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Creating Models</h2>
          <p className="mb-4">
            Define your data models in models.py:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# myapi/models.py
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    publication_date = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)
    
    def __str__(self):
        return self.title`}</code>
          </pre>
          <p className="mb-4">
            Create and apply migrations:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`python manage.py makemigrations
python manage.py migrate`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Creating Serializers</h2>
          <p className="mb-4">
            Serializers convert complex data types (like Django models) to Python primitives that can be rendered into JSON, XML, etc.
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# myapi/serializers.py
from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'publication_date', 'isbn']
        
    def validate_isbn(self, value):
        """
        Check that the ISBN is valid.
        """
        if len(value) != 13:
            raise serializers.ValidationError("ISBN must be 13 characters")
        return value`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Creating Views</h2>
          <p className="mb-4">
            DRF provides several view types. Here are examples of different approaches:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# myapi/views.py
from rest_framework import viewsets, generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Book
from .serializers import BookSerializer

# Function-based view
@api_view(['GET', 'POST'])
def book_list(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Class-based view
class BookListView(APIView):
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Generic views
class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

# ViewSet
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Configuring URLs</h2>
          <p className="mb-4">
            Set up URL patterns to route requests to your views:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# myapi/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'books', views.BookViewSet)

urlpatterns = [
    # Function-based views
    path('books-fbv/', views.book_list),
    
    # Class-based views
    path('books-cbv/', views.BookListView.as_view()),
    
    # Generic views
    path('books-generic/', views.BookList.as_view()),
    path('books-generic/<int:pk>/', views.BookDetail.as_view()),
    
    # ViewSets
    path('', include(router.urls)),
]

# myproject/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapi.urls')),
]`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Authentication and Permissions</h2>
          <p className="mb-4">
            DRF provides various authentication and permission classes:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}

# Or in views
from rest_framework.permissions import IsAuthenticated, IsAdminUser

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]
    
    def get_permissions(self):
        """
        Override to require admin permissions for destructive actions.
        """
        if self.action in ['destroy', 'update', 'partial_update']:
            return [IsAdminUser()]
        return super().get_permissions()`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Filtering, Pagination, and Ordering</h2>
          <p className="mb-4">
            DRF provides tools for filtering, pagination, and ordering:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# settings.py
REST_FRAMEWORK = {
    # ... other settings
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
}

# views.py
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['author', 'publication_date']
    search_fields = ['title', 'author']
    ordering_fields = ['publication_date', 'title']`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Versioning Your API</h2>
          <p className="mb-4">
            API versioning helps manage changes over time:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# settings.py
REST_FRAMEWORK = {
    # ... other settings
    'DEFAULT_VERSIONING_CLASS': 'rest_framework.versioning.URLPathVersioning',
    'DEFAULT_VERSION': 'v1',
    'ALLOWED_VERSIONS': ['v1', 'v2'],
}

# urls.py
urlpatterns = [
    path('api/<str:version>/', include('myapi.urls')),
]

# views.py
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    
    def get_serializer_class(self):
        if self.request.version == 'v1':
            return BookSerializerV1
        return BookSerializerV2`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Testing Your API</h2>
          <p className="mb-4">
            DRF provides tools for testing APIs:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# myapi/tests.py
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Book

class BookTests(APITestCase):
    def setUp(self):
        self.book = Book.objects.create(
            title="Test Book",
            author="Test Author",
            publication_date="2024-01-01",
            isbn="1234567890123"
        )
    
    def test_get_books(self):
        url = reverse('book-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        
    def test_create_book(self):
        url = reverse('book-list')
        data = {
            'title': 'New Book',
            'author': 'New Author',
            'publication_date': '2024-02-01',
            'isbn': '9876543210123'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Book.objects.count(), 2)`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Documentation</h2>
          <p className="mb-4">
            Document your API using tools like drf-yasg or drf-spectacular:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# Install drf-yasg
pip install drf-yasg

# settings.py
INSTALLED_APPS = [
    # ... other apps
    'drf_yasg',
]

# urls.py
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Books API",
      default_version='v1',
      description="API for managing books",
      contact=openapi.Contact(email="contact@example.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    # ... other urls
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0)),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0)),
]`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            Django REST Framework provides a comprehensive toolkit for building robust, feature-rich APIs. By leveraging its serializers, views, authentication, and other features, you can quickly develop APIs that follow REST principles and best practices. Whether you're building a simple API or a complex system, DRF offers the flexibility and power to meet your needs.
          </p>
        </>
      )
    },
    'django-migrations': {
      id: 'django-migrations',
      title: 'What Are Migrations in Django',
      date: 'July 20, 2024',
      readTime: '7 min read',
      tags: ['Django', 'Migrations', 'Database', 'Python'],
      content: (
        <>
          <p className="mb-4">
            Migrations are Django's way of propagating changes you make to your models (adding a field, deleting a model, etc.) into your database schema. They're designed to be mostly automatic, but you'll need to know when to make migrations, when to run them, and the common pitfalls you might encounter.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Understanding Django Migrations</h2>
          <p className="mb-4">
            At their core, migrations are Python files that contain the necessary code to apply or revert database schema changes. They serve as a version control system for your database schema, allowing you to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Track changes to your models over time</li>
            <li>Apply those changes to your database</li>
            <li>Share those changes with other developers</li>
            <li>Roll back changes when needed</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Creating Migrations</h2>
          <p className="mb-4">
            When you make changes to your models, you create migrations using the <code>makemigrations</code> command:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`python manage.py makemigrations [app_name]`}</code>
          </pre>
          <p className="mb-4">
            This command examines the current state of your models and creates new migration files that will bring the database schema in sync with your current models. If you don't specify an app name, Django will check all installed apps for changes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Applying Migrations</h2>
          <p className="mb-4">
            After creating migrations, you apply them to your database using the <code>migrate</code> command:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`python manage.py migrate [app_name] [migration_name]`}</code>
          </pre>
          <p className="mb-4">
            This command takes all the migrations that haven't been applied yet and runs them against your database. Again, if you don't specify an app name, Django will apply migrations for all installed apps.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Migration Files</h2>
          <p className="mb-4">
            Migration files are stored in a "migrations" directory inside each app. Each file contains a Migration class with two key attributes:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# app/migrations/0001_initial.py
from django.db import migrations, models

class Migration(migrations.Migration):
    # Dependencies on other migrations
    dependencies = []
    
    # Operations to perform (create table, add field, etc.)
    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(primary_key=True)),
                ('title', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
            ],
        ),
    ]`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Migration Operations</h2>
          <p className="mb-4">
            Django provides various operations for migrations:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>CreateModel</strong>: Create a new table</li>
            <li><strong>DeleteModel</strong>: Delete a table</li>
            <li><strong>AddField</strong>: Add a column to a table</li>
            <li><strong>RemoveField</strong>: Remove a column from a table</li>
            <li><strong>AlterField</strong>: Change a column's type or constraints</li>
            <li><strong>RenameField</strong>: Rename a column</li>
            <li><strong>RunSQL</strong>: Run arbitrary SQL</li>
            <li><strong>RunPython</strong>: Run arbitrary Python code</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Migrations</h2>
          <p className="mb-4">
            Sometimes you need to not only change the schema but also transform existing data. For this, you use data migrations:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# Create an empty migration
python manage.py makemigrations app_name --empty --name=populate_data

# Edit the migration file
from django.db import migrations

def populate_data(apps, schema_editor):
    # Get the historical model
    Book = apps.get_model('app_name', 'Book')
    # Create instances
    Book.objects.create(title='Django for Beginners', author='William S. Vincent')

def reverse_populate(apps, schema_editor):
    # Reverse the operation
    Book = apps.get_model('app_name', 'Book')
    Book.objects.filter(title='Django for Beginners').delete()

class Migration(migrations.Migration):
    dependencies = [
        ('app_name', '0001_initial'),
    ]
    
    operations = [
        migrations.RunPython(populate_data, reverse_populate),
    ]`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Migration Management</h2>
          <p className="mb-4">
            Django provides several commands to help manage migrations:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`# Show migration status
python manage.py showmigrations

# Show SQL for a migration without running it
python manage.py sqlmigrate app_name 0001

# Revert migrations
python manage.py migrate app_name 0001  # Revert to migration 0001
python manage.py migrate app_name zero  # Revert all migrations for app`}</code>
          </pre>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Common Migration Challenges</h2>
          <p className="mb-4">
            Some common challenges with migrations include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Adding non-nullable fields</strong>: Django will prompt for a default value</li>
            <li><strong>Circular dependencies</strong>: When migrations in different apps depend on each other</li>
            <li><strong>Migration conflicts</strong>: When multiple developers create migrations simultaneously</li>
            <li><strong>Large migrations</strong>: Can be slow and lock tables in production</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Best Practices</h2>
          <p className="mb-4">
            Follow these best practices for smooth migrations:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Always create and test migrations in development before applying to production</li>
            <li>Keep migrations small and focused</li>
            <li>Use data migrations for complex data transformations</li>
            <li>Back up your database before applying migrations in production</li>
            <li>Consider using tools like django-zero-downtime-migrations for large production databases</li>
            <li>Include migrations in version control</li>
            <li>Use meaningful names for your migrations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Squashing Migrations</h2>
          <p className="mb-4">
            Over time, you might accumulate many migrations. You can squash them into fewer files:
          </p>
          <pre className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
            <code>{`python manage.py squashmigrations app_name 0001 0010`}</code>
          </pre>
          <p className="mb-4">
            This creates a new migration that replaces migrations 0001 through 0010, making your migration history cleaner and potentially improving performance.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            Migrations are a powerful feature of Django that make database schema management much easier. By understanding how they work and following best practices, you can maintain a clean, version-controlled database schema that evolves with your application. Whether you're working on a small project or a large application with multiple developers, Django's migration system provides the tools you need to manage your database changes effectively.
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