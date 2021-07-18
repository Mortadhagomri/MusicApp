import React from "react";
import "./headbar.css";

const Headbar = () => {
  return (
    <div className="headbar">
      <h2 className="headbar_logo"> LOGO </h2>
      <div class="search__container">
        <input
          class="search__input"
          type="text"
          placeholder="Search for song, events, articles"
        />
      </div>
      <div className="menu_container">
        <ul class="menu">
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
      </div>
      <div className="image__container">
        <img
          src="http://fanfare-makabes.fr/wp-content/uploads/2015/09/user-image.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Headbar;
