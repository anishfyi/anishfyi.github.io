import{a as r,j as e,L as a}from"./index-BYQ-tIEy.js";const l=()=>{const{id:n}=r(),t={"angular-optimization":{id:"angular-optimization",title:"Angular Performance Optimization Techniques",date:"May 15, 2024",readTime:"8 min read",tags:["Angular","Performance","Optimization"],content:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-4",children:"Angular is a powerful framework for building complex web applications, but with great power comes the responsibility to ensure your application performs well. In this blog post, we'll explore several techniques to optimize your Angular applications."}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"1. OnPush Change Detection Strategy"}),e.jsxs("p",{className:"mb-4",children:["By default, Angular uses the ",e.jsx("code",{children:"Default"})," change detection strategy, which checks the entire component tree for changes whenever any event occurs. This can be inefficient for large applications. The ",e.jsx("code",{children:"OnPush"})," strategy only checks a component when:"]}),e.jsxs("ul",{className:"list-disc pl-6 mb-4",children:[e.jsx("li",{children:"An input property changes"}),e.jsx("li",{children:"An event emits from the component or its children"}),e.jsx("li",{children:"An observable subscribed to with the async pipe emits a new value"})]}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:`@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent { ... }`})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"2. Lazy Loading Modules"}),e.jsx("p",{className:"mb-4",children:"Lazy loading is a design pattern that defers the initialization of modules until they're actually needed. This reduces the initial load time of your application."}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:`const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  }
];`})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"3. Pure Pipes Instead of Methods"}),e.jsx("p",{className:"mb-4",children:"Using pure pipes instead of methods in your templates can significantly improve performance because pipes are only re-evaluated when their input changes."}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"4. Virtual Scrolling"}),e.jsxs("p",{className:"mb-4",children:["For long lists, use Angular's ",e.jsx("code",{children:"ScrollingModule"})," to implement virtual scrolling, which only renders the items currently visible in the viewport."]}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"5. AOT Compilation"}),e.jsx("p",{className:"mb-4",children:"Always use Ahead-of-Time (AOT) compilation in production. It compiles your Angular HTML and TypeScript code into efficient JavaScript during the build process, resulting in faster rendering."}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"Conclusion"}),e.jsx("p",{className:"mb-4",children:"Optimizing Angular applications is crucial for providing a smooth user experience. By implementing these techniques, you can significantly improve your application's performance and responsiveness."})]})},"cypress-e2e-testing":{id:"cypress-e2e-testing",title:"End-to-End Testing with Cypress in Angular",date:"June 22, 2024",readTime:"10 min read",tags:["Cypress","Testing","E2E"],content:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-4",children:"End-to-end (E2E) testing is essential for verifying that your application works as expected from a user's perspective. Cypress is a modern E2E testing framework that makes writing and debugging tests easier than ever before."}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"1. Getting Started with Cypress"}),e.jsx("p",{className:"mb-4",children:"Installing Cypress is straightforward with npm:"}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:"npm install cypress --save-dev"})}),e.jsx("p",{className:"mb-4",children:"After installation, you can open Cypress with:"}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:"npx cypress open"})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"2. Writing Your First Test"}),e.jsx("p",{className:"mb-4",children:"Cypress tests are written in JavaScript and follow a simple, readable syntax:"}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:`describe('Login Page', () => {
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
})`})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"3. Best Practices for Cypress Tests"}),e.jsxs("ul",{className:"list-disc pl-6 mb-4",children:[e.jsxs("li",{children:["Use data attributes (like ",e.jsx("code",{children:"data-cy"}),") for selecting elements"]}),e.jsx("li",{children:"Keep tests independent from each other"}),e.jsx("li",{children:"Avoid testing implementation details; focus on user behavior"}),e.jsx("li",{children:"Use custom commands for repetitive actions"}),e.jsx("li",{children:"Set up test data programmatically rather than through the UI"})]}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"4. Handling Asynchronous Operations"}),e.jsx("p",{className:"mb-4",children:"Cypress automatically waits for commands to complete before moving on, but sometimes you need more control:"}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:`// Wait for an API response
cy.intercept('GET', '/api/users').as('getUsers')
cy.visit('/users')
cy.wait('@getUsers')
cy.get('[data-cy=user-list]').should('be.visible')`})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"5. CI Integration"}),e.jsx("p",{className:"mb-4",children:"Cypress can be integrated with CI/CD pipelines to run tests automatically:"}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:"npx cypress run"})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"Conclusion"}),e.jsx("p",{className:"mb-4",children:"Cypress provides a powerful, developer-friendly approach to E2E testing. By following the practices outlined in this post, you can create reliable tests that help ensure your application works correctly for your users."})]})},"jasmine-karma-unit-testing":{id:"jasmine-karma-unit-testing",title:"Unit Testing Angular Applications with Jasmine and Karma",date:"July 10, 2024",readTime:"12 min read",tags:["Angular","Testing","Jasmine","Karma"],content:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-4",children:"Unit testing is a fundamental practice in software development that helps ensure individual parts of your application work as expected. In the Angular ecosystem, Jasmine and Karma are the standard tools for writing and running unit tests."}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"1. Understanding Jasmine and Karma"}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Jasmine"})," is a behavior-driven development framework for testing JavaScript code. It provides functions to structure your tests and make assertions."]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"Karma"})," is a test runner that executes your tests in real browsers. It's configured to work seamlessly with Angular projects."]}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"2. Testing Components"}),e.jsx("p",{className:"mb-4",children:"Here's an example of testing a simple component:"}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:`describe('CounterComponent', () => {
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
})`})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"3. Testing Services"}),e.jsx("p",{className:"mb-4",children:"Services often contain business logic and API calls, making them critical to test:"}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:`describe('UserService', () => {
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
})`})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"4. Using Test Doubles: Spies, Stubs, and Mocks"}),e.jsx("p",{className:"mb-4",children:"Jasmine provides spies to simulate and track function calls:"}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:`it('should call the authentication service when logging in', () => {
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
})`})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"5. Testing Asynchronous Code"}),e.jsx("p",{className:"mb-4",children:"Angular provides utilities for testing asynchronous code:"}),e.jsx("pre",{className:"bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-100 p-4 rounded-md mb-4 overflow-x-auto",children:e.jsx("code",{children:`it('should load data asynchronously', fakeAsync(() => {
  let dataLoaded = false;
  
  // Function that returns a promise
  component.loadData().then(() => {
    dataLoaded = true;
  });
  
  // Simulate the passage of time
  tick();
  
  expect(dataLoaded).toBe(true);
}));`})}),e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4",children:"Conclusion"}),e.jsx("p",{className:"mb-4",children:"Unit testing with Jasmine and Karma is an essential practice for Angular development. By thoroughly testing your components, services, and other code, you can catch bugs early and ensure your application behaves as expected."})]})}}[n||""];return t?e.jsxs("div",{className:"container mx-auto px-4 py-12",children:[e.jsxs(a,{to:"/blogs",className:"inline-flex items-center text-gray-600 dark:text-gray-400 mb-6 hover:underline py-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",clipRule:"evenodd"})}),e.jsx("span",{children:"Back to Blogs"})]}),e.jsxs("article",{className:"max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8",children:[e.jsxs("header",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:t.title}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.tags.map(s=>e.jsx("span",{className:"bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full",children:s},s))}),e.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("span",{children:t.date}),e.jsx("span",{className:"mx-2",children:"•"}),e.jsx("span",{children:t.readTime})]})]}),e.jsx("div",{className:"prose dark:prose-invert max-w-none",children:t.content})]})]}):e.jsx("div",{className:"container mx-auto px-4 py-12",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Blog Post Not Found"}),e.jsx("p",{className:"mb-6",children:"The blog post you're looking for doesn't exist."}),e.jsx(a,{to:"/blogs",className:"inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-2 rounded-md",children:"Back to Blogs"})]})})};export{l as default};
//# sourceMappingURL=BlogPost--AbJ6jtr.js.map
