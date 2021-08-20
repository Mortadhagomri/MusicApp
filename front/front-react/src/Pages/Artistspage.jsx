import React from "react";
import AvatarImg from "../Components/Avatar/Avatar";
import Typography from "../Components/Typography/Typography";

import { allartists } from "../Constant/Artists/fakedataAllArtists";

const Artistspage = () => {
  return (
    <>
      <Typography name="Artists" className="display_titles_pages" />

      <div className="artists_container" id="artists">
        {allartists.map((artist) => (
          <div className="artist_item_info">
            <AvatarImg
              src={`${artist.image_artist}`}
              className={"extra_medium_avatar"}
            />
            <Typography
              name={`${artist.name}`}
              className={"display_artistname"}
            />
          </div>
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
