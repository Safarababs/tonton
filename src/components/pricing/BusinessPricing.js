import React from "react";

const BusinessPricing = () => {
  function handleBuyNow(plan) {
    const recipient = 'info@etenterprise.org';
    let subject = '';
    let message = ''; 
  
    if (plan === 'basic') {
      subject = 'I want to buy your basic plan';
      message = 'Hello,\n\nI am interested in purchasing your basic plan. Please provide me with more details on the features and pricing.\n\nThank you.';
    } else if (plan === 'standard') {
      subject = 'I want to buy your standard most chosen plan';
      message = 'Hi,\n\nI am keen on your most popular standard plan. Could you share additional information regarding this plan?\n\nRegards,';
    } else if (plan === 'premium') {
      subject = 'I want to buy your premium plan';
      message = 'Dear Team,\n\nI am interested in acquiring your premium plan. Could you provide details on its exclusive features and pricing?\n\nBest regards,';
    }
  
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  
    window.location.href = mailtoLink;
  }
  
  

  return (
    <div className="price">
      <h1 className="title">our business packages</h1>
      <div className="box-container">
        <div className=" box">
          <h2>Basic plan</h2>
          {/* <h3>
            <sup>€</sup>2700<span className="small">/mo</span>
          </h3> */}
          <ul>
            <li>Branding</li>
            <li>SEO Optimization</li>
            <li>Ads</li>
            <li>web development</li>
            <li>web design</li>
          </ul>
          <button onClick={() => handleBuyNow('basic')} className="customBtn">
            buy now
          </button>
        </div>

        <div className=" box">
          <h2>Standard</h2>
          {/* <p>[most chosen one]</p> */}
          {/* <h3>
            <sup>€</sup>3900<span className="small">/mo</span>
          </h3> */}
          <ul>
            <li>Branding</li>
            <li>SEO Optimization</li>
            <li>Ads</li>
            <li>web/app development</li>
            <li>web/app design</li>
            <li>Social Media Management</li>
            <li>Logo Design</li>
          </ul>
          <button onClick={() => handleBuyNow('standard')} className="customBtn">
            buy now
          </button>
        </div>

        <div className=" box">
          <h2>Premium</h2>
          {/* <h3>
            <sup>€</sup>7700<span className="small">/mo</span>
          </h3> */}

          <ul>
            <li>Branding</li>
            <li>SEO Optimization</li>
            <li>Ads</li>
            <li>web/app development</li>
            <li>web/app design</li>
            <li>Social Media Management</li>
            <li>Logo Design</li>
          </ul>
          <button onClick={() => handleBuyNow('premium')} className="customBtn">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessPricing;
