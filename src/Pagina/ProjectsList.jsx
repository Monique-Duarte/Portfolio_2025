import { useMemo } from "react";
import Cards from "../Componentes/Cards/Cards";
import { useTranslation } from "react-i18next";

export default function ProjectsList({ searchTerm, setSearchTerm }) {
  const { t } = useTranslation();
  const showSuggestions = !!searchTerm;

  const allTags = useMemo(() => {
    const tagsSet = new Set();
    Cards.forEach((projeto) => {
      if (projeto.tags) {
        projeto.tags.split(",").forEach((tag) => tagsSet.add(tag.trim()));
      }
    });
    return Array.from(tagsSet).sort();
  }, []);

  const filteredProjects = Cards.filter((projeto) =>
    projeto.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSuggestions = allTags.filter((tag) =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSuggestionClick = (tag) => {
    setSearchTerm(tag);
  };

  return (
    <section
      id="ProjetosLista"
      className="bg-static-list relative w-full bg-[#fff] overflow-hidden min-h-screen flex flex-col mt-24"
    >
      <div className="mx-auto w-full max-w-[80vw] py-8 flex-grow">
        <h2 className="text-4xl font-bold text-center text-white drop-shadow mb-6">
          {t("projetos")}
        </h2>

        <div className="mb-6 max-w-md mx-auto relative">
          <input
            type="text"
            placeholder={t("buscarTecnologia") || "Buscar por tecnologia"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-xl backdrop-blur-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white transition"
          />

          {showSuggestions && searchTerm && (
            <ul className="absolute left-0 right-0 mt-1 bg-white/90 rounded-md shadow-md z-10 max-h-48 overflow-y-auto">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((tag, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(tag)}
                    className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 cursor-pointer"
                  >
                    {tag}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-sm text-gray-500">
                  Nenhuma sugestão
                </li>
              )}
            </ul>
          )}
        </div>

        {/* Lista de projetos filtrados */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-white text-lg w-full">
              Nenhum projeto encontrado
            </p>
          ) : (
            filteredProjects.map((projeto, index) => (
              <div
                key={index}
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] p-2"
              >
                <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-4 shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col h-full">
                  <img
                    className="w-full h-40 object-cover rounded-md mb-4 border border-white/10 shadow"
                    src={projeto.imgSrc}
                    alt={projeto.alt || "Imagem do Projeto"}
                  />
                  <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2 break-words flex-grow">
                    {projeto.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm mt-auto">
                    <a
                      href={projeto.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white transition underline-offset-2 hover:underline"
                    >
                      Site
                    </a>
                    <a
                      href={projeto.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white transition underline-offset-2 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}