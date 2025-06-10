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
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section
      id="Projetos"
      className="relative w-full overflow-hidden py-12"
      aria-label="Seção de projetos com fundo animado"
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoomSlow"
        style={{ backgroundImage: "url('/img/code.png')" }}
      ></div>

      {/* Conteúdo da seção em z-index maior para ficar acima da animação */}
      <div className="relative mx-auto w-full max-w-[85vw] z-10">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white drop-shadow mb-4">
            {t("projetos")}
          </h2>
          <Link
            to="/projects"
            className="inline-block text-white text-sm px-6 py-2 rounded-xl backdrop-blur-lg bg-white/10 hover:bg-white/20 transition shadow-lg"
          >
            Lista de Projetos
          </Link>
        </div>

        {/* Carrossel */}
        <div className="flex mb-20">
          <Carousel settings={settings}>
            {Cards.map((projeto, index) => (
              <div className="w-full px-3" key={index}>
                <div className="h-[340px] bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-4 shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col">
                  {/* Imagem */}
                  <img
                    className="w-full h-[140px] object-cover rounded-md mb-3 border border-white/10 shadow"
                    src={projeto.imgSrc}
                    alt={projeto.alt || "Imagem do Projeto"}
                  />
                  {/* Título com truncamento */}
                  <h3 className="text-sm font-medium text-white mb-3 leading-tight line-clamp-2">
                    {projeto.title}
                  </h3>

                  {/* Botões */}
                  <div className="mt-auto flex justify-between text-sm">
                    <a
                      href={projeto.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white transition no-underline hover:underline"
                    >
                      Site
                    </a>
                    <a
                      href={projeto.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white transition no-underline hover:underline"
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
    </section>
  );
};

export default Projects;
