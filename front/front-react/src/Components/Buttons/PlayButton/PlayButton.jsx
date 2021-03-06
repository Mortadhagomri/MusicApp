import React, { useEffect, useState } from "react";
import "./PlayButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const PlayButton = ({ url, className }) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  return (
    <FontAwesomeIcon
      className={className}
      icon={playing ? faPause : faPlay}
      onClick={toggle}
    />
  );
};

export default PlayButton;
