import React from 'react';
import './Summary.css';

const Summary = () => (
  <div className="summary">
    <div className="summary-img">
      <img src="public/profile.jpg" alt="personal" height="200" width="200" />
    </div>
    <div>
      <h2>Personal Summary</h2>
      <p>
        I work as a full stack developer at WiseTech Global on a tech stack based on Windows Forms,
        C#, SQL Server. My role includes below activities:
      </p>
      <p>
        &#9679; Design or Implementing hundreds of features or defect fixes for various clients like
        Yusen or DHL
      </p>
      <p>
        &#9679; A key developer in the development of Form Builder project - a fast growing platform
        for document design, editing and messaging with customisation forms for big clients and
        thousands of messages sent everyday
      </p>
      <p>
        &#9679; Code reviews for not only Sydney developers, but also developers in Chinese office,
        providing them not only advices for their coding style and solution design, but also
        knowledge of the module
      </p>
      <h2>Skills</h2>
      <p>
        <strong>Programming Languages: </strong>
        <span>C#, Javascript, T-SQL</span>
      </p>
      <p>
        <strong>Frameworks: </strong>
        <span>ASP .NET Core, ExpressJS, Sequelize, React, Redux</span>
      </p>
      <p>
        <strong>Markup Languages: </strong>
        <span>HTML, XML</span>
      </p>
      <p>
        <strong>Tooling: </strong>
        <span>Visual Studio, Visual Studio Code, Webpack, Babel, ESLint, Prettier, Git, TFS</span>
      </p>
      <p>
        <strong>Database: </strong>
        <span>
          SQL Server, Stored Procedures, Functions, Performance Tuning (execution plan analysis,
          profiler, indexing etc.)
        </span>
      </p>
      <p>
        <strong>Practice and Workflow: </strong>
        <span>Agile, Test Driven Development, Continuous Integration</span>
      </p>
      <p>
        <strong>Patterns: </strong>
        <span>Web MVC and various enterprise design patterns</span>
      </p>
    </div>
  </div>
);

export default Summary;
