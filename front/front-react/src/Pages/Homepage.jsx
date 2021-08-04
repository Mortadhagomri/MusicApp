import React from "react";

// fake data
import { albums } from "../Components/ChartAlbums/fakedataAlbums";
import { Tracks } from "../Components/ChartTracks/fakedataTracks";
import { genres } from "../Components/ChartGenre/fakedatagenre";
import { artists } from "../Components/ChartPopularArtist/fakedatapopularartist";

// components
import ChartAlbums from "../Components/ChartAlbums/ChartAlbums";
import ChartTracks from "../Components/ChartTracks/ChartTracks";
import ChartGenre from "../Components/ChartGenre/ChartGenre";
import ChartPopularArtist from "../Components/ChartPopularArtist/ChartPopularArtist";

const Homepage = () => {
  return (
    <>
      <div className="vertical_grid_container">
        <div class="vertical_grid_container_item">
          <ChartAlbums albums={albums} />
        </div>
        <div class="vertical_grid_container_item">
          <ChartTracks tracks={Tracks} />
        </div>
        <div class="vertical_grid_container_item">
          <ChartGenre genres={genres} />
        </div>
        <div class="vertical_grid_container_item">
          <ChartPopularArtist artists={artists} />
        </div>
      </div>
      <div>
        <ChartAlbums albums={albums} />
      </div>
    </>
  );
};

export default Homepage;
