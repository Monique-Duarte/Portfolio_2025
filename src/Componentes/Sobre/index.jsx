import React from 'react';
import styles from './sobre.module.css';

const SobreMim = () => {
  return (
    <div id="SobreMim" className={styles.container}>
      <div className={styles.texto}>
        <h1>Sobre Mim</h1>
        <h3 className="s">🚀 Quem sou eu?</h3>
        <p>
          Me chamo <b>Monique Alves Duarte</b>, tenho <b>29 anos</b> e sou estudante de <b>Engenharia de Software</b> 🖥️.
          Além disso, sou <b>Zootecnista</b> 🎓, formado pela <b>UFPel</b> e <b>Mestre</b> 👩🏻‍🎓, pela <b>USP</b>. Atualmente, busco uma oportunidade para atuar
          como <b>desenvolvedora júnior</b>, me apaixonei por tecnologia e estou sempre motivada pela curiosidade e pela busca constante
          por aprendizado 📚, especialmente nas áreas de <b>desenvolvimento, automação, IA e inovação</b>. Sou o tipo de pessoa que, se não
          sabe algo, <b>busca aprender</b> ou <b>resolver o problema</b>, sempre <b>disposto a agregar valor</b> onde estou.
        </p>
        <br />
        <h3 className="o">⚡ O que faço hoje?</h3>
        <p>
          Atualmente, faço estággio na área de <b>suporte e front-end</b> ⚙️, atuando junto à <b>equipe de suporte e engenharia</b> 👷‍♂️
          na análise e qualidade de projetos. Meu foco está na <b>busca por soluções automatizadas, aprendizado com React e testes</b> 💡 que otimizem processos e melhorem
          a eficiência do trabalho, tanto para mim quanto para meus colegas.
        </p>
        <br />
        <h3 className="q">🎯 Quais são meus objetivos?</h3>
        <p>
          Estou sempre em busca de <b>novos desafios e oportunidades</b> 🚀 para aplicar e expandir meus conhecimentos. Meu principal
          objetivo no momento é <b>desenvolver experiência e crescer profissionalmente na área de programação</b> 💻, ampliando minhas
          habilidades e consolidando minha trajetória na tecnologia.
        </p>
      </div>
    </div>
  );
};

export default SobreMim;