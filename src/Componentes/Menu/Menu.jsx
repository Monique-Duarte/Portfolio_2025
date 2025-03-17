import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Certifique-se de ter o Bootstrap Icons importado
import styles from './Menu.module.css'; // Assumindo que você tenha um CSS Module

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar a expansão do menu

  const toggleMenu = () => {
    setIsExpanded(!isExpanded); // Alterna o estado de expansão do menu
  };

  return (
    <nav className={`${styles.menuLateral} ${isExpanded ? styles.menuLateralExpandir : ''}`}>
      <div className={styles.expansivel}>
        <i className="bi bi-list" id="expan" onClick={toggleMenu}></i>
      </div>

      {/* Lista de Itens do Menu */}
      <ul className={styles.menuLateralUl}>
        <li className={`${styles.menuLateralUlLi}`}>
          <a href="#">
            <span className={styles.icon}><i className="bi bi-house"></i></span>
            <span className={styles.txtLink}></span>
          </a>
        </li>
        <li className={styles.menuLateralUlLi}>
          <a href="#SobreMim">
            <span className={styles.icon}><i className="bi bi-person"></i></span>
            <span className={styles.txtLink}></span>
          </a>
        </li>
        <li className={styles.menuLateralUlLi}>
          <a href="#Habilidades">
            <span className={styles.icon}><i className="bi bi-tools"></i></span>
            <span className={styles.txtLink}></span>
          </a>
        </li>
        <li className={styles.menuLateralUlLi}>
          <a href="#Conhecimentos">
            <span className={styles.icon}><i className="bi bi-book"></i></span>
            <span className={styles.txtLink}></span>
          </a>
        </li>
        <li className={styles.menuLateralUlLi}>
          <a href="#Projetos">
            <span className={styles.icon}><i className="bi bi-code-slash"></i></span>
            <span className={styles.txtLink}></span>
          </a>
        </li>
        <li className={styles.menuLateralUlLi}>
          <a href="#Contatos">
            <span className={styles.icon}><i className="bi bi-person-vcard"></i></span>
            <span className={styles.txtLink}></span>
          </a>
        </li>
        <li className={styles.menuLateralUlLi}>
          <a href="#">
            <span className={styles.icon}><i className="bi bi-translate"></i></span>
            <span className={styles.txtLink}></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
