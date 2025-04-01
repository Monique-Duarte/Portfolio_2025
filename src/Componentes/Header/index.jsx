import React from 'react';
import Id from '../Id';
import Contact from '../Contact';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation(); // Adicione esta linha para obter a função t

    return (
        <>
            <h1
                style={{
                    textAlign: 'center',
                    backgroundColor: '#000916',
                    color: 'white',
                    margin: 0,
                    boxShadow: 'inset 0 0 0 3px #002D49',
                    padding: '5px'
                }}
            >
                {t('header')}
            </h1>
            <Id />
            <Contact />
        </>
    );
};

export default Header;
