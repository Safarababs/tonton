import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu on section click
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div id="menu-bar" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={toggleMenu}></div>
      <span className="logo" onClick={() => scrollToSection('home')}>
        e. t. enterprise
      </span>

      <nav className={`navbar ${isMenuOpen ? 'nav-toggle' : ''}`}>
        <span onClick={() => scrollToSection('home')} style={{ animationDelay: '0s' }}>home</span>
        <span onClick={() => scrollToSection('service')}style={{ animationDelay: '0.2s' }}>Service</span>
        <span onClick={() => scrollToSection('price')}style={{ animationDelay: '0.4s' }}>Price</span>
        <span onClick={() => scrollToSection('feature')}style={{ animationDelay: '0.6s' }}>Feature</span>
        <span onClick={() => scrollToSection('contact')}style={{ animationDelay: '0.8s' }}>Contact</span>
      </nav>
    </header>
  );
}

export default Header;

