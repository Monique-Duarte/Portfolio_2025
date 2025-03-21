import React from 'react';
import SkillsSection from './SkillsSection';  // Importando SkillsSection do arquivo correto
import { heartImage } from '/public/HEART.png'; // Importando a imagem

const SoftSkills = () => {
  return (
    <SkillsSection
      titulo="Soft Skills"
      icone="bi bi-heart-fill"
      imagem={heartImage} // Passando a imagem
    />
  );
};

export default SoftSkills;
