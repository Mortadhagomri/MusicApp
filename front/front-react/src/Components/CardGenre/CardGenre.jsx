import React from "react";
import { NavLink } from "react-router-dom";
import "./cardgenre.css";

const CardGenre = ({ genre, index }) => {
  return (
    <NavLink to={genre.path_genre} key={index} className="link_genre">
      <div className="card_genre">
        <h1 className="name_genre">{genre.name}</h1>
      </div>
    </NavLink>
  );
};

export default CardGenre;
