import React, { useState } from 'react'
import './style.css';

import { 
  RiMenu3Line,
  RiCloseLine
} from 'react-icons/ri';

import Logo from '../../assets/Logo';


const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const disableScroll = () => {
    document.body.style.overflow = "hidden"
  }
  
  const enableScroll = () => {
    document.body.style.overflow = "visible"
  }

  return (
    <div className="nav-main">
      <Logo />
      <div className="nav-desktop">
        <div className="nav-desktop-items">
          <div className="nav-desktop-item">
            <p><a href="#about">About</a></p>
          </div>
          <div className="nav-desktop-item">
            <p>
              <a href="#projects">Projects</a>
            </p>
          </div>
          <div className="nav-desktop-item">
            <p><a href="#contact">Contact</a></p>
          </div>
        </div>
      </div>
      <div className="nav-mobile">
        {toggleMenu
          ? <RiCloseLine 
              color='#C8CCD9' 
              size={27} 
              onClick={() => {
                setToggleMenu(false);
                enableScroll();
              }}
            />
          : <RiMenu3Line
              color='#C8CCD9'
              size={27}
              onClick={() => {
                setToggleMenu(true);
                disableScroll();
              }}
            />            
        }
      </div>
      <div className={`nav-mobile-items ${toggleMenu}`}>
        <div className="nav-mobile-item">
          <p>
            <a 
              href='#about' 
              onClick={() => {setToggleMenu(false); enableScroll()}}
            >
              About
            </a>
          </p>
        </div>
        <div className="nav-mobile-item">
          <p>
            <a 
              href='#projects' 
              onClick={() => {setToggleMenu(false); enableScroll()}}
            >
              Projects
            </a>
          </p>
        </div>
        <div className="nav-mobile-item">
          <p>
            <a 
              href='#contact' 
              onClick={() => {setToggleMenu(false); enableScroll()}}
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nav