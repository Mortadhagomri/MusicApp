import React from "react";
import ChartInfoPage from "../../Components/ChartInfo/ChartInfoPage";
import ListSongs from "../../Components/ListSongs/ListSongs";
import { playlistTracks } from "../../Constant/Tracks/fakedataplaylist";

const FavorisPage = () => {
  return (
    <>
      <div className="horizontal_grid_container">
        <div className="horizontal_grid_container_item">
          <ChartInfoPage
            title="Favoris"
            classNameTitle="display_h1"
            subtitle="username"
            classNameSubtitle="display_username"
          />
        </div>
        <div className="horizontal_grid_container_item">
          <ListSongs playlistTracks={playlistTracks} />
        </div>
      </div>
    </>
  );
};

export default FavorisPage;
