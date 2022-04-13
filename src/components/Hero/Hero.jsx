import React from 'react'
import { useEffect, useState } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { ParallaxBanner } from 'react-scroll-parallax';

import heroImage from '../../assets/hero.jpg'
import Nav from '../Nav/Nav'

import './style.css';

const Hero = () => {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="header-main">
      {/* <Nav /> */}
      {loaded ? null : (
        <div className='image-loading' />
      )}
      <ParallaxBanner
        className="header-content aspect-[2/1]" 
        layers={[{image: `${heroImage}`, speed: -27}]}
        onLoad={() => setLoaded(true)}
      >
        <div className="header-text" >
            <h4 
              data-aos='fade-up' 
              data-aos-easing="ease-in-out" 
              data-aos-duration="800"
            >I'm Ryan O'Connell</h4>
            <h4 
              data-aos='fade-up' 
              data-aos-easing="ease-in-out" 
              data-aos-duration="800"
            >A <span>Front-end</span> Developer</h4>
        </div>
      </ParallaxBanner>
    </div>
  )
}

export default Hero