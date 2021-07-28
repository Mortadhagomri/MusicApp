import React from "react";
import ChartAlbums from "./ChartAlbums/ChartAlbums";
import Slider from "../Slider/Slider";
import "./container.css";

import { albums } from "./ChartAlbums/fakedataAlbums";

const Container = () => {
  return (
    <div className="main_container">
      <div class="item"></div>
      <div class="item">
        <ChartAlbums albums={albums} />
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  );
};

export default Container;
