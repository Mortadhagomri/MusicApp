import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CardAlbum from "../CardAlbum/CardAlbum";
import "./slider.css";

const Slider = ({ albums, id_slider }) => {
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    let id = id_slider;
    let total = 8; //à refaire
    if (index < total) {
      setIndex(index + 1);
      document.getElementById(id).style.transform = `translateX(-${
        index * (100 + 50)
      }px)`;
    }
  };
  const handleLeft = () => {
    let id = id_slider;

    if (index > -1) {
      setIndex(index - 1);
      document.getElementById(id).style.transform = `translateX(${
        index * 100
      }px)`;
    }
  };

  return (
    <div className="slider_container">
      <div className="slider_arrow">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow"
          onClick={handleLeft}
        />
      </div>
      <div className="slider_items_container">
        <div className="slider_items" id={id_slider}>
          {albums.map((album, index) => (
            <CardAlbum key={index} album={album} />
          ))}
        </div>
      </div>
      <div className="slider_arrow">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow"
          onClick={handleRight}
        />
      </div>
    </div>
  );
};

export default Slider;
