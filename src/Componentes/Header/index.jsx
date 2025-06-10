import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Menu from '../Menu/index';
import LanguageSwitcher from '../Menu/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation(); 

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center p-2">
        <LanguageSwitcher />
        <Menu />
      </div>

      <div className="pt-2 px-2 flex justify-between items-center">
        <h4 className="sm:w-[80vw] md:text-4xl sm:mx-auto font-winky text-gray-900 font-bold overflow-y-hidden justify-between">
          {t('header')}
        </h4>
      </div>
    </header>
  );
};

export default Header;
