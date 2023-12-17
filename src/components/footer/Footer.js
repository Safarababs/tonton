import React from "react";
import FooterPopup from "./FooterPopup";
import AddressPopup from "./FooterAddress";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  
  return (
    <div className="footer">
      <h1 className="credit">
        all &copy; copyright reserved by{" "}
        <span onClick={() => scrollToSection("home")}> e.t enterprise </span> @
        2023
      </h1>
      <div className="footer-text">
      <AddressPopup />
        <FooterPopup />
        
      </div>
    </div>
  );
};

export default Footer;
