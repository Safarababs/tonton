import React from 'react'

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">e.t.enterprise</a>

      <div id="menu-bar" className="fas fa-bars"></div>

      <nav className="navbar">
        <a style={{"--i": "0"}} href="#home">home</a>
        <a style={{"--i": "1"}} href="#service">service</a>
        <a style={{"--i": "2"}} href="#price">price</a>
        <a style={{"--i": "3"}} href="#feature">feature</a>
        <a style={{"--i": "6"}} href="#contact">contact</a>
      </nav>
    </header>
  )
}

export default Header