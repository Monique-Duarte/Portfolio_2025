import styles from '../Header/Header.module.css';

const Id = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.container} ${styles.header}`}>
      <div className={styles.profile__info}>
        <img className={styles.profile__image} src="/img/Group_1.png" alt="Minha foto" />
        <div className={styles.id}>
          <h1>Monique Alves Duarte</h1>
          <p>Graduanda em Engenharia de Software </p>
          <p>Desenvolvedora Front-end </p>
          <p>Dev | React | JavaScript | TypeScript | HTML | CSS | SQL | Node.js | Sistema Web </p>
        </div>
      </div>
      </div>
    </div>
  )
};

export default Id;