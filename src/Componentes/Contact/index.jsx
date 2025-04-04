import BaixarCurriculo from "../Blob/blob";
import ContactIcon from "./contactIcon";

const Contact = () => {
  return (
    <div className="flex center mx-2 my-0 md:items-center items-center justify-center">
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
      <div className="overflow-hidden">
        <button className="fs-3 m-2 md:p-2">
          <BaixarCurriculo />
        </button>
      </div>
    </div>
  );
};

export default Contact;
