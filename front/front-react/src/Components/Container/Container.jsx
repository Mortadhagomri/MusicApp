import React from "react";
import Slider from "../Slider/Slider";
import "./container.css";

const Container = () => {
  return (
    <div className="main_container">
      <div class="item">
<<<<<<< HEAD
        <h2 className="item_title item__title_left">Albums</h2>
        <CarouselImg className="carousel_div" />
=======
        <Slider />
>>>>>>> e6d751aa734138a31641e415d9164b632332f49e
      </div>
      <div class="item">
        <Slider />
      </div>
      <div class="item">
        <Slider />
      </div>
      <div class="item">
        <Slider />
      </div>
    </div>
  );
};

export default Container;
