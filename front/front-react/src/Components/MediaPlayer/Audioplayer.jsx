import React, { useState, useRef, useEffect } from "react";
import LoopIcon from "../../Assets/svgs/AudioPlayerIcons/LoopIcon";
import NextIcon from "../../Assets/svgs/AudioPlayerIcons/NextIcon";
import PauseIcon from "../../Assets/svgs/AudioPlayerIcons/PauseIcon";
import PreviousIcon from "../../Assets/svgs/AudioPlayerIcons/PreviousIcon";
import ReverseIcon from "../../Assets/svgs/AudioPlayerIcons/ReverseIcon";
import "./mediaplayer.css";

const Audioplayer = ({ preview }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const ref = useRef();
  const audio = ref.current;

  const toggleAudio = () => {
    const audio = ref.current;
    if (audio.paused) audio.play();
    else audio.pause();
  };

  useEffect(() => {
    /*  if (audio) { setAudio({ ...audio, currentTime: audio.currentTime }); }
     // we will update the time of audio every 800ms*/
    let setTimeInterval;
    setTimeInterval = setInterval(() => {
      setCurrentTime(audio?.currentTime);
      // console.log(audio);
    }, 500);
    return () => clearInterval(setTimeInterval);
  }, [audio?.currentTime]);

  return (
    <div className="audioplayer_container">
      <ReverseIcon />
      <PreviousIcon />
      <PauseIcon handleClick={toggleAudio} />
      <NextIcon />
      <LoopIcon />
      <div className="mediaplayer_progressbar">
        <span>{parseInt(currentTime).toString()}</span>
        <progress
          max="100"
          value="50"
          onChange={(e) => console.log(e.currentTarget.value)}
        ></progress>
        <span>{audio?.duration}</span>
      </div>
      <audio
        src={preview}
        ref={ref}
        onChange={(e) => console.log(e.currentTarget.value)}
      ></audio>
    </div>
  );
};

export default Audioplayer;
