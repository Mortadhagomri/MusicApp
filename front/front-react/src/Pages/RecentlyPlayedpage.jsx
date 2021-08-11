import React from "react";
import UserDefaultAvatar from "../Assets/svgs/User/UserDefaultAvatar";
import ListSongs from "../Components/ListSongs/ListSongs";
import Typography from "../Components/Typography/Typography";
import { playlistTracks } from "../Constant/Tracks/fakedataplaylist";
// import { albums } from "../Components/ChartAlbums/fakedataAlbums";
// import Slider from "../Components/Slider/Slider";

const RecentlyPlayedpage = () => {
  return (
    <>
      <div className="horizontal_grid_container">
        <div className="horizontal_grid_container_item">
          <div className="info_container">
            <UserDefaultAvatar />
            <div className="info_container_titles">
              <Typography name="Recently Played" className={"display_h1"} />
              <Typography name="username" className={"display_artistname"} />
            </div>
          </div>
        </div>
        <div className="horizontal_grid_container_item">
          <ListSongs playlistTracks={playlistTracks} />
        </div>
      </div>
    </>
  );
};

export default RecentlyPlayedpage;
