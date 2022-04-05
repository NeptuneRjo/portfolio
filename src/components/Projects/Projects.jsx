import React from 'react'
import projectsjson from '../../assets/projects.json';
import Project from './Project/Project';

const Projects = () => {

  const projects = projectsjson.projects

  return (
    <div className="projects-main">
      <div className="projects-header">
        <h4>Projects</h4>
      </div>
      <div className="projects-content">
        {
          projects.map((project, index) => (
            <Project project={project} id={index} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects