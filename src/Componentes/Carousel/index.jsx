import React from "react";
import Slider from "react-slick"; // Importando o Slider do react-slick

const Carousel = ({ settings, children }) => {
  // Filtrando as propriedades para garantir que não passemos propriedades indesejadas para o Slider
  const { currentSlide, ...restSettings } = settings; // Desestrutura e remove a propriedade currentSlide

  return (
    <Slider {...restSettings}> {/* Passa apenas as configurações filtradas */}
      {children}
    </Slider>
  );
};

export default Carousel;
