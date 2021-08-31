import React from "react";
import { NavLink } from "react-router-dom";
import AvatarImg from "../Avatar/Avatar";
import Typography from "../Typography/Typography";

const CardArtist = ({ artist, index }) => {
  return (
    <NavLink to={artist.path_artist_profile} key={index} className="">
      <div className="artist_item_info" key={index}>
        <AvatarImg
          src={`${artist.image_artist}`}
          className={"extra_medium_avatar"}
        />
        <Typography name={`${artist.name}`} className={"display_artistname"} />
      </div>
    </NavLink>
  );
};

export default CardArtist;
