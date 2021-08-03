import React from "react";
import HeartButton from "../Buttons/HeartButton/HeartButton";
import PlayButton from "../Buttons/PlayButton/PlayButton";

import "./cardsong.css";

const CardSong = ({ song }) => {
  return (
    <div className="container-song">
      <div className="container-song__info">
        <div className="cover-container">
          <img src={song.imgalbum} alt={song.title} />
        </div>
        <div className="info-container">
          <span>{song.title}</span>
          <div className="contributors">
            <p key={song.artist.id} className="track-artist">
              {song.artist}
            </p>
          </div>
        </div>
      </div>
      <p className="duration">{song.duration}</p>
      <div className="container-song__icons">
        <PlayButton url={song.preview} className="icon-controller" />
        <HeartButton track={song} />
      </div>
    </div>
  );
};

export default CardSong;
