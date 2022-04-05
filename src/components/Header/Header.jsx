import React from 'react'
import './style.css';
import Nav from './Nav/Nav'


const Header = () => {
  return (
    <div className="header-main">
      <div className="header-title">
        <h4>Ryan O'Connell</h4>
        <p>Frontend Developer</p>
      </div>
      <div className="header-nav">
        <Nav />
      </div>
    </div>
  )
}

export default Header