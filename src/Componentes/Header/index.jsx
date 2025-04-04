import React from 'react';
import Id from '../Id';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t

  return (
    <>
      <h1 className='font-winky text-center shadow-[inset_0_0_0_3px_#002D49] p-1 m-auto bg-[#006992]'>
        {t('header')}
      </h1>
    </>
  );
};

export default Header;
