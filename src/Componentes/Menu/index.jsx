import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Certifique-se de ter o Bootstrap Icons importado
import { useTranslation } from 'react-i18next'; // Importando o hook de tradução
import brImg from '../../../public/img/assets/br.svg';
import enImg from '../../../public/img/assets/en.svg';
import esImg from '../../../public/img/assets/es.svg';
import frImg from '../../../public/img/assets/fr.svg';
import itImg from '../../../public/img/assets/it.svg';
import deImg from '../../../public/img/assets/de.svg';

const Menu = () => {
  const { t, i18n } = useTranslation(); // Hook para tradução
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar a expansão do menu
  const [menuVisible, setMenuVisible] = useState(false); // Controle de visibilidade do menu de idiomas

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev); // Alterna o estado de visibilidade
  };

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage); // Troca o idioma
    window.history.pushState(null, "", `/${newLanguage}`); // Atualiza a URL
    setMenuVisible(false); // Fecha o menu de idiomas após selecionar o idioma
  };

  const languages = [
    { value: 'pt', img: brImg },
    { value: 'en', img: enImg },
    { value: 'es', img: esImg },
    { value: 'fr', img: frImg },
    { value: 'it', img: itImg },
    { value: 'de', img: deImg },
  ];

  return (
    <nav className="absolute top-0 mt-5 h-full fs-3 mx-1 p-0">
      <div className="p-2">
        <i className="bi bi-list text-white text-2xl cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}></i>
      </div>
      <ul className="p-0">
        <li className="text-white text-center py-2">
          <a href="#">
            <span className="block text-2xl"><i className="bi bi-house text-white"></i></span>
          </a>
        </li>
        <li className="text-white text-center py-2">
          <a href="#SobreMim">
            <span className="block text-2xl"><i className="bi bi-person text-white"></i></span>
          </a>
        </li>
        <li className="text-white text-center py-2">
          <a href="#Habilidades">
            <span className="block text-2xl"><i className="bi bi-tools text-white"></i></span>
          </a>
        </li>
        <li className="text-white text-center py-2">
          <a href="#Conhecimentos">
            <span className="block text-2xl"><i className="bi bi-book text-white"></i></span>
          </a>
        </li>
        <li className="text-white text-center py-2">
          <a href="#Projetos">
            <span className="block text-2xl"><i className="bi bi-code-slash text-white"></i></span>
          </a>
        </li>
        <li className="text-white text-center py-2">
          <a href="#Contatos">
            <span className="block text-2xl"><i className="bi bi-person-vcard text-white"></i></span>
          </a>
        </li>
        <li className="text-white text-center py-2">
          <span className="cursor-pointer" onClick={toggleMenu}>
            <i className="bi bi-translate text-2xl"></i>
          </span>
          <div
            className={`absolute mt-2 bg-white shadow-lg rounded-md w-[120px] z-50 ${menuVisible ? 'block' : 'hidden'}`}
            style={{ display: menuVisible ? 'block' : 'none' }} // Forçando a exibição ao clicar
          >
            {languages.map((language) => (
              <div
                key={language.value}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLanguageChange(language.value)}
              >
                <img width={30} src={language.img} alt={language.value} className="w-5 h-5 mr-2" />
              </div>
            ))}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
