import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import brImg from '../../../public/img/assets/br.svg';
import enImg from '../../../public/img/assets/en.svg';
import esImg from '../../../public/img/assets/es.svg';
import frImg from '../../../public/img/assets/fr.svg';
import itImg from '../../../public/img/assets/it.svg';
import deImg from '../../../public/img/assets/de.svg';

const languages = [
  { value: 'pt', img: brImg, label: 'PT' },
  { value: 'en', img: enImg, label: 'US' },
  { value: 'es', img: esImg, label: 'ES' },
  { value: 'fr', img: frImg, label: 'FR' },
  { value: 'it', img: itImg, label: 'IT' },
  { value: 'de', img: deImg, label: 'DU' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(lang => lang.value === i18n.language) || languages[0];

  const changeLanguage = (lang) => {
    if (lang !== currentLang.value) {
      i18n.changeLanguage(lang);
      window.history.pushState(null, '', `/${lang}`);
    }
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="inline-flex items-center space-x-2"
      ref={dropdownRef}
      style={{ minWidth: '100px' }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Idioma atual: ${currentLang.label}`}
        className="flex items-center focus:outline-none"
      >
        <img
          src={currentLang.img}
          alt={currentLang.label}
          className="w-6 h-6 rounded cursor-pointer"
        />
      </button>

      {open && languages
        .filter(lang => lang.value !== currentLang.value)
        .map(lang => (
          <button
            key={lang.value}
            onClick={() => changeLanguage(lang.value)}
            className="focus:outline-none"
            aria-label={`Mudar para ${lang.label}`}
          >
            <img
              src={lang.img}
              alt={lang.label}
              className="w-6 h-6 rounded cursor-pointer hover:ring-2 hover:ring-blue-500 transition m-1"
            />
          </button>
        ))}
    </div>
  );
};

export default LanguageSwitcher;
