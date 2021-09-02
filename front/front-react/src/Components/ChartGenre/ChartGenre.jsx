import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AvatarImg from "../Avatar/Avatar";
import "./chartgenre.css";

const ChartGenre = ({ genres }) => {
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    let total = 5; //à refaire
    if (index < total) {
      setIndex(index + 1);
      document.getElementById(
        "carousel-genres"
      ).style.transform = `translateX(-${index * (170 + 10)}px)`;
    }
  };
  const handleLeft = () => {
    if (index > -1) {
      setIndex(index - 1);
      document.getElementById(
        "carousel-genres"
      ).style.transform = `translateX(-${index * (170 + 40)}px)`;
    }
  };
  return (
    <div>
      <div className="header-carrousel_genre">
        <h1>Genre</h1>
        <div>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="arrow"
            onClick={handleLeft}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className="arrow"
            onClick={handleRight}
          />
        </div>
      </div>
      <section>
        <div className="slider_genre">
          <div className="items_slider_genre" id="carousel-genres">
            {genres.map((genre, index) => (
              <NavLink to={genre.path_genre} key={index} className="link_genre">
                <div className="genre_container" key={index}>
                  <AvatarImg
                    className={"medium_avatar"}
                    src={genre.image_genre}
                  />
                  <p className="genre_title">{genre.name}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChartGenre;
