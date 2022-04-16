import React from 'react';
import './style.css';

import aboutHero from '../../assets/about.jpg'

const About = () => {

  const skills = ['React', 'Redux', 'CSS3', 'HTML5', 'Jest', 'Sass']

  return (
    <div className="about-main" id="about">
      <img src={aboutHero} alt='image of space' className='about-image' />
      <div className="about-content">
        <h4>About Me</h4>
          <p>
            Hello! 
          </p>
          <p>
            My name is <span>Ryan O'Connell </span>
            and I'm a software developer that specializes on the <span>Frontend.</span>
          </p>
          <p>
            I'm interested in creating responsive and accessible front-end web applications.
          </p>
      </div>
        <div className="about-skills">
          <p className='about-skills-header'>
            Here are a few of my skills / technologies
          </p>
          <div className="about-skills-grid">
            {
              skills.map((skill, index) => (
                <div className="about-skill-item">
                  <p>{skill}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="about-more">
          <div className="about-contact blue__button">
            <a href="#contact">HIRE ME</a>
          </div>
          <div className="about-cv white__button">
            <a href=''>DOWNLOAD CV</a>
          </div>
        </div>
    </div>
  )
}

export default About