import { useState } from "react";
import "./slider.css";

const Slider = ({ albums = ["/maquette2.jpg", "/maquette.jpg"] }) => {
  const [left, setLeft] = useState(0);

  return (
    <>
      <div className="slider">
        <div
          className="slider__container"
          style={{ left: left + "%" }}
          onClick={() => setLeft(left + 100)}
        >
          {albums.map((album) => (
            <img src={album} className="slider__img" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
