import React from "react";
import "./audioplayericons.css";

const PlayIcon = ({ handleClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="47"
      viewBox="0 0 47 47"
      className="mediaplayer_icons pause_icon"
      onClick={handleClick}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#4bbdfd" />
          <stop offset="1" stop-color="#e717b3" />
        </linearGradient>
      </defs>
      <g
        id="Groupe_4226"
        data-name="Groupe 4226"
        transform="translate(1602 -853)"
      >
        <g
          id="Groupe_4224"
          data-name="Groupe 4224"
          transform="translate(-1602.219 853)"
        >
          <circle
            id="Ellipse_13"
            data-name="Ellipse 13"
            cx="23.5"
            cy="23.5"
            r="23.5"
            transform="translate(0.219)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g
          id="Groupe_4225"
          data-name="Groupe 4225"
          transform="translate(-1481.281 872.086)"
        >
          <path
            id="Polygone_10"
            data-name="Polygone 10"
            d="M10.5,0,21,16H0Z"
            transform="translate(-87.719 -6.086) rotate(90)"
            fill="#e4e4e4"
          />
        </g>
      </g>
    </svg>
  );
};

export default PlayIcon;
