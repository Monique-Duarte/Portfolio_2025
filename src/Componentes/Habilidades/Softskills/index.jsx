import styles from '../Habilidades.module.css';
import Soft from './SoftHabilidade';

const Softskills = () => {
  return (
    <div className={styles.container} >
      <div className={styles.conteudo}>
        <div className={styles.soft}>
          <div className={styles.imageheart}>
            <img src="../../public/HEART.png" alt="Imagem de coração" />
          </div>
          <div className={styles.softSection}>
            <div className={styles.texto}>
              <h1><i className="bi bi-puzzle-fill"></i> Soft Skills</h1>
            </div>
            <div className={styles.softBox}>
              {Soft.map((item, index) => (
                <div className={styles.softItens} key={index}>
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
        </div>
      </div>
    </div>
  )
};

export default Softskills;