import React from "react";
import Slider from "../Slider/Slider";
import "./container.css";

const Container = () => {
  return (
    <div className="main_container">
      <div class="item"></div>
      <div class="item">
        <Slider />
      </div>
    </div>
  );
};

export default Container;
