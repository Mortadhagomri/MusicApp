import React from "react";
import Audioplayer from "./Audioplayer";
import "./mediaplayer.css";

const Tracks = [
  {
    title: "Blue Pill",
    album: "blabla",
    artist: "foulen",
    duration: "3:40",
    imgalbum:
      "https://images.genius.com/3730b6d3bdf523e825fb9fcf82c80c91.1000x1000x1.jpg",
    preview: "/4LFA - BLUE PILL.mp3",
  },
  {
    title: "Blue Pill",
    album: "blabla",
    artist: "foulen",
    duration: "3:40",
    imgalbum: "https://covers4.hosting-media.net/jpg343/u3616409637395.jpg",
    preview: "/4LFA - BLUE PILL.mp3",
  },
];

const MediaPlayer = () => {
  return (
    <div className="mediaplayer_container">
      <div className="mediaplayer_artist_info">
        <img
          src={Tracks[1].imgalbum}
          alt="artiste_image"
          className="mediaplayer_artist_img"
        />
        <div className="mediaplayer_song_info">
          <h3>Title of song</h3>
          <p>Artist</p>
        </div>
      </div>
      <div className="media_player_songcontrols">
        <Audioplayer />
      </div>
      <div className="mediaplayer_volumecontrols">3</div>
    </div>
  );
};

export default MediaPlayer;
