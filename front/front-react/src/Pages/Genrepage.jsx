import React from "react";

const Genrepage = () => {
  return (
    <>
      <Typography name="Albums" className="display_titles_pages" />
      <div className="horizontal_grid_container">
        <div className="horizontal_grid_container_item">
          <Typography name="Trends" className={"display_h1"} />
          <Slider albums={albums} id_slider={"slider_Trends_albumspage"} />
        </div>
        <div className="horizontal_grid_container_item">
          <Typography name="RAP" className={"display_h1"} />
          <Slider albums={albums} id_slider={"slider_RAP_albumspage"} />
        </div>
        <div className="horizontal_grid_container_item">
          <Typography name="JAZZ" className={"display_h1"} />
          <Slider albums={albums} id_slider={"slider_JAZZ_albumspage"} />
        </div>
      </div>
    </>
  );
};

export default Genrepage;
