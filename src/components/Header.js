import React from "react";

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div id="menu-bar" className="fas fa-bars"></div>
      <span className="logo" onClick={() => scrollToSection('home')}>
        e. t. enterprise
      </span>

      <nav className="navbar">
        <span onClick={() => scrollToSection('home')}>home</span>
        <span onClick={() => scrollToSection('service')}>Service</span>
        <span onClick={() => scrollToSection('price')}>Price</span>
        <span onClick={() => scrollToSection('feature')}>Feature</span>
        <span onClick={() => scrollToSection('contact')}>Contact</span>
      </nav>
    </header>
  );
}

export default Header;
