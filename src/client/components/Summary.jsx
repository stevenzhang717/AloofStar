import React from 'react';
import './Summary.css';

const Summary = () => (
  <div className="summary">
    <img src="public/profile.jpg" alt="personal" height="200" width="200" />
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
      providing them not only advices for their coding style and solution design, but also knowledge
      of the module
    </p>
  </div>
);

export default Summary;
