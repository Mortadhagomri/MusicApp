import React from "react";
import AvatarImg from "../Avatar/Avatar";
import "./headbar.css";

const Headbar = () => {
  return (
    <div className="headbar" id="headbar">
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          placeholder="Search for song, events, articles"
        />
      </div>

      <ul className="menu">
        <li>
          <a href="#!">Music</a>
        </li>
        <li>
          <a href="#!">Event</a>
        </li>
        <li>
          <a href="#!">Shop</a>
        </li>
      </ul>

      <AvatarImg
        className={"small_avatar"}
        src="http://fanfare-makabes.fr/wp-content/uploads/2015/09/user-image.jpg"
      />
    </div>
  );
};

export default Headbar;
