import React from 'react';
import { useTranslation } from "react-i18next";
import Contact from '../Contact';

const Id = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t
  return (
    <div className="md:h-[80vh] md:w-[80vw] block center font-roboto md:flex">
      <div className="items-center justify-center mx-25 md:my-20 h-auto">
        <img
          className="md:mx-10 content-center md:w-2/3"  // Centraliza a imagem
          src="/img/Group_1.png"
          alt="Minha foto"
        />
      </div>
        <div className='text-center md:text-center md:my-auto'>
          <h1 className="text-lg my-2 md:text-2xl overflow-hidden">Monique Duarte</h1>
          <p className="text-balance mx-10 text-lg mb-1 md:text-2xl ">{t('id.graduacao')}</p>
          <p className="text-lg  mx-10 mb-1 md:text-2xl ">{t('id.area')}</p>
          <p className="text-lg mx-10 mb-1 md:text-l "> {t('id.tags')} </p>
        <div className='flex my-0 items-center justify-center md:flex'><Contact  /> </div>
        </div>
    </div>
  );
};

export default Id;
