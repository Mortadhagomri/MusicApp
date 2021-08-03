import React from "react";

// fake data
import { albums } from "../ChartAlbums/fakedataAlbums";
import { Tracks } from "../ChartTracks/fakedataTracks";
import { genres } from "../ChartGenre/fakedatagenre";
import { artists } from "../ChartPopularArtist/fakedatapopularartist";

// components
import ChartAlbums from "../ChartAlbums/ChartAlbums";
import ChartTracks from "../ChartTracks/ChartTracks";
import ChartGenre from "../ChartGenre/ChartGenre";
import ChartPopularArtist from "../ChartPopularArtist/ChartPopularArtist";

// container grid system
import "./container.css";

const Container = () => {
  return (
    <div className="main_container">
      <div class="item">
        <ChartAlbums albums={albums} />
      </div>
      <div class="item">
        <ChartTracks tracks={Tracks} />
      </div>
      <div class="item">
        <ChartGenre genres={genres} />
      </div>
      <div class="item">
        <ChartPopularArtist artists={artists} />
      </div>
    </div>
  );
};

export default Container;
