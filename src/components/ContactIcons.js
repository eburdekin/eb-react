import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactIcons() {
  const iconStyle = "text-white m-2 hover-effect";
  return (
    <div className="items-center">
      <a href="mailto:eburdekin@proton.me" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="2x" className={iconStyle} />
      </a>
      <a href="https://github.com/eburdekin" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className={iconStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/eburdekin/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" className={iconStyle} />
      </a>
    </div>
  );
}
