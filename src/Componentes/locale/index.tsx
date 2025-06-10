import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Translate = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const pathLanguage = window.location.pathname.split("/")[1];
    if (pathLanguage && pathLanguage !== currentLanguage) {
      i18n.changeLanguage(pathLanguage);
      setCurrentLanguage(pathLanguage);
    }
  }, [currentLanguage, i18n]);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    window.history.pushState(null, "", `/${newLanguage}`);
  };

  return (
    <Router>
        <Routes>
          <Route path="/en" element={<p>{t('en')}</p>} />
          <Route path="/pt" element={<p>{t('pt')}</p>} />
          <Route path="/es" element={<p>{t('es')}</p>} />
          <Route path="/fr" element={<p>{t('fr')}</p>} />
          <Route path="/it" element={<p>{t('it')}</p>} />
          <Route path="/de" element={<p>{t('de')}</p>} />
          <Route path="*" element={<Navigate to={`/${currentLanguage}`} />} />
        </Routes>
    </Router>
  );
};

export default Translate;
