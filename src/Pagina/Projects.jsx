import React, { useState } from "react";
import Cards from "../Componentes/Cards/Cards"; // Certifique-se de que Cards esteja importado corretamente
import { useTranslation } from "react-i18next";
import Menu from "../Componentes/Menu";

export default function Projects() {
  const { t } = useTranslation(); // Adiciona tradução, se necessário
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o valor de pesquisa

  // Filtra os projetos com base no ID
  const filteredProjects = Cards.filter((projeto) =>
    projeto.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#001D4A]">
      <Menu />
      <div className="mx-auto w-full max-w-[80vw] justify-center mb-6 bg-[#001D4A]">
        <h2 className="mt-5 p-1 text-center">{t("projetos")}</h2>

        {/* Campo de busca */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar por tecnologia"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-md"
          />
        </div>

        {/* Lista de projetos filtrados */}
        <div className="flex flex-wrap justify-center">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-white">Nenhum projeto encontrado</p>
          ) : (
            filteredProjects.map((projeto, index) => (
              <div className="w-[100%] md:w-[20%] p-2" key={index}>
                <div className="text-center fs-4 rounded-t-lg">{projeto.title}</div>
                <img
                  className="bg-white mx-auto rounded-t-lg img_card"
                  src={projeto.imgSrc}
                  alt={projeto.alt || "Imagem do Projeto"}
                />
                <div id="links" className="flex justify-between p-0 mt-1 w-[80%] mx-auto">
                  <a
                    href={projeto.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-800 py-1 px-3 rounded text-white ml-4 md:ml-0"
                  >
                    Site
                  </a>
                  <a
                    href={projeto.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-800 py-1 no-underline px-3 rounded text-white mr-4 md:mr-0"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
