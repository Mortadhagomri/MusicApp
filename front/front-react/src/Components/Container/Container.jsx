import React from "react";
import CarouselImg from "../Carousel/Carousel";
import "./container.css";

const Container = () => {
  return (
    <div className="main_container">
      <div class="item">
        <h2 className="item_title item__title_left">Albums</h2>
      </div>
      <div class="item">
        <h2 className="item_title item__title_right">Now Trendings</h2>
      </div>
      <div class="item">
        <h2 className="item_title item__title_left">Genre</h2>
      </div>
      <div class="item">
        <h2 className="item_title item__title_right">Popular Artists</h2>
      </div>
    </div>
  );
};

export default Container;
