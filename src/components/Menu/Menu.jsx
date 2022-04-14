import React, { useState } from 'react'
import './style.css';

import { 
  RiMenu3Line,
  RiCloseLine
} from 'react-icons/ri';

import { Scroll } from 'react-fns'
import { useEffect } from 'react';


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

  return (
    <Scroll
      render={({ x, y }) => (
        <div>
          {
            y >= 460 &&
            <div className={`menu-content ${menuClasses.join(' ')}`}>
              <div className="menu-desktop"></div>
              <div className="menu-mobile">
                {toggleMenu
                  ? <RiCloseLine 
                      color='#47ABE0' 
                      size={27} 
                      onClick={() => setToggleMenu(false)}
                    />
                  : <RiMenu3Line
                      color='#47ABE0'
                      size={27}
                      onClick={() => setToggleMenu(true)}
                    />            
                }
                <div className={`menu-mobile-items ${toggleMenu}`}>
                  <div className="menu-mobile-item">
                    <p>
                      <a href='#about' onClick={() => setToggleMenu(false)}>
                        About
                      </a>
                    </p>
                  </div>
                  <div className="menu-mobile-item">
                    <p>
                      <a href='#projects' onClick={() => setToggleMenu(false)}>Projects
                      </a>
                    </p>
                  </div>
                  <div className="menu-mobile-item">
                    <p>
                      <a href='#contact' onClick={() => setToggleMenu(false)}>Contact
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