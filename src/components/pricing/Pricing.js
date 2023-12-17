import React from "react";
import BusinessPricing from "./BusinessPricing";

const Pricing = () => {
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
    } else if (plan === 'standardPlus') {
      subject = 'I want to buy your standard plus plan';
      message = 'Hi there,\n\nI am considering purchasing your standard plus plan. Can you give me insights into what it offers?\n\nThanks!';
    } else if (plan === 'premium') {
      subject = 'I want to buy your premium plan';
      message = 'Dear Team,\n\nI am interested in acquiring your premium plan. Could you provide details on its exclusive features and pricing?\n\nBest regards,';
    }
  
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  
    window.location.href = mailtoLink;
  }

  return (
    <>
      <section className="price" id="price">
        <h1 className="title">our digital packages</h1>
        <div className="box-container">
          <div className="box">
            <h2>Basic plan</h2>
            {/* <h3>
              <sup>€</sup>1990<span className="small">/mo</span>
            </h3> */}
            <ul>
              <li>social media marketing</li>
              <li>SEO Optimization</li>
              <li>ads</li>
              <li>marketing</li>
            </ul>
            <button onClick={() => handleBuyNow('basic')} className="customBtn">
              buy now
            </button>
          </div>

          <div className=" box">
            <h2>Standard</h2>
            {/* <p>[most chosen one]</p> */}
            {/* <h3>
              <sup>€</sup>3200<span className="small">/mo</span>
            </h3> */}
            <ul>
              <li>social media marketing</li>
              <li>SEO Optimization</li>
              <li>ads</li>
              <li>marketing</li>
              <li>web design</li>
              <li>branding</li>
            </ul>
            <button onClick={() => handleBuyNow('standard')} className="customBtn">
              buy now
            </button>
          </div>

          <div className=" box">
            <h2>Standard plus</h2>
            {/* <h3>
              <sup>€</sup>4200<span className="small">/mo</span>
            </h3> */}
            <ul>
              <li>social media marketing</li>
              <li>SEO Optimization</li>
              <li>ads</li>
              <li>web/app development</li>
              <li>web/app design</li>
              <li>marketing</li>
              <li>branding</li>
            </ul>
            <button onClick={() => handleBuyNow('standardPlus')} className="customBtn">
              buy now
            </button>
          </div>

          <div className=" box">
            <h2>Premium</h2>
            {/* <h3>
              <sup>€</sup>7700<span className="small">/mo</span>
            </h3> */}
            <ul>
              <li>social media marketing</li>
              <li>SEO Optimization</li>
              <li>ads</li>
              <li>web/app development</li>
              <li>web/app design</li>
              <li>marketing</li>
              <li>branding</li>
            </ul>
            <button onClick={() => handleBuyNow('premium')} className="customBtn">
              buy now
            </button>
          </div>
        </div>
      </section>

      <BusinessPricing />
    </>
  );
};

export default Pricing;
