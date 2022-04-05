import React from 'react';
import './style.css';

const About = () => {
  return (
    <div className="about-main" id="about">
      <div className="about-content">
        <h4>About <span>Me</span></h4>
        <p className='fade-in-1'>Hello!</p>
        <p className='fade-in-2'>My name is <span>Ryan O'Connell </span>
         and I'm a software developer that specializes on the <span>Frontend.</span></p> 
        <p className='fade-in-3'>My job is to create responsive and accessible front-end web applications.</p>
      </div>
    </div>
  )
}

export default About