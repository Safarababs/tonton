import React from "react";
import BusinessPricing from "./BusinessPricing";

const Pricing = () => {
  function handleBuyNow(plan) {
    const recipient = 'recipient@example.com';
    let subject = '';

    if (plan === 'basic') {
      subject = 'I want to buy your basic plan';
    } else if (plan === 'standard') {
      subject = 'I want to buy your standard most chosen plan';
    } else if (plan === 'standardPlus') {
      subject = 'I want to buy your standard plus plan';
    } else if (plan === 'premium') {
      subject = 'I want to buy your premium plan';
    }

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  }

  return (
    <>
      <section className="price" id="price">
        <h1 className="heading">our digital packages</h1>
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
            <button onClick={() => handleBuyNow('basic')} className="btn">
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
            <button onClick={() => handleBuyNow('standard')} className="btn">
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
            <button onClick={() => handleBuyNow('standardPlus')} className="btn">
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
            <button onClick={() => handleBuyNow('premium')} className="btn">
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
