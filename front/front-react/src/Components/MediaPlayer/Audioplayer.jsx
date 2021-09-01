import React, { useState, useRef, useEffect } from "react";
import LoopIcon from "../../Assets/svgs/AudioPlayerIcons/LoopIcon";
import NextIcon from "../../Assets/svgs/AudioPlayerIcons/NextIcon";
import PauseIcon from "../../Assets/svgs/AudioPlayerIcons/PauseIcon";
import PlayIcon from "../../Assets/svgs/AudioPlayerIcons/PlayIcon";
import PreviousIcon from "../../Assets/svgs/AudioPlayerIcons/PreviousIcon";
import ReverseIcon from "../../Assets/svgs/AudioPlayerIcons/ReverseIcon";
import "./mediaplayer.css";

const Audioplayer = ({ preview }) => {
  const [playing, setPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const ref = useRef();
  const audio = ref.current;

  const toggleAudio = () => {
    const audio = ref.current;
    if (audio.paused) {
      audio.play();
      setPlaying(!playing);
    } else {
      audio.pause();
      setPlaying(false);
    }
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
    <>
      <div className="audioplayer_icons_container">
        <ReverseIcon />
        <PreviousIcon />
        {playing ? (
          <PauseIcon handleClick={toggleAudio} />
        ) : (
          <PlayIcon handleClick={toggleAudio} />
        )}
        <NextIcon />
        <LoopIcon />
      </div>

      <div className="mediaplayer_progressbar">
        <span>{parseInt(currentTime).toString()}</span>
        <progress
          max="100"
          value="50"
          onChange={(e) => console.log(e.currentTarget.value)}
        ></progress>
        <span>{Math.floor(audio?.duration)}</span>
      </div>
      <audio
        src={preview}
        ref={ref}
        onChange={(e) => console.log(e.currentTarget.value)}
      ></audio>
    </>
  );
};

export default Audioplayer;
