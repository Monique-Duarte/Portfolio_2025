import React from 'react';
import styles from '../Habilidades.module.css';
import '../Flip/FlipCard.css'; // Importando o FlipCard corretamente
import FlipCard from '../Flip'; // Importando o FlipCard corretamente
import dados from './Dados'; // Importando os dados consolidados

const SkillsSection = ({ titulo, icone, imagem }) => {
  // Garantir que os dados de soft e hard existam antes de renderizar
  const { soft, hard } = dados;

  if (!soft || !hard) {
    return <div>Erro: Dados não encontrados!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <h1 className={styles.texto}>{titulo}</h1> {/* Usando a prop titulo dinamicamente */}
      </div>
      <div className={styles.soft}>
        <div className={styles.image}>
          <img src={imagem} alt={`Imagem de ${titulo}`} />
        </div>
        <div className={styles.section}>
          <div className={styles.texto}>
            <h1><i className={icone}></i> {titulo}</h1> {/* Título dinâmico */}
          </div>
          <div className={styles.box}>
            {/* Soft Skills */}
            <div className="flip-cards-container">
              {soft.map((item, index) => (
                <FlipCard
                  key={index}  // Usando o índice como chave única
                  nome={item.nome}
                  descricao={item.descricao}
                />
              ))}
            </div>
            {/* Hard Skills */}
            <div className="flip-cards-container">
              {hard.map((item, index) => (
                <FlipCard
                  key={index}  // Usando o índice como chave única
                  nome={item.nome}
                  descricao={item.descricao}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
