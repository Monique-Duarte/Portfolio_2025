import React from "react";
import Carousel from "../Carousel/index"; // Importando o componente Carousel
import Cards from "../Cards/Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";

const Projects = () => {
  // Configurações do carrossel
  const settings = {
    dots: true, // Adiciona os pontos de navegação
    infinite: true, // Permite rotação infinita
    speed: 500, // Velocidade da transição
    slidesToShow: 5, // Número de itens visíveis ao mesmo tempo
    slidesToScroll: 1, // Quantos itens serão rolados de cada vez
    autoplay: true, // Ativa a rotação automática
    autoplaySpeed: 3000, // Intervalo de 3 segundos
    arrows: true, // Habilita as setas de navegação
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Exibe 2 itens em telas médias (tablets)
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Exibe 1 item em telas pequenas (celulares)
          slidesToScroll: 1,
          arrows: false, // Desabilita as setas em dispositivos móveis
        },
      },
    ],
  };

  return (
    <div id="Projetos" className="container project w-full max-w-[80vw] bg-[#000916] justify-center">
      <h2 className="text-white p-2 text-center">Projetos</h2>
      <div className="flex h-full project">
        <div className="project h-[80%]">
          {/* Passe a configuração para o Carousel */}
          <Carousel settings={settings}>
            {/* Criação dos Cards */}
            {Cards.map((projeto, index) => (
              <div className="project h-[300px] p-2" key={index}>
                <div className="bg-[#002D49] rounded-lg shadow-md transition-transform duration-200 hover:scale-105 project">
                  <div className="text-white p-2 rounded-t-lg">{projeto.title}</div>
                  <img
                    className="bg-white rounded-t-lg img_card"
                    src={projeto.imgSrc}
                    alt={projeto.alt || "image Project"}
                  />
                  <div className="bg-[#000916] flex justify-between p-2">
                    <a
                      href={projeto.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-800 text-white py-1 px-3 no-underline rounded"
                    >
                      Site
                    </a>
                    <a
                      href={projeto.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-800 text-white py-1 no-underline px-3 rounded"
                    >
                      GitHub
                    </a>
                  </div>
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
