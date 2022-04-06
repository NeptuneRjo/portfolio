import React, { useState } from 'react'
import './style.css';

import { 
  RiMenu3Line,
  RiCloseLine
} from 'react-icons/ri';


const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav-main">
      <div className="nav-desktop">
      </div>
      <div className="nav-mobile">
        {toggleMenu
          ? <RiCloseLine 
              color='#66FCF1' 
              size={27} 
              onClick={() => setToggleMenu(false)}
            />
          : <RiMenu3Line
              color='#66FCF1'
              size={27}
              onClick={() => setToggleMenu(true)}
            />            
        }
      </div>
      <div className={`nav-mobile-menu ${toggleMenu}`}>
        <div className="nav-mobile-items slide-bottom">
          <div className="nav-mobile-item">
            <p>
              <a href='#about' onClick={() => setToggleMenu(false)}>
                About
              </a>
            </p>
          </div>
          <div className="nav-mobile-item">
            <p>
              <a href='#projects' onClick={() => setToggleMenu(false)}>Projects
              </a>
            </p>
          </div>
          <div className="nav-mobile-item">
            <p>
              <a href='#contact' onClick={() => setToggleMenu(false)}>Contact
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav