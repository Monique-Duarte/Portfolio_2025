import BaixarCurriculo from "../Blob/blob";

const Contact = () => {
  return (
    <div className="flex center mx-5 my-0 md:items-center items-center justify-center">
      <div className=" text-white p-0">
        <a
          href="https://www.instagram.com/duartt.monique/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram text-white fs-3 fs-3 mx-2"></i>
        </a>
      </div>
      <div className="text-white p-0">
        <a href="mailto:moniquead95@gmail.com">
          <i className="bi bi-envelope text-white fs-3 fs-3 mx-2"></i>
        </a>
      </div>
      <div className="text-white fs-3 mx-2">
        <a
          href="https://www.linkedin.com/in/moniquead"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin text-white fs-3 mx-2"></i>
        </a>
      </div>
      <div className="overflow-hidden fs-3 mx-2">
        <a
          href="https://github.com/Monique-Duarte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github text-white fs-3 mx-2"></i>
        </a>
      </div>
      <div className="overflow-hidden">
        <a
          href="https://wa.me/19998000818"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp text-white fs-3 mx-2"></i>
        </a>
      </div>
      <div className="overflow-hidden">
        <button className="fs-3 mx-2 p-0">
          <BaixarCurriculo />
        </button>
      </div>
    </div>
  );
};

export default Contact;
