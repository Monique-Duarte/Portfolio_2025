import React from "react";
import styles from "./Projects.module.css";
import Cards from "../Cards/Cards"

const Projects = () => {
    return (
    <div className={styles.container}>
        <h2 className="text-center my-4">Projetos</h2>
        <div className="row flex flex-wrap">
        {Cards.map((projeto, index) => (
            <div className="col-md-2 col-sm-6 mb-4" key={index}>
            <div className={`card ${styles.card}`}>
                <div className="card-header text-bg-dark">{projeto.title}</div>
                <img
                className={`card-img-top ${styles.logo}`}
                src={projeto.imgSrc}
                alt={projeto.alt || "image Project"}
                />
                <div className={`card-body text-bg-dark p-0 ${styles.cardBody}`}>
                <p className="small">{projeto.tags}</p>
                </div>
                <div className="d-flex justify-content-between p-1 text-bg-dark">
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
