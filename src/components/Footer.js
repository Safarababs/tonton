import React from 'react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <span onClick={() => scrollToSection('home')}>home</span>
          <span onClick={() => scrollToSection('feature')}>feature</span>
          <span onClick={() => scrollToSection('service')}>service</span>
          <span onClick={() => scrollToSection('price')}>price</span>
          <span onClick={() => scrollToSection('contact')}>contact</span>
        </div>

        <div className="box">
          <h3>Impressum:</h3>
          <p>
            Elyes Taounza ET Enterprise
            Kellersohnweg 16, 45326 Essen 
            <p>cell: +49 162 3939075</p>
            <span>
              <a href="https://wa.me/+4917676573487"> whatsapp: +49 176 76573487</a>
            </span>
            <span>
              <a href="mailto:info@etenterprise.org">email: info@etenterprise.org</a>
            </span>
          </p>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <span>
            <a href="mailto:info@etenterprise.org">Send an email</a>
          </span>
          <span>
            <a href="https://wa.me/+4917676573487">Start WhatsApp Chat</a>
          </span>

          <span>facebook</span>
          <span>instagram</span>
          <span>linkedin</span>
        </div>
      </div>

      <h1 className="credit">
        all &copy; copyright reserved by <span onClick={() => scrollToSection('home')}> e.t enterprise </span> @ 2023
      </h1>
    </div>
  );
};

export default Footer;
