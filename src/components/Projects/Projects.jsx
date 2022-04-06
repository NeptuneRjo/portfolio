import React from 'react'
import projectsjson from '../../assets/projects.json';
import Project from './Project/Project';
import './style.css'

const Projects = () => {

  const projects = projectsjson.projects

  return (
    <div className="projects-main" id='projects'>
      <div className="projects-header">
        <h4>Take a look at my <span>projects:</span></h4>
      </div>
      <div className='projects-content'>
        {
          projects.map((project, index) => (
            <Project project={project} id={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects