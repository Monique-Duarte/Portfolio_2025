import React from 'react';
import SkillsSection from '../SkillsSection';
import brainImage from '/public/BRAIN.png'; // Importando a imagem

const HardSkills = () => {
  return (
    <SkillsSection
      titulo="Hard Skills"
      icone="bi bi-puzzle-fill"
      imagem={brainImage} // Passando a imagem
    />
  );
};

export default HardSkills;
