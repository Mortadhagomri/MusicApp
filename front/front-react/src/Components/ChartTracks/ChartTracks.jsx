import React from "react";
import CardSong from "../CardSong/CardSong";

import "./chartTracks.css";

const ChartTracks = ({ tracks }) => {
  return (
    <div>
      <h1 className="chartTracks__title">Now Trending</h1>
      <section className="top-songs-container">
        {tracks.map((track) => (
          <CardSong key={track.id} song={track} />
        ))}
      </section>
    </div>
  );
};

export default ChartTracks;