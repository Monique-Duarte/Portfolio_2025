import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t
  return (
    <footer className="text-center w-full bg-[#006992]">
      {t('footer')}
    </footer>
  );
};

export default Footer;

