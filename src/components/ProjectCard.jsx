import React from 'react';

function ProjectCard({title, github, image}) {
    return (

 <div className="card col-12 m-3 project">
  <div
    className="project text-center" 
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="bg-light">
    <h5 className="card-title">
      <a
        href="#"
        className="card-link dark-link text-dark" 
        style={{
          textDecoration: 'none', 
        }}
      >
        {title}
      </a>
    </h5>
    <a
      href={github}
      className="card-link dark-link text-dark"
      style={{
        textDecoration: 'none', 
      }}
    >
      Github Link
    </a>
    </div>
  </div>
</div> 
    );
}

export default ProjectCard;