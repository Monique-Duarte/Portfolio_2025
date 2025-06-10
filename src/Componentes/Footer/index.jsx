import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-center text-black w-full bg-[#fff] relative z-20 p-6 shadow-inner">
      {t('footer')}
    </footer>
  );
};

export default Footer;
