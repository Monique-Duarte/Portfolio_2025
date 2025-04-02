// import React from 'react';
// import styles from '../Habilidades.module.css';
// import '../Flip/FlipCard.css'; 
// import FlipCard from '../Flip'; 
// import dados from './Dados'; 

// const SkillsSection = ({ titulo, icone, imagem }) => {

//   const { soft, hard } = dados;

//   if (!soft || !hard) {
//     return <div>Erro: Dados não encontrados!</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.titulo}>
//         <h1 className={styles.texto}>{titulo}</h1> 
//       </div>
//       <div className={styles.soft}>
//         <div className={styles.image}>
//           <img src={imagem} alt={`Imagem de ${titulo}`} />
//         </div>
//         <div className={styles.section}>
//           <div className={styles.texto}>
//             <h1><i className={icone}></i> {titulo}</h1> 
//           </div>
//           <div className={styles.box}>

//             <div className="flip-cards-container">
//               {soft.map((item, index) => (
//                 <FlipCard
//                   key={index}  
//                   nome={item.nome}
//                   descricao={item.descricao}
//                 />
//               ))}
//             </div>
//             {/* Hard Skills */}
//             <div className="flip-cards-container">
//               {hard.map((item, index) => (
//                 <FlipCard
//                   key={index}
//                   nome={item.nome}
//                   descricao={item.descricao}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;
