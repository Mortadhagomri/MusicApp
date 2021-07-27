import React from "react";
import ChartAlbums from "../ChartAlbums/ChartAlbums";
import "./container.css";

import { albums } from "../ChartAlbums/fakedataAlbums";
import { Tracks } from "../ChartTracks/fakedataTracks";
import ChartTracks from "../ChartTracks/ChartTracks";

const Container = () => {
  return (
    <div className="main_container">
      <div class="item"></div>
      <div class="item">
        <Slider />
      </div>
      <div class="item">
        <ChartTracks tracks={Tracks} />
      </div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  );
};

export default Container;
