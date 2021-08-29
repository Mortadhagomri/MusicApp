import React from "react";
import "./audioplayericons.css";

const PauseIcon = ({ handleClick }) => {
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
          <stop offset="0" stopColor="#4bbdfd" />
          <stop offset="1" stopColor="#e717b3" />
        </linearGradient>
      </defs>
      <g id="Groupe_7" data-name="Groupe 7" transform="translate(-0.219)">
        <circle
          id="Ellipse_13"
          data-name="Ellipse 13"
          cx="23.5"
          cy="23.5"
          r="23.5"
          transform="translate(0.219)"
          fill="url(#linear-gradient)"
        />
        <line
          id="Ligne_13"
          data-name="Ligne 13"
          y2="21.864"
          transform="translate(28.194 12.083)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <line
          id="Ligne_14"
          data-name="Ligne 14"
          y2="21.864"
          transform="translate(18.987 12.083)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default PauseIcon;
