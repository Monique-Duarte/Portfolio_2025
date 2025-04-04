import React from "react";
import Carousel from "../Carousel/index"; // Importando o componente Carousel
import Cards from "../Cards/Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importando os ícones de seta

const Projects = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t

  // Configurações do carrossel
  const settings = {
    infinite: true, // Permite rotação infinita
    speed: 500, // Velocidade da transição
    slidesToShow: 5, // Número de itens visíveis ao mesmo tempo
    slidesToScroll: 2, // Quantos itens serão rolados de cada vez
    autoplay: false, // Ativa a rotação automática
    autoplaySpeed: 3000, // Intervalo de 3 segundos
    arrows: true, // Ativa as setas
    prevArrow: (
      <button className="custom-arrow custom-prev-arrow">
        <FaChevronLeft />
      </button>
    ),
    nextArrow: (
      <button className="custom-arrow custom-next-arrow">
        <FaChevronRight />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Exibe 2 itens em telas médias (tablets)
          slidesToScroll: 1,
          arrows: true, //  setas
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Exibe 1 item em telas pequenas (celulares)
          slidesToScroll: 1,
          arrows: true, //  setas
        },
      },
    ],
  };

  return (
    <div id="Projetos" className="mx-auto w-full max-w-[80vw] justify-center mb-6">
      <h2 className="mt-5 p-1 text-center">{t('projetos')}</h2>
      <div className="flex h-full">
        <Carousel settings={settings}>
          {Cards.map((projeto, index) => (
            <div className="w-[90%] p-2" key={index}>
              <div className="text-center fs-4 rounded-t-lg">{projeto.title}</div>
              <img
                className="bg-white mx-auto rounded-t-lg img_card"
                src={projeto.imgSrc}
                alt={projeto.alt || "image Project"}
              />
              <div id="links" className="flex justify-between p-0 mt-1 ">
                <a
                  href={projeto.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 py-1 px-3 rounded text-white ml-4 md:ml-0"
                >
                  Site
                </a>
                <a
                  href={projeto.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 py-1 no-underline px-3 rounded text-white mr-4 md:mr-0"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
