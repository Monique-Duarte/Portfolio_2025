import React from "react";
import Carousel from "../Carousel/index";
import Cards from "../Cards/Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const { t } = useTranslation();

  const settings = {
    style: {
      width: "95%",
      margin: "0 auto",
    },
    infinite: true, // Permite rotação infinita
    speed: 500, // Velocidade da transição
    slidesToShow: 5, // Número de itens visíveis ao mesmo tempo
    slidesToScroll: 2, // Quantos itens serão rolados de cada vez
    autoplay: true, // Ativa a rotação automática
    autoplaySpeed: 3000, // Intervalo de 3 segundos
    arrows: true, // Ativa as setas
    prevArrow: (
      <button>
        <FaChevronLeft />
      </button>
    ),
    nextArrow: (
      <button>
        <FaChevronRight />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Exibe 2 itens em telas médias (tablets)
          slidesToScroll: 1,
          arrows: true, // setas
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Exibe 1 item em telas pequenas (celulares)
          slidesToScroll: 1,
          arrows: true, // setas
        },
      },
    ],
  };

  return (
    <div className="bg-[#8F87F1]">
      <div id="Projetos" className="mx-auto w-full max-w-[80vw] overflow-y-hidden bg-[#8F87F1]">
        <div className="justify-center items-center mt-4">
          <h2 className="mt-5 p-1 text-center">{t('projetos')}</h2>
          <div className="flex center justify-center ">
            <Link to="/projects" id="list" className=" text-white text-sm fs-5 m-0 px-4 py-2 rounded-2xl backdrop-blur-md bg-white/10  
              shadow-lg transition duration-300 hover:bg-white/20 hover:shadow-xl"
            >
              Lista de Projetos
            </Link>
          </div>
        </div>
        <div className="flex h-full mb-20">
          <Carousel settings={settings}>
            {Cards.map((projeto, index) => (
              <div className="w-[90%] p-2" key={index}>
                <div className="text-center fs-4 ">{projeto.title}</div>
                <img
                  className="bg-white mx-auto img_card"
                  src={projeto.imgSrc}
                  alt={projeto.alt || "Imagem do Projeto"}
                />
                <div id="links" className="flex justify-between p-0 mt-1 ">
                  <a
                    href={projeto.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-800 py-1 px-3 rounded text-white md:ml-1"
                  >
                    Site
                  </a>
                  <a
                    href={projeto.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-800 py-1 no-underline px-3 rounded text-white md:mr-1"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
