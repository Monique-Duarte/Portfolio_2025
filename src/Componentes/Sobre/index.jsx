import React from 'react';
import { useTranslation } from "react-i18next";
import CardContainer from '../Flip/index';

const SobreMim = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t
  return (
    <div className="bg-[#121113]">
    <div id="SobreMim" className="flex mx-auto justify-center text-balance py-12 px-4 max-w-[80vw] font-winky bg-[#D90368]">
      <div className="flex flex-col items-center justify-center w-full sm:max-w-[80%] lg:max-w-[70%] text-center text-base sm:text-xl">
        <h1 className="text-2xl mb-5 relative overflow-y-hidden">{t('sobre.sobreMim')}
          <div className="flex justify-center items-center h-[100%] w-[100%]">
            <CardContainer />
          </div>
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
    </div>
  );
};

export default SobreMim;
