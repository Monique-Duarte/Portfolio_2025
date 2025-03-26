import BaixarCurriculo from "../Blob/blob";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact flex text-white relative">
        <div className=" text-white">
          <a
            href="https://www.instagram.com/duartt.monique/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram text-white fs-3 p-2 my-0"></i>
          </a>
        </div>
        <div className="text-white">
          <a href="mailto:moniquead95@gmail.com">
            <i className="bi bi-envelope text-white fs-3 p-2 my-0"></i>
          </a>
        </div>
        <div className="text-white">
          <a
            href="https://www.linkedin.com/in/moniquead"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin text-white fs-3 p-2 my-0"></i>
          </a>
        </div>
        <div className="overflow-hidden">
          <a
            href="https://github.com/Monique-Duarte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github text-white fs-3 p-2 my-0"></i>
          </a>
        </div>
        <div className="overflow-hidden">
          <a
            href="https://wa.me/19998000818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp text-white fs-3 p-2 my-0"></i>
          </a>
        </div>
        <div className="overflow-hidden">
          <button className="p-2 sm:p-0 m-0 text-sm">
            <BaixarCurriculo />
          </button>
        </div>
      </div>
  );
};

export default Contact;
