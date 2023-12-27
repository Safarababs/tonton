import React, { useState, useEffect, useCallback } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('home'); // Initially set to 'home'

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
    setIsMenuOpen(false)
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 150;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveMenuItem(section.id);
      }
    });
  }, [prevScrollPos]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveMenuItem(id);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      // If the menu is closing, reset the active menu item to 'home'
      setActiveMenuItem('home');
    }
  };

  return (
    <header>
      <div id="menu-bar" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuToggle}></div>
      <span className="logo" onClick={() => scrollToSection('home')}>
        e. t. enterprise
      </span>

      <nav className={`navbar ${isMenuOpen ? 'nav-toggle' : ''} ${visible ? '' : 'hidden'}`}>
        <span onClick={() => scrollToSection('home')} className={activeMenuItem === 'home' ? 'active' : ''} style={{ animationDelay: '0s' }}>home</span>
        <span onClick={() => scrollToSection('feature')} className={activeMenuItem === 'feature' ? 'active' : ''} style={{ animationDelay: '0.1s' }}>Feature</span>
       
        <span onClick={() => scrollToSection('service')} className={activeMenuItem === 'service' ? 'active' : ''} style={{ animationDelay: '0.2s' }}>Service</span>
        <span onClick={() => scrollToSection('price')} className={activeMenuItem === 'price' ? 'active' : ''} style={{ animationDelay: '0.3s' }}>Price</span>
        <span onClick={() => scrollToSection('about')} className={activeMenuItem === 'about' ? 'active' : ''} style={{ animationDelay: '0.4s' }}>About Us</span>
        <span onClick={() => scrollToSection('contact')} className={activeMenuItem === 'contact' ? 'active' : ''} style={{ animationDelay: '0.5s' }}>Contact</span>
      </nav>
    </header>
  );
}

export default Header;
