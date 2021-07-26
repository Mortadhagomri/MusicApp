import React from "react";

import "./cardAlbum.css";

const CardAlbum = ({ album }) => {
  return (
    <div className="album">
      <img src={album.src_image} alt={album.title} className="card-album" />
      <p className="Album-Title">{album.name}</p>
    </div>
  );
};

export default CardAlbum;
