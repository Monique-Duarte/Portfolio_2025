import React from 'react';

const SobreMim = () => {
  return (
    <div id="SobreMim" className="flex items-center justify-center text-justify py-12 shadow-inner shadow-[#002D49] px-4 sm:px-12">
      <div className="flex text-white flex-col items-center justify-center w-full sm:max-w-[80%] lg:max-w-[70%] text-center text-base sm:text-xl">
        <h1 className="text-3xl sm:text-4xl mb-5 relative overflow-y-hidden">Sobre Mim
          <span className="absolute bottom-0 left-0 w-0 h-[4px] bg-[#0074ae]"></span>
        </h1>
        <h3 className="text-xl sm:text-2xl">🚀 Quem sou eu?</h3>
        <p className="sm:text-base">
          Me chamo <b>Monique Alves Duarte</b>, tenho <b>29 anos</b> e sou estudante de <b>Engenharia de Software</b>.
          Além disso, sou <b>Zootecnista</b>, formada pela <b>UFPel</b> e <b>Mestre</b> pela <b>USP</b>. Atualmente, busco uma oportunidade para atuar
          como <b>desenvolvedora júnior</b>, me apaixonei por tecnologia e estou sempre motivada pela curiosidade e pela busca constante
          por aprendizado, especialmente nas áreas de <b>desenvolvimento, automação, IA e inovação</b>. Sou o tipo de pessoa que, se não
          sabe algo, <b>busca aprender</b> ou <b>resolver o problema</b>, sempre <b>disposta a agregar valor</b> onde estou.
        </p>
        <br />
        <h3 className="text-xl sm:text-2xl">O que faço hoje?</h3>
        <p className="sm:text-base">
          Atualmente, faço estágio na área de <b>suporte e front-end</b>, atuando junto à <b>equipe de suporte e engenharia</b>
          na análise e qualidade de projetos. Meu foco está na <b>busca por soluções automatizadas, aprendizado com React e testes</b> que otimizem processos e melhorem
          a eficiência do trabalho, tanto para mim quanto para meus colegas.
        </p>
        <br />
        <h3 className="text-xl sm:text-2xl">🎯 Quais são meus objetivos?</h3>
        <p className="sm:text-base">
          Estou sempre em busca de <b>novos desafios e oportunidades</b> para aplicar e expandir meus conhecimentos. Meu principal
          objetivo no momento é <b>desenvolver experiência e crescer profissionalmente na área de programação</b>, ampliando minhas
          habilidades e consolidando minha trajetória na tecnologia.
        </p>
      </div>
    </div>
  );
};

export default SobreMim;
