import React from "react";
import styles from "./Projects.module.css";

const projetosData = [
    {
    title: "GitHub - Portfólio",
    imgSrc: "/img/fundo_q.gif",
    alt: "logo de gato",
    tags: "#React #JS #CSS #HTML #Bootstrap",
    siteLink: "https://portfolio-moniquead.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Portifolio_2025",
    },
    {
    title: "Site - Hema Toma",
    imgSrc: "/img/gamecontrol.jpg",
    alt: "controle de video game",
    tags: "#JS #CSS #HTML #Bootstrap",
    siteLink: "https://game-hema-toma.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Game-Hema-Toma.git",
    },
    {
    title: "Site - Restaurante",
    imgSrc: "/img/restaurante.jpg",
    alt: "restaurante",
    tags: "#JS #CSS #HTML #Bootstrap #Sass",
    siteLink: "https://page-restaurante-alpha.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Projeto-3-Page-Restaurante.git",
    },
    {
    title: "Blog de Noticias",
    imgSrc: "/img/image.png",
    alt: "Jornal",
    tags: "#JS #CSS #HTML #Bootstrap",
    siteLink: "https://projeto-blog-noticias.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Projeto-blog-noticias.git",
    },
    {
    title: "Neko Shop",
    imgSrc: "/img/logo.png",
    alt: "Logo gato laranja",
    tags: "#JS #CSS #HTML #Bootstrap",
    siteLink: "https://neko-shop.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Neko-Shop-origin.git",
    },
    {
    title: "Game Shop",
    imgSrc: "/img/gif_mario2.gif",
    alt: "Dois controles de video game",
    tags: "#JS #CSS #HTML #Bootstrap",
    siteLink: "https://site-game-shop-ten-coral.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Site-Game-Shop.git",
    },
    {
    title: "Portifólio Less",
    imgSrc: "/img/portless.png",
    alt: "Miniatura do site",
    tags: "#JS #CSS #HTML #Jquery" "#Less",
    siteLink: "https://portfolio-less-seven.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Portfolio-Less.git",
    },
    {
    title: "Portal de Notícias",
    imgSrc: "/img/image.png",
    alt: "Jornal",
    tags: "#JS #CSS #HTML #Bootstrap",
    siteLink: "https://meu-portal-mu.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Portal-de-Noticias.git",
    },
    {
    title: "Formulário",
    imgSrc: "/img/form.png",
    alt: "Prancheta",
    tags: "#JS #CSS #HTML #Bootstrap",
    siteLink: "https://formulario-js-plum.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Formulario_JS.git",
    },
    {
    title: "Galeria de fotos",
    imgSrc: "/img/camera.png",
    alt: "Camera",
    tags: "#JS #CSS #HTML",
    siteLink: "https://galeria-de-fotos-cyan.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Galeria-de-Fotos.git",
    },
    {
    title: "Ebac Motors",
    imgSrc: "/img/carro.png",
    alt: "Carro",
    tags: "#JS #CSS #HTML",
    siteLink: "https://ebac-motors-six-alpha.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Ebac-Motors.git",
    },
    {
    title: "Anuncio de venda",
    imgSrc: "/img/994737.png",
    alt: "Carrinho de compras",
    tags: "#JS #CSS #HTML",
    siteLink: "https://anuncio-jquery.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/formulario-plugs-jquery.git",
    },
    {
    title: "Portal News",
    imgSrc: "/img/image.png",
    alt: "Jornal",
    tags: "#JS #CSS #HTML",
    siteLink: "https://portal-de-noticias-grid.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Ebac_News.git",
    },
    {
    title: "Agenda",
    imgSrc: "/img/pngwing.com.png",
    alt: "Logo telefone",
    tags: "#JS #CSS #HTML",
    siteLink: "https://projeto-agendaonline.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Projeto_Agenda.git",
    },
    {
    title: "Sistema de médias",
    imgSrc: "/img/calculadora.png",
    alt: "Calculadora",
    tags: "#JS #CSS #HTML",
    siteLink: "https://monique-projeto-calculadora-medias.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Projeto_Calculadora_Medias.git",
    },
    {
    title: "Lista de tarefas",
    imgSrc: "/img/form.png",
    alt: "formulário",
    tags: "#JS #CSS #HTML #Jquery",
    siteLink: "https://lista-de-tarefas-jquery-opal.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Lista-de-tarefas_jquery.git",
    },
];

const Projects = () => {
    return (
    <div className={styles.container}>
        <h2 className="text-center my-4">Projetos</h2>
        <div className="row justify-content-center">
        {projetosData.map((projeto, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className={`card ${styles.card}`}>
                <div className="card-header text-bg-dark">{projeto.title}</div>
                <img
                className={`card-img-top ${styles.logo}`}
                src={projeto.imgSrc}
                alt={projeto.alt || "Imagem do Projeto"}
                />
                <div className={`card-body text-bg-dark p-1 ${styles.cardBody}`}>
                <p>{projeto.tags}</p>
                </div>
                <div className="d-flex justify-content-between p-2 text-bg-dark">
                    <a href={projeto.siteLink} target="_blank" rel="noopener noreferrer"
                        className="btn btn-primary" > Site
                    </a>
                    <a href={projeto.githubLink} target="_blank" rel="noopener noreferrer"
                        className="btn btn-dark" > GitHub
                    </a>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Projects;
