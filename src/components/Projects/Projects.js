import React from 'react';
import './Projects.css';

const Projects = ({ projectList }) => {

  const proj = projectList.map(project => 
    <>
      <h1>{project.name}</h1>
      <p>{project.blurb}</p>
      <img src={project.image} /><br />
      {(project.live) ? <><a href={project.live} >View Live</a><br /></> : ""}
      <a href={project.source} >Source Code</a>
    </>
  );

  return (
    <>
      <h1>Projects</h1>
      {proj}
    </>
  );
}

export default Projects;