import React from 'react';
import './Projects.css';

const Projects = ({ projectList }) => {

  const proj = projectList.map(project => 
    <div className="project-container">
      <div className="project-text">
        <h1>{project.name}</h1>
        <p>{project.blurb}</p>
        {(project.live) ? <><a href={project.live} >View Live</a><br /></> : ""}
        <a href={project.source} >Source Code</a>
      </div>
      <img className="project_img" src={project.image} /><br />
    </div>
  );

  return (
    <section id="projects" >
      <h2 className="title" >Projects</h2>
      {proj}
    </section>
  );
}

export default Projects;