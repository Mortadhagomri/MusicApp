import React from "react";
import ChartInfoPage from "../../Components/ChartInfo/ChartInfoPage";
import ListSongs from "../../Components/ListSongs/ListSongs";
import { playlistTracks } from "../../Constant/Tracks/fakedataplaylist";

const OneSingleAlbumPage = () => {
  return (
    <>
      <div className="horizontal_grid_container">
        <ChartInfoPage
          title="Album's name"
          classNameTitle="display_h1"
          subtitle=" artist name"
          classNameSubtitle="display_username"
        />

        <div className="horizontal_grid_container_item">
          <ListSongs playlistTracks={playlistTracks} />
        </div>
      </div>
    </>
  );
};

export default OneSingleAlbumPage;
