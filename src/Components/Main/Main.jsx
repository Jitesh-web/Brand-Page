import React from "react";
import "./main.css";
import Flipkart from "../../assets/flipkart.png";
import Amazon from "../../assets/amazon.png";
import Nike from "../../assets/hero-image.png";

const Main = () => {
  return (
    <>
      <section id="mainInfo">
        <h1 className="mainTitle">
          YOUR FEET <br />
          DESERVE <br />
          THE BEST
        </h1>
        <p className="mainDesc">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br />
          KELP YOU WITH OUR SHOES.YOUR FEET DESERVE
          <br /> THE BEST AND WE'RE HERE TO HELP YOU WUTH OUR
          <br /> SHOES.
        </p>
        <button className="shopnowBtn">Shop Now</button>
        <button className="categoryBtn">Category</button>
        <p className="mainText">Also Available On</p>
        <img src={Flipkart} alt="filkkart Image" className="filpkartImg" />
        <img src={Amazon} alt="amazon Image" className="amazonImg" />
        <img src={Nike} alt="Nike Logo" className="nikeLogo" />
      </section>
    </>
  );
};

export default Main;
