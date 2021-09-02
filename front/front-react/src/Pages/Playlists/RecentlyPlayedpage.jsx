import React from "react";
import ChartInfoPage from "../../Components/ChartInfo/ChartInfoPage";
import ListSongs from "../../Components/ListSongs/ListSongs";
import { playlistTracks } from "../../Constant/Tracks/fakedataplaylist";

const RecentlyPlayedpage = () => {
  return (
    <>
      <div className="horizontal_grid_container">
        <ChartInfoPage
          title="Recently Played"
          classNameTitle="display_h1"
          subtitle="username"
          classNameSubtitle="display_username"
        />
        <div className="horizontal_grid_container_item">
          <ListSongs playlistTracks={playlistTracks} />
        </div>
      </div>
    </>
  );
};

export default RecentlyPlayedpage;
