import React from "react";
import Slider from "../../Components/Slider/Slider";
import Typography from "../../Components/Typography/Typography";
import { albums } from "../../Constant/Albums/fakedataAlbums";
import "./genrespage.css";

const OneSingleGenrePage = ({ genre }) => {
  return (
    <>
      <div className="genre_info_container">
        <Typography name={genre.name} className="single_genrepage_title" />
      </div>
      <div className="horizontal_grid_container">
        <div className="horizontal_grid_container_item">
          <Typography
            name="Popular Songs"
            className={"display_albumspage_title"}
          />
          <Slider albums={albums} id_slider={"slider_Trends_albumspage"} />
        </div>
        <div className="horizontal_grid_container_item">
          <Typography name="New Drops" className={"display_albumspage_title"} />
          <Slider albums={albums} id_slider={"slider_RAP_albumspage"} />
        </div>
      </div>
    </>
  );
};

export default OneSingleGenrePage;
