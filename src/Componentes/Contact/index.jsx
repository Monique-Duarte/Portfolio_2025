import BaixarCurriculo from "../Blob/blob";
import ContactIcon from "./contactIcon";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white mt-6">
      <div className="flex space-x-2 text-2xl">
        <ContactIcon
          href="https://www.instagram.com/duartt.monique/"
          iconClass="bi bi-instagram"
          label="Instagram"
        />
        <ContactIcon
          href="mailto:moniquead95@gmail.com"
          iconClass="bi bi-envelope"
          label="Email"
        />
        <ContactIcon
          href="https://www.linkedin.com/in/moniquead"
          iconClass="bi bi-linkedin"
          label="LinkedIn"
        />
        <ContactIcon
          href="https://github.com/Monique-Duarte"
          iconClass="bi bi-github"
          label="GitHub"
        />
        <ContactIcon
          href="https://wa.me/19998000818"
          iconClass="bi bi-whatsapp"
          label="WhatsApp"
        />
      </div>

      <button
        className="transition-colors rounded-lg shadow-md text-white font-semibold text-lg flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-blue-400"
        aria-label="Baixar Currículo"
      >
        <BaixarCurriculo />
      </button>
    </div>
  );
};

export default Contact;

