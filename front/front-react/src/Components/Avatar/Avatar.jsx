import React from "react";
import "./avatar.css";

const AvatarImg = ({ src, className }) => {
  return (
    <div className="avatar_container">
      <img src={src} alt="" className={className} />
    </div>
  );
};

export default AvatarImg;
