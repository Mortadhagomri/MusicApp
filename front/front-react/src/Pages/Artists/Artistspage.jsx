import React from "react";
// import { NavLink, Route, Switch } from "react-router-dom";
import CardArtist from "../../Components/CardArtist/CardArtist";
import Typography from "../../Components/Typography/Typography";

import { allartists } from "../../Constant/Artists/fakedataAllArtists";

const Artistspage = () => {
  return (
    <>
      <Typography name="Artists" className="display_titles_pages" />

      <div className="artists_container" id="artists">
        {allartists.map((artist, index) => (
          <CardArtist artist={artist} key={index} />
        ))}
      </div>
      <span
        className="seemore"
        id="seemore"
        onClick={() => {
          // document.getElementById("artists").style.height = "100%";
          document.getElementById("seemore").style.visibility = "hidden";
        }}
      >
        see more artists
      </span>
    </>
  );
};

export default Artistspage;
