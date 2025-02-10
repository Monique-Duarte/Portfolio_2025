import React from "react";
import styles from "./Projects.module.css";

const projetosData = [
    {
    title: "GitHub - Portfólio",
    imgSrc: "/img/fundo_q.gif",
    alt: "logo de gato",
    tags: "#React #JS #CSS #HTML",
    siteLink: "https://portifolio-six-wheat-87.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Portifolio_2025",
    },
    {
    title: "Site - Hema Toma",
    imgSrc: "/img/game-console-6603120_1280.jpg",
    alt: "controle de video game",
    tags: "#JS #CSS #HTML #Bootstrap",
    siteLink: "https://game-hema-toma.vercel.app/",
    githubLink: "https://github.com/Monique-Duarte/Game-Hema-Toma.git",
    },

];

const Projects = () => {
    return (
    <div className={styles.container}>
        <h2 className="text-center my-4">Projetos</h2>
        <div className="row">
        {projetosData.map((projeto, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className={`card ${styles.card}`}>
                <div className="card-header text-bg-dark">{projeto.title}</div>
                <img
                className={`card-img-top ${styles.logo}`}
                src={projeto.imgSrc}
                alt={projeto.alt || "Imagem do Projeto"}
                />
                <div className={`card-body text-bg-dark ${styles.cardBody}`}>
                <p>{projeto.tags}</p>
                </div>
                <div className="d-flex justify-content-between p-2">
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
