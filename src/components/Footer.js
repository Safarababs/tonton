import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a href="#home">home</a>
          <a href="#feature">feature</a>
          <a href="#service">service</a>
          <a href="#price">price</a>
          <a href="#contact">contact</a>
        </div>

        <div className="box">
          <h3>Impressum:</h3>
          <p href="mailto:info@etenterprise.org">
            Elyes Taounza ET Enterprise
            Kellersohnweg 16, 45326 Essen 
            <p>cell: +49 162 3939075</p>
           <a href="https://wa.me/+4917676573487"> whatsapp: +49 176 76573487</a>
            <a href="mailto:info@etenterprise.org">email: info@etenterprise.org</a>
          </p>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="mailto:info@etenterprise.org">Send an email</a>
          <a href="https://wa.me/+4917676573487">Start WhatsApp Chat</a>

          <a href="#">facebook</a>
          <a href="#">instagram</a>
          <a href="#">linkedin</a>
        </div>
      </div>

      <h1 className="credit">
        all &copy; copyright reserved by <a href="#"> e.t enterprise </a> @ 2023
      </h1>
    </div>
  );
};

export default Footer;
