import { useTranslation } from "react-i18next";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiFirebase, SiI18Next } from "react-icons/si";

export default function Conhecimentos() {
  const { t } = useTranslation();

  const techs = [
    { name: "React", icon: <FaReact size={32} color="#61dafb" />, level: t("advanced") },
    { name: "JavaScript", icon: <FaJsSquare size={32} color="#f7df1e" />, level: t("intermediate") },
    { name: "TypeScript", icon: <SiTypescript size={32} color="#3178c6" />, level: t("intermediate") },
    { name: "HTML", icon: <FaHtml5 size={32} color="#e34c26" />, level: t("advanced") },
    { name: "CSS", icon: <FaCss3Alt size={32} color="#1572b6" />, level: t("advanced") },
    { name: "Node.js", icon: <FaNodeJs size={32} color="#3c873a" />, level: t("intermediate") },
    { name: "Websystem", icon: <SiFirebase size={32} color="#ffa000" />, level: t("intermediate") },
    { name: "i18n", icon: <SiI18Next size={32} color="#0066cc" />, level: t("intermediate") },
  ];

  return (
    <section
      id="Conhecimentos"
      className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-16">{t("meusConhecimentos")}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-full mt-10 overflow-y-hidden">
        {techs.map(({ name, icon, level }) => (
          <div
            key={name}
            className="flex flex-col items-center bg-white/20 rounded-lg p-1 shadow-md hover:scale-105 transition-transform cursor-default"
          >
            <div className="mb-3">{icon}</div>
            <h4 className="text-sm md:text-xl font-semibold">{name}</h4>
            <p className="text-white/80">{level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
