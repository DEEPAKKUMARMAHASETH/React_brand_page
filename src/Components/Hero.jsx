import React from "react";
import flipkart from "../src/assets/images/flipkart.png";
import amazon from "../src/assets/images/amazon.png";
import shoe from "../src/assets/images/shoe_image.png";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p  >
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondry-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src={flipkart} alt="flipkart" />
                <img src={amazon} alt="flipkart" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoe} alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;
