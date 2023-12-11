import React from "react";
import BusinessPricing from "./BusinessPricing";

const Pricing = () => {
  return (
    <>
      <section className="price" id="price">
        <h1 className="heading">our digital packages</h1>
        <div className="container group">
          <div className="grid-1-5">
            <h2>Basic plan</h2>
            <h3>
              <sup>€</sup>1990<span className="small">/mo</span>
            </h3>
            <ul>
              <li>social media marketing</li>
              <li>SEO Optimization</li>
              <li>ads</li>
              <li>marketing</li>
            </ul>
            <a href="" className="button">
              buy now
            </a>
          </div>

          <div className="grid-1-5">
            <h2>Standard</h2>
            <p> [most chosen one]</p>
            <h3>
              <sup>€</sup>3200<span className="small">/mo</span>
            </h3>
            <ul>
              <li>social media marketing</li>
              <li>SEO Optimization</li>
              <li>ads</li>
              <li>marketing</li> <li>web design</li>
              <li>branding</li>
            </ul>
            <a href="" className="button">
              buy now
            </a>
          </div>

          <div className="grid-1-5">
            <h2>Standard +</h2>
            <h3>
              <sup>€</sup>4200<span className="small">/mo</span>
            </h3>
            <ul>
              <li>social media marketing</li>
              <li>SEO Optimization</li>
              <li>ads</li>
              <li>web/app development</li>
              <li>web/app design</li>
              <li>marketing</li>
              <li>branding</li>
            </ul>
            <a href="" className="button">
              buy now
            </a>
          </div>

          <div className="grid-1-5">
            <h2>Premium</h2>
            <h3>
              <sup>€</sup>7700<span className="small">/mo</span>
            </h3>

            <ul>
              <li>social media marketing</li>
              <li>SEO Optimization</li>
              <li>ads</li>
              <li>web/app development</li>
              <li>web/app design</li>
              <li>marketing</li>
              <li>branding</li>
            </ul>
            <a href="" className="button">
              buy now
            </a>
          </div>
        </div>
      </section>
      
      <BusinessPricing />
    </>
  );
};

export default Pricing;
