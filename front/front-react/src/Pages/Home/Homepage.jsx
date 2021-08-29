import React from "react";

// fake data
import { albums } from "../../Constant/Albums/fakedataAlbums";
import { Tracks } from "../../Constant/Tracks/fakedataTracks";
import { genres } from "../../Constant/Genres/fakedatagenre";
import { artists } from "../../Constant/Artists/fakedatapopularartist";

// components
import ChartAlbums from "../../Components/ChartAlbums/ChartAlbums";
import ChartTracks from "../../Components/ChartTracks/ChartTracks";
import ChartGenre from "../../Components/ChartGenre/ChartGenre";
import ChartPopularArtist from "../../Components/ChartPopularArtist/ChartPopularArtist";

const Homepage = () => {
  return (
    <>
      <div className="vertical_grid_container">
        <div className="vertical_grid_container_item">
          <ChartAlbums albums={albums} />
        </div>
        <div className="vertical_grid_container_item">
          <ChartTracks tracks={Tracks} />
        </div>
        <div className="vertical_grid_container_item">
          <ChartGenre genres={genres} />
        </div>
        <div className="vertical_grid_container_item">
          <ChartPopularArtist artists={artists} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
