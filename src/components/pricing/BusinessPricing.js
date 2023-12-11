import React from "react";

const BusinessPricing = () => {
  return (
    <div className="price">
    <h1 className="heading">our business packages</h1>
      <div className="container group">
        <div className="grid-1-5">
          <h2>Basic plan</h2>
          <h3>
            <sup>€</sup>2700<span className="small">/mo</span>
          </h3>
          <ul>
            <li>Branding</li>
            <li>SEO Optimization</li>
            <li>Ads</li>
            <li>web development</li>
            <li>web design</li>
          </ul>
          <a href="mailto:recipient@example.com?subject=I%20want%20to%20buy%20your%20basic%20business%20plan" className="button">buy now</a>
        </div>

        <div className="grid-1-5">
          <h2>Standard</h2>
          <p> [most chosen one]</p>
          <h3>
            <sup>€</sup>3900<span className="small">/mo</span>
          </h3>
          <ul>
            <li>Branding</li>
            <li>SEO Optimization</li>
            <li>Ads</li>
            <li>web/app development</li>
            <li>web/app design</li>
            <li>Social Media Management</li>
            <li>Logo Design</li>
          </ul>
          <a href="" className="button">
            Sign Up
          </a>
        </div>

        <div className="grid-1-5">
          <h2>Premium</h2>
          <h3>
            <sup>€</sup>7700<span className="small">/mo</span>
          </h3>

          <ul>
            <li>Branding</li>
            <li>SEO Optimization</li> <li>Ads</li> <li>web/app development</li>
            <li>web/app design</li>
            <li>Social Media Management</li>
            <li>Logo Design</li>
          </ul>
          <a href="" className="button">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessPricing;
