import React from 'react';
import { useTranslation } from "react-i18next";

const Id = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t
  return (
    <div className="p-1 center mx-auto">
      <div className=" flex items-center justify-center text-white mx-auto">
        <img
          width={200}
          className="mx-5 content-center"  // Centraliza a imagem
          src="/img/Group_1.png"
          alt="Minha foto"
        />
        <div className='text-center mx-5'>
          <h1 className="text-lg mb-0 md:text-2xl overflow-hidden">Monique Duarte</h1>
          <p className="text-2xl mb-0">{t('id.graduacao')}</p>
          <p className="text-2x1 mb-0">{t('id.area')}</p>
          <p className="text-xs">
          {t('id.tags')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Id;
