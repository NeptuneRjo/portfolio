import React, { useEffect } from 'react'
import projectsjson from '../../assets/projects.json';
import './style.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {

  useEffect(() => {
    Aos.init({duration: 750});
  }, [])

  const projects = projectsjson.projects

  return (
    <div className="projects-main" id='projects'>
      <div className='projects-content'>
        <h4>My Projects</h4>
        {
          projects.map((project, index) => (
            <div 
              className="projects-item" 
              id={index} 
              key={index}
              data-aos='fade-up'
            >
              <h5>{project.name}</h5>
              <p className="projects-description">
                {project.description}
              </p>
              <div className="projects-images">
                <img 
                  src={project.desktop} 
                  alt='projects desktop view' 
                  className='projects-desktop' 
                />
              </div>
              <div className="projects-links">
                <div className="projects-github blue__button">
                  <a 
                    href={project.links.github} 
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
                <div className="projects-live white__button">
                  <a 
                    href={project.links.live} 
                    target="_blank"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects