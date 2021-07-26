import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import CardAlbum from "../../CardAlbum/CardAlbum";
import "./ChartAlbum.css";

const ChartAlbums = ({ albums }) => {
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    let total = 5; //à refaire
    if (index < total) {
      setIndex(index + 1);
      document.getElementById(
        "carousel-top-albums"
      ).style.transform = `translateX(-${index * (170 + 40)}px)`;
    }
  };
  const handleLeft = () => {
    if (index > -1) {
      setIndex(index - 1);
      document.getElementById(
        "carousel-top-albums"
      ).style.transform = `translateX(-${index * (170 + 40)}px)`;
    }
  };
  return (
    <div>
      <div className="header-carrousel">
        <h1> Albums</h1>
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
        <div className="slider">
          <div className="items-slider" id="carousel-top-albums">
            {albums.map((album, index) => (
              <CardAlbum key={index} album={album} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChartAlbums;
