import React from 'react';
import { useTranslation } from "react-i18next";
import Contact from '../Contact';
// import './id.css'

const Id = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t
  return (
    <div id='id' className="bg-[#8F87F1]">
      <div className="md:h-[70vh] w-[80vw] mx-auto block center text-balance font-roboto md:flex bg-[#8F87F1]">
        <div id="imgFundo" className="items-center justify-center mx-25 md:my-20 h-auto relative md:w-[50vw]">
          <img
            className="md:w-[400px] shadow-none" 
            src="/img/monique1.png"
            alt="foto perfil"
          />
        </div>
        <div className='text-center md:text-center md:my-auto md:w-[50vw]'>
          <h1 className="text-lg my-2 overflow-hidden">Monique Duarte</h1>
          <p className="text-balance mx-10 text-lg mb-1 md:text-2xl">{t('id.graduacao')}</p>
          <p className="text-lg  mx-10 mb-1 md:text-2xl ">{t('id.area')}</p>
          <p className="text-lg mx-10 mb-1 md:text-l "> {t('id.tags')} </p>
          <div className='flex my-0 items-center justify-center md:flex'><Contact /> </div>
        </div>
      </div>
    </div>
  );
};

export default Id;
