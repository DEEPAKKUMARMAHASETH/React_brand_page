import React from "react";

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
                <img src="../src/assets/images/flipkart.png" alt="flipkart" />
                <img src="../src/assets/images/amazon.png" alt="flipkart" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="../src/assets/images/shoe_image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;
