import styles from '../Header/Header.module.css';
import BaixarCurriculo from "../Blob/blob";

const Contact = () => {
  return (
    <div className={styles.contact} >
      <div>
        <a href="https://www.instagram.com/duartt.monique/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram fs-3 p-2 my-0"></i>
        </a>
      </div>
      <div>
        <a href="mailto:moniquead95@gmail.com">
          <i className="bi bi-envelope fs-3 p-2 my-0"></i>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/moniquead" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin fs-3 p-2 my-0"></i>
        </a>
      </div>
      <div>
        <a href="https://github.com/Monique-Duarte" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github fs-3 p-2 my-0"></i>
        </a>
      </div>
      <div>
        <a href="https://wa.me/19998000818" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp fs-3 p-2 my-0"></i>
        </a>
      </div>
      <div>
        <button className='p-2 sm:p-0 m-0 text-sm' >
          <BaixarCurriculo />
        </button>
      </div>
    </div>
  );
}

export default Contact;