import styles from '../Habilidades.module.css';
import Hard from './HardHabilidades'; // Caminho corrigido para importar o array Hard

const Hardskills = () => {
  return (
    <div className={styles.hard}>
      <div className={styles.hardSection}>
        <div className={styles.texto}>
          <h1><i className="bi bi-puzzle-fill"></i> Hard Skills</h1>
        </div>
        <div className={styles.hardBox}>
          {Hard.map((item, index) => (
            <div className={styles.hardItens} key={index}>
              <div className={styles.flip}>
                <div className={styles.frente}>
                  <h3>{item.nome}</h3>
                </div>
                <div className={styles.tras}>
                  <h3>{item.descricao}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.imagebrain}>
        <img src="../../public/BRAIN.png" alt="Imagem de cérebro" />
      </div>
    </div>
  );
};

export default Hardskills;
