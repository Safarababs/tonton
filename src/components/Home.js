import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src="images/home-img.png" alt="" />
      </div>

      <div className="content">
        <h3>Unlock Your Business Potential with E.T.Enterprise.</h3>
        <p>
          With Our Comprehensive Suite Of Services Encompassing Marketing,
          Branding, Logo Design, Web & App Development, Store Design, Market
          Research, And AI Technologies, The Possibilities Are Boundless.
          Partnering With Us Isn't Just About Services; It's About Unlocking
          Your Full Business's Potential For Exponential Growth And Dominance In
          The Digital Revolution.
        </p>
        <a href="#about" className="btn">
          discover more
        </a>
      </div>
    </section>
  );
};

export default Home;
