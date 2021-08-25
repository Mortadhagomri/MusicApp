import React from "react";
import Typography from "../../Components/Typography/Typography";
import { genres } from "../../Constant/Genres/fakedatagenre";

import "./genrespage.css";

const Genrespage = () => {
  return (
    <>
      <Typography name="Genres" className="display_titles_pages" />
      <div className="genres_container">
        {genres.map((genre) => (
          <div className="card_genre">
            <h1 className="name_genre">{genre.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Genrespage;
