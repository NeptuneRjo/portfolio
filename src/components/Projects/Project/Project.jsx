import React, { useEffect } from 'react';
import './style.css'
import ghIcon from '../../../assets/iconmonstr-github-1.svg';


import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = ({ project, id }) => {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, []);

  return (
    <div className='project-main' data-aos='fade-up'>
      <div className='project-item' id={`project-${id}`}>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <div className="project-images">
          <img className='image-desktop' src={project.desktop} alt='preview of the desktop design' />
          <img className='image-mobile' src={project.mobile} alt='preview of the mobile design' />
        </div>
        <div className="project-links">
          <div className="project-link-gh">
            <img src={ghIcon} />
            <a href={project.links.github} target="_blank">Repo</a>
          </div>
          <a href={project.links.live} target="_blank">Live</a>
        </div>
      </div>
    </div>
  )
}

export default Project