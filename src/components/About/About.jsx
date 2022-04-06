import React from 'react';
import './style.css';

const About = () => {
  return (
    <div className="about-main" id="about">
      <div className="about-content">
        <h4><span>About</span> Me</h4>
        <p>
          Hello! <br />
          My name is <span>Ryan O'Connell </span>
          and I'm a software developer that specializes on the <span>Frontend.</span> <br />
          My job is to create responsive and accessible front-end web applications.</p>
      </div>
    </div>
  )
}

export default About