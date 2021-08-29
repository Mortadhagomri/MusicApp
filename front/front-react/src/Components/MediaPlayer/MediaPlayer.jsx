import { useContext, useEffect } from "react";
import { AudioContext } from "../../context/AudioContext";
import VolumeUpIcon from "../../Assets/svgs/AudioPlayerIcons/VolumeUpIcon";
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
  const { track } = useContext(AudioContext);

  return (
    <div className="mediaplayer_container">
      <div className="mediaplayer_artist_info">
        <img
          src={track.imgalbum}
          alt="artiste_image"
          className="mediaplayer_artist_img"
        />
        <div className="mediaplayer_song_info">
          <h4>{track.title}</h4>
          <p>{track.artist}</p>
        </div>
      </div>
      <div className="media_player_songcontrols">
        <Audioplayer preview={track.preview} />
      </div>
      <div className="mediaplayer_volumecontrols">
        <VolumeUpIcon />
        <div id="volume"></div>
      </div>
    </div>
  );
};

export default MediaPlayer;
