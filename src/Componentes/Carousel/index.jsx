import React from "react";
import Slider from "react-slick"; // Importando o Slider do react-slick

const Carousel = ({ settings, children }) => {
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default Carousel;

