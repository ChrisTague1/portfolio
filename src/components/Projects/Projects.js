import React from 'react';
import './Projects.css';

const Projects = ({ projectList }) => {

  let counter = 0;
  const proj = projectList.map(project =>
    (counter++ % 2 === 0) ? 
      <div className="project-container">
        <div className="project-text">
          <h1>{project.name}</h1>
          <p>{project.blurb}</p>
          {(project.live) ? <><a className="link" href={project.live} >View Live</a><br /></> : ""}
          <a className="link" href={project.source} >Source Code</a>
        </div>
        <img className="project_img" src={project.image} /><br />
      </div>
    :
      <div className="project-container-2">
        <img className="project_img" src={project.image} /><br />
        <div className="project-text">
          <h1>{project.name}</h1>
          <p>{project.blurb}</p>
          {(project.live) ? <><a className="link" href={project.live} >View Live</a><br /></> : ""}
          <a className="link" href={project.source} >Source Code</a>
        </div>
      </div>
  );

  return (
    <section id="projects" >
      <h2 className="projects_title" >Projects</h2>
      {proj}
      <div className="breaker"/>
    </section>
  );
}

export default Projects;