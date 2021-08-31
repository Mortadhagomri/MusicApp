import React from "react";
import { NavLink } from "react-router-dom";
import AvatarImg from "../Avatar/Avatar";
import Typography from "../Typography/Typography";
import "./cardartist.css";

const CardArtist = ({ artist, index }) => {
  return (
    <NavLink
      to={artist.path_artist_profile}
      key={index}
      className="artist_card_link"
    >
      <div className="artist_card" key={index}>
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
