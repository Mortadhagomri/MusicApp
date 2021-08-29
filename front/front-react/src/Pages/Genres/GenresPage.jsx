import React from "react";
import CardGenre from "../../Components/CardGenre/CardGenre";
import Typography from "../../Components/Typography/Typography";
import { genres } from "../../Constant/Genres/fakedatagenre";

import "./genrespage.css";

const Genrespage = () => {
  return (
    <>
      <Typography name="Genres" className="display_titles_pages" />
      <div className="genres_container">
        {genres.map((genre, index) => (
          <CardGenre genre={genre} key={index} />
        ))}
      </div>
    </>
  );
};

export default Genrespage;
