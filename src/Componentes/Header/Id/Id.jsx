import styles from '../Header.module.css';

const Id = () => {
  return (
    <div className={styles.profile__info}>
      <img className={styles.profile__image} src="/img/Group_1.png" alt="Minha foto" />
      <div className={styles.id}>
        <h1>Monique Alves Duarte</h1>
        <p>Graduanda em Engenharia de Software </p>
        <p>Desenvolvedora Full Stack </p>
        <p>Dev | React | JavaScript | TypeScript | HTML | CSS | SQL | Node.js | Sistema Web </p>
      </div>
    </div>
  )
};

export default Id;