import React from "react";

const UserDefaultAvatar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="240"
      height="240"
      viewBox="0 0 239 239"
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
      <g
        id="Groupe_4222"
        data-name="Groupe 4222"
        transform="translate(-7650 -8628)"
      >
        <g
          id="Groupe_4163"
          data-name="Groupe 4163"
          transform="translate(7649.999 8628)"
        >
          <circle
            id="Ellipse_13"
            data-name="Ellipse 13"
            cx="119.5"
            cy="119.5"
            r="110"
            transform="translate(0.001)"
            fill="url(#linear-gradient)"
          />
        </g>
        <g id="Profile" transform="translate(7709.849 8674.649)">
          <path
            id="Profile-2"
            data-name="Profile"
            d="M0,123.592c0-20.293,27.481-25.36,59.652-25.36,32.353,0,59.652,5.255,59.652,25.534s-27.481,25.36-59.652,25.36C27.306,149.127,0,143.872,0,123.592Zm20.179-84.14A39.473,39.473,0,1,1,59.652,78.912,39.324,39.324,0,0,1,20.179,39.453Z"
            transform="translate(0 0)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
};

export default UserDefaultAvatar;
