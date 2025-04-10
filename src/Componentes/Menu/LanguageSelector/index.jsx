// src/components/Menu/LanguageSelector.js
import React from 'react';

const LanguageSelector = ({ languages, menuVisible, toggleMenu, handleLanguageChange }) => {
  return (
    <div>
      <span className="cursor-pointer" onClick={toggleMenu}>
      </span>
      <div
        className={`absolute mt-2 w-[120px] h-content ${menuVisible ? 'block' : 'hidden'}`}
      >
        {languages.map((language) => (
          <div
            key={language.value}
            className="flex items-center mb-2 cursor-pointer h-full"
            onClick={() => handleLanguageChange(language.value)}
          >
            <img width={30} src={language.img} alt={language.value} className="w-6 mr-2 rounded-none shadow-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;