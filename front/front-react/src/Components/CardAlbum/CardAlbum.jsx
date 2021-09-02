import React from "react";
import { NavLink } from "react-router-dom";

import "./cardAlbum.css";

const CardAlbum = ({ album }) => {
  return (
    <NavLink to={album.path_album} className="link_genre">
      <div className="album">
        <img src={album.src_image} alt={album.title} className="card-album" />
        <p className="Album-Title">{album.name}</p>
      </div>
    </NavLink>
  );
};

export default CardAlbum;
