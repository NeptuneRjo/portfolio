import React, { useState, useEffect } from 'react'
import './style.css';

import { 
  RiMenu3Line,
  RiCloseLine
} from 'react-icons/ri';

import { Scroll } from 'react-fns'

import Logo from '../../assets/Logo';


const Menu = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY

    if (offset > 200 ) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const menuClasses = ['menu']
  if (scrolled) {
    menuClasses.push('scrolled')
  }

  const disableScroll = () => {
    document.body.style.overflow = "hidden"
  }
  
  const enableScroll = () => {
    document.body.style.overflow = "visible"
  }

  return (
    <Scroll
      render={({ x, y }) => (
        <div>
          {
            y >= 625 &&
            <div className={`menu-content ${menuClasses.join(' ')}`}>
              <Logo />
              <div className="menu-desktop">
                <div className="menu-desktop-item">
                  <p>
                    <a href='#about'>
                      About
                    </a>
                  </p>
                </div>
                <div className="menu-desktop-item">
                  <p>
                    <a href='#projects'>
                        Projects
                    </a>
                  </p>
                </div>
                <div className="menu-desktop-item">
                  <p>
                    <a href='#contact'>
                        Contact
                    </a>
                  </p>
                </div>
              </div>
              <div className="menu-mobile">
                {toggleMenu
                  ? <RiCloseLine 
                      color='#47ABE0' 
                      size={27} 
                      onClick={() => {
                        setToggleMenu(false); 
                        enableScroll();
                      }}
                    />
                  : <RiMenu3Line
                      color='#47ABE0'
                      size={27}
                      onClick={() => {
                        setToggleMenu(true); 
                        disableScroll();
                      }}
                    />            
                }
                <div className={`menu-mobile-items ${toggleMenu}`} >
                  <div className="menu-mobile-item">
                    <p>
                      <a 
                        href='#about' 
                        onClick={() => {
                          setToggleMenu(false); enableScroll()}}
                      >
                        About
                      </a>
                    </p>
                  </div>
                  <div className="menu-mobile-item">
                    <p>
                      <a 
                        href='#projects' 
                        onClick={() => {
                          setToggleMenu(false); enableScroll()}}
                        >
                          Projects
                      </a>
                    </p>
                  </div>
                  <div className="menu-mobile-item">
                    <p>
                      <a 
                        href='#contact' 
                        onClick={() => {
                          setToggleMenu(false); enableScroll()}}
                        >
                          Contact
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      )}
    />
  )
}

export default Menu