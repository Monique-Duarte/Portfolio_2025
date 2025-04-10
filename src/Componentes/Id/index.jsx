import React from 'react';
import { useTranslation } from "react-i18next";
import Contact from '../Contact';
import './id.css'

const Id = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t
  return (
    <div className="bg-[#8F87F1]">
      <div id='Id' className="bg-[#8F87F1] mx-2 md:mx-20 md:h-[70vh] block center text-balance md:flex">
        <div id="imgFundo" className="items-center relative md:w-[50vw] md:my-auto">
          <img
            id='imgId'
            className="md:my-auto md:mx-auto md:w-1/2 w-60 mx-auto shadow-none p-2"
            src="/img/monique1.png"
            alt="foto perfil"
          />
        </div>
        <div className='text-center w-[100vw] md:my-auto md:w-[80vw]'>
          <h1 className="text-lg my-2 overflow-hidden">Monique Duarte</h1>
          <p className="text-balance mx-10 text-lg mb-1 md:text-2xl">{t('id.graduacao')}</p>
          <p className="text-lg  mx-10 mb-1 md:text-2xl ">{t('id.area')}</p>
          <p className="text-lg  mx-10 mb-1 md:text-2xl ">{t('id.Estudante')}</p>
          <p className="text-lg mx-10 mb-1 md:text-l "> {t('id.tags')} </p>
          <div className='flex my-0 items-center justify-center md:flex'><Contact /> </div>
        </div>
      </div>
    </div>
  );
};

export default Id;
