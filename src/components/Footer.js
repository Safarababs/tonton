import React from "react";

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
        <p>
          Impressum: Elyes Taounza ET Enterprise Kellersohnweg 16, 45326 Essen{" "}
        </p>
        <p>cell: +49 162 3939075</p>
        <p>email: info@etenterprise.org</p>
      </div>
    </div>
  );
};

export default Footer;
