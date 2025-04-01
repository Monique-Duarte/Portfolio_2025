import React from 'react';
import { useTranslation } from "react-i18next";


const SobreMim = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t
  return (
    <div id="SobreMim" className="flex mx-auto justify-center text-justify py-12 shadow-inner shadow-[#002D49] px-4 max-w-[80vw]">
      <div className="flex text-white flex-col items-center justify-center w-full sm:max-w-[80%] lg:max-w-[70%] text-center text-base sm:text-xl">
        <h1 className="text-3xl sm:text-4xl mb-5 relative overflow-y-hidden">Sobre Mim
          <span className="absolute bottom-0 left-0 w-0 h-[4px] bg-[#0074ae]"></span>
        </h1>
        <h3 className="my-0 p-0 overflow-y-hidden">🚀 {t('sobre.sobre')}</h3>
        <p className="sm:text-base">{t('sobre.quemEuSou')}
        </p>
        <br />
        <h3 className="my-0 p-0 overflow-y-hidden">{t('sobre.oQueFaco')}</h3>
        <p className="sm:text-base">
        {t('sobre.atualmente')}
        </p>
        <br />
        <h3 className="my-0 p-0 overflow-y-hidden">🎯 {t('sobre.quaisObj')}</h3>
        <p className="sm:text-base">
        {t('sobre.objetivos')}
        </p>
      </div>
    </div>
  );
};

export default SobreMim;
