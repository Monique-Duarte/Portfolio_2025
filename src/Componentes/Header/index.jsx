import React from 'react';
import Id from '../Id';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation(); // Adicione esta linha para obter a função t

  return (
    <>
      <h1 className='font-winky text-center shadow-[inset_0_0_1px_0_#fff] p-1 m-auto bg-[#121113]'>
        {t('header')}
      </h1>
    </>
  );
};

export default Header;
