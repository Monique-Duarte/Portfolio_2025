// Projects.jsx
import React from "react";
import Carousel from "../Carousel/index"; // Importando o componente Carousel
import styles from "./Projects.module.css";
import Cards from "../Cards/Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  // Configurações do carrossel
  const settings = {
    dots: true, // Adiciona os pontos de navegação
    infinite: true, // Permite rotação infinita
    speed: 500, // Velocidade da transição
    slidesToShow: 3, // Número de itens visíveis ao mesmo tempo
    slidesToScroll: 1, // Quantos itens serão rolados de cada vez
    autoplay: true, // Ativa a rotação automática
    autoplaySpeed: 2000, // Intervalo de 1 segundo
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Projetos" className={styles.container}>
      <h2 className={styles.container}>Projetos</h2>
      <div className={`${styles.container} ${styles.cards}`}>
        {/* Carrossel com as configurações */}
        <div className={styles.carousel}> 
        <Carousel settings={settings}>
          {Cards.map((projeto, index) => (
            <div className="sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2" key={index}>
              <div className={`shadow-md rounded-lg ${styles.card}`}>
                <div className="text-white p-2 rounded-t-lg">{projeto.title}</div>
                <img
                  className={`bg-white rounded-t-lg ${styles.logo}`}
                  src={projeto.imgSrc}
                  alt={projeto.alt || "image Project"}
                />
                <div className="bg-[#000916] flex justify-between p-2 ">
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
        </Carousel >
        </div>
      </div>
    </div>
  );
};

export default Projects;
