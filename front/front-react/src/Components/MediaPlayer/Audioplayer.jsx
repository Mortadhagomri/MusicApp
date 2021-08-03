import React from "react";
import LoopIcon from "../../Assets/svgs/AudioPlayerIcons/LoopIcon";
import NextIcon from "../../Assets/svgs/AudioPlayerIcons/NextIcon";
import PauseIcon from "../../Assets/svgs/AudioPlayerIcons/PauseIcon";
import PreviousIcon from "../../Assets/svgs/AudioPlayerIcons/PreviousIcon";
import ReverseIcon from "../../Assets/svgs/AudioPlayerIcons/ReverseIcon";
import "./mediaplayer.css";

const Audioplayer = () => {
  return (
    <div className="audioplayer_container">
      <ReverseIcon />
      <PreviousIcon />
      <PauseIcon />
      <NextIcon />
      <LoopIcon />
    </div>
  );
};

export default Audioplayer;
