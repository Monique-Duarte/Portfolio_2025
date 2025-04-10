import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';
import brImg from '../../../public/img/assets/br.svg';
import enImg from '../../../public/img/assets/en.svg';
import esImg from '../../../public/img/assets/es.svg';
import frImg from '../../../public/img/assets/fr.svg';
import itImg from '../../../public/img/assets/it.svg';
import deImg from '../../../public/img/assets/de.svg';
import LanguageSelector from './LanguageSelector/';
import MenuItem from './Menu-item/index';

const Menu = () => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setIsExpanded(prev => !prev);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    window.history.pushState(null, '', `/${newLanguage}`);
    setMenuVisible(false);
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
    <header>
      <nav className="fixed ml-2 top-2/3 transform -translate-y-1/2 p-0 h-full z-50">
        <i 
          className={`bi bi-list block text-white p-0 fs-3 cursor-pointer m-0 ${isExpanded ? 'text-primary' : ''}`} 
          onClick={toggleMenu}
        ></i>
        
        <ul 
          className={`p-0 transition-opacity duration-300 ease-in-out ${isExpanded ? 'opacity-100 block' : 'opacity-0 hidden'}`}
        >
          <MenuItem iconClass="bi bi-house fs-4 p-0" link="/#Id" />
          <MenuItem iconClass="bi bi-person fs-4 p-0" link="/#SobreMim" />
          <MenuItem iconClass="bi bi-book fs-4 p-0" link="/#Conhecimentos" />
          <MenuItem iconClass="bi bi-code-slash fs-4 p-0" link="/#Projetos" />
          <MenuItem iconClass="bi bi-translate fs-4 p-0" onClick={() => setMenuVisible(!menuVisible)} />
          
          <LanguageSelector
            languages={languages}
            menuVisible={menuVisible}
            toggleMenu={() => setMenuVisible(!menuVisible)}
            handleLanguageChange={handleLanguageChange}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
