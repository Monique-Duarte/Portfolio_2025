import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.profile}>
                        <div className={styles.profile__info}>
                            <div className={styles.profile__image}>
                                <img src="/img/Group_1.png" alt="Minha foto" />
                            </div>
                            <div className={styles.id}>
                                <h1>Monique Alves Duarte</h1>
                                <p>Graduanda em Engenharia de Software</p>
                                <p>Desenvolvedora Full Stack</p>
                                <p>Dev | React | JavaScript | TypeScript | HTML | CSS | SQL | Node.js | Sistema Web </p>
                                <div className={`${styles.container} ${styles.qualis} ${styles.qualisImg} `}>
                                    {/* <img alt="Python" height="30" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" /> */}
                                    <img alt="React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                                    <img alt="JavaScript"  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                                    <img alt="TypeScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
                                    <img alt="HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                                    <img alt="CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                                    <img alt="Django" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                                    <img alt="SQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                                    <img alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                                </div>
                            </div>
                            <div className={styles.contact}>
                                <div>
                                    <a href="https://www.instagram.com/duartt.monique/" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-instagram fs-3"></i>
                                    </a>
                                </div>
                                <div>
                                    <a href="mailto:moniquead95@gmail.com">
                                        <i className="bi bi-envelope fs-3"></i>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/moniquead" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-linkedin fs-3"></i>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/Monique-Duarte" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github fs-3"></i>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://wa.me/19998000818" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-whatsapp fs-3"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
