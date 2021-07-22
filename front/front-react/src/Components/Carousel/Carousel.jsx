/* eslint-disable jsx-a11y/img-redundant-alt */
// import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import React from "react";

const CarouselImg = () => {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image One"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
          alt="Image Two"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImg;
