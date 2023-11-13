import React from 'react';

function Resume(props) {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2>Kevin Atwood</h2>
          <p>123 Main Street, Anytown, USA | (123) 456-7890 | kevin.atwood@email.com</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h4>Summary</h4>
          <p>
            Motivated and detail-oriented full-stack web developer with a background in education. Skilled in front-end development using HTML, CSS, and JavaScript, as well as back-end development using Node.js and Express. Strong collaborator with a proven track record of working effectively in team projects. Excited to leverage my skills and passion for education to create innovative web applications.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h4>Education</h4>
          <p>
            Bachelor of Science in Social Science Education, North Dakota State University, Fargo, ND (2016)
          </p>
          <p>
            Full-Stack Web Development Bootcamp, XYZ Bootcamp, Anytown, USA (2022)
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h4>Technical Skills</h4>
          <ul>
            <li>Programming Languages: JavaScript, HTML, CSS</li>
            <li>Front-End Technologies: React, Bootstrap, jQuery</li>
            <li>Back-End Technologies: Node.js, Express, MongoDB</li>
            <li>Version Control: Git, GitHub</li>
            <li>Project Management: Agile, Scrum</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h4>Projects</h4>
          <h5>National Parks Weather Tracker</h5>
          <ul>
            <li>Developed a web application using HTML, CSS, and JavaScript to track weather conditions in national parks</li>
            <li>Integrated with a weather API to retrieve real-time weather data</li>
            <li>Implemented user-friendly features such as search functionality and dynamic content rendering</li>
          </ul>

          <h5>Interactive Tournament Application</h5>
          <ul>
            <li>Collaborated with a team to build an interactive application for managing and tracking tournaments</li>
            <li>Utilized React and Bootstrap for the front-end interface design</li>
            <li>Implemented back-end functionality using Node.js and Express for user authentication and data storage</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h4>Experience</h4>
          <p>
            7th Grade Social Studies Teacher, XYZ Middle School, Anytown, USA (2016-2021)
          </p>
          <ul>
            <li>Created engaging lesson plans and delivered instruction in social studies to 7th-grade students</li>
            <li>Utilized technology tools and resources to enhance learning experiences</li>
            <li>Developed and implemented assessments to evaluate student progress</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h4>Additional Information</h4>
          <ul>
            <li>Strong problem-solving and analytical skills developed through teaching experience</li>
            <li>Excellent communication and teamwork abilities</li>
            <li>Continuously learning and staying up-to-date with the latest web development trends and technologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;