import React from "react";

const BusinessPricing = () => {
  function handleBuyNow(plan) {
    const recipient = 'recipient@example.com';
    let subject = '';

    if (plan === 'basic') {
      subject = 'I want to buy your basic business plan';
    } else if (plan === 'standard') {
      subject = 'I want to buy your standard business plan';
    } else if (plan === 'premium') {
      subject = 'I want to buy your premium business plan';
    }

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  }

  return (
    <div className="price">
      <h1 className="heading">our business packages</h1>
      <div className="box-container">
        <div className=" box">
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
          <button onClick={() => handleBuyNow('basic')} className="btn">
            buy now
          </button>
        </div>

        <div className=" box">
          <h2>Standard</h2>
          <p>[most chosen one]</p>
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
          <button onClick={() => handleBuyNow('standard')} className="btn">
            buy now
          </button>
        </div>

        <div className=" box">
          <h2>Premium</h2>
          <h3>
            <sup>€</sup>7700<span className="small">/mo</span>
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
          <button onClick={() => handleBuyNow('premium')} className="btn">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessPricing;
