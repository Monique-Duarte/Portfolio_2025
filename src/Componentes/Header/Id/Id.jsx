import styles from '../Header.module.css';
// import BaixarCurriculo from "../../Blob/blob";

const Id = () => {
  return (
    <div className={styles.profile__info}>
      <img className={styles.profile__image} src="/img/Group_1.png" alt="Minha foto" />
      <div className={styles.id}>
        <h1>Monique Alves Duarte</h1>
        <p>Graduanda em Engenharia de Software </p>
        <p>Desenvolvedora Full Stack </p>
        <p>Dev | React | JavaScript | TypeScript | HTML | CSS | SQL | Node.js | Sistema Web </p>
        {/* <h3 className='p-2' >
          <BaixarCurriculo />
        </h3> */}
      </div>
    </div>
  )
};

export default Id;