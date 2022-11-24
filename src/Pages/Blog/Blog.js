import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-200 text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-base-200 text-base-content peer-checked:bg-secondary peer-checked:text-primary-content">
                    <p>There are four main types of state you need to properly manage in your React apps: 1. Local state, 2. Global state, 3. Server state, 4. URL state.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-200 text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-primary-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-200 text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-primary-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br />
                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-base-200 text-base-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-primary-content">
                    <p>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries.  <br />
                        Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works. <br />
                        Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;