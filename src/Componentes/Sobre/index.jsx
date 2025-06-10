import { useTranslation } from "react-i18next";
import CardContainer from "../Flip/index";
import Conhecimentos from "./conhecimentos";

const SobreMim = () => {
  const { t } = useTranslation();

  return (
    <section id="SobreMim" className="relative w-full bg-[#fff] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-animated opacity-10"></div>

      <div className="relative z-10 w-[90vw] lg:w-[80vw] mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t("sobre.sobreMim")}</h2>
          <div className="flex justify-center items-center">
            <CardContainer />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-16 overflow-y-hidden">
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:scale-[1.02] transition-all duration-300 over">
            <h3 className="text-sm md:text-xl font-semibold mb-2 ">{t("sobre.sobre")}</h3>
            <p className="text-gray-700 text-justify">{t("sobre.quemEuSou")}</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-sm md:text-xl font-semibold mb-2">{t("sobre.oQueFaco")}</h3>
            <p className="text-gray-700 text-justify">{t("sobre.atualmente")}</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-sm md:text-xl font-semibold mb-2">{t("sobre.quaisObj")}</h3>
            <p className="text-gray-700 text-justify">{t("sobre.objetivos")}</p>
          </div>
        </div>
        <Conhecimentos />
      </div>
    </section>
  );
};

export default SobreMim;
