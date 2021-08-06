import React from "react";
import ChartAlbums from "../Components/ChartAlbums/ChartAlbums";
import { albums } from "../Components/ChartAlbums/fakedataAlbums";
import Slider from "../Components/Slider/Slider";
import Typography from "../Components/Typography/Typography";

const Albumspage = () => {
  return (
    <div className="horizontal_grid_container">
      <div className="horizontal_grid_container_item">
        <Typography name="Trends" />
        <Slider albums={albums} id_slider={"slider_Trends_albumspage"} />
      </div>
      <div className="horizontal_grid_container_item">
        <Typography name="RAP" />
        <Slider albums={albums} id_slider={"slider_RAP_albumspage"} />
      </div>
      <div className="horizontal_grid_container_item">
        <Typography name="JAZZ" />
        <Slider albums={albums} id_slider={"slider_RAP_albumspage"} />
      </div>
    </div>
  );
};

export default Albumspage;
