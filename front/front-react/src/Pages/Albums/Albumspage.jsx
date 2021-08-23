import React from "react";
import { albums } from "../../Constant/Albums/fakedataAlbums";
import Slider from "../../Components/Slider/Slider";
import Typography from "../../Components/Typography/Typography";

const Albumspage = () => {
  return (
    <>
      <Typography name="Albums" className="display_titles_pages" />
      <div className="horizontal_grid_container">
        <div className="horizontal_grid_container_item">
          <Typography name="Trends" className={"display_albumspage_title"} />
          <Slider albums={albums} id_slider={"slider_Trends_albumspage"} />
        </div>
        <div className="horizontal_grid_container_item">
          <Typography name="RAP" className={"display_albumspage_title"} />
          <Slider albums={albums} id_slider={"slider_RAP_albumspage"} />
        </div>
        <div className="horizontal_grid_container_item">
          <Typography name="JAZZ" className={"display_albumspage_title"} />
          <Slider albums={albums} id_slider={"slider_JAZZ_albumspage"} />
        </div>
      </div>
    </>
  );
};

export default Albumspage;
