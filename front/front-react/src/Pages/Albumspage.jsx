import React from "react";
import ChartAlbums from "../Components/ChartAlbums/ChartAlbums";
import { albums } from "../Components/ChartAlbums/fakedataAlbums";

const Albumspage = () => {
  return (
    <div className="horizontal_grid_container">
      <div className="horizontal_grid_container_item">
        <ChartAlbums albums={albums} />
      </div>
      <div className="horizontal_grid_container_item">
        <ChartAlbums albums={albums} />
      </div>
      <div className="horizontal_grid_container_item">
        <ChartAlbums albums={albums} />
      </div>
      <div className="horizontal_grid_container_item">
        <ChartAlbums albums={albums} />
      </div>
    </div>
  );
};

export default Albumspage;
