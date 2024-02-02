import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const iconStyle = "text-black m-2 hover-effect";

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center">
      <div>
        <a
          href="mailto:eileenburdekin@proton.me"
          target="_blank"
          rel="noreferrer"
        >
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
      <p className="text-sm">
        &copy; {new Date().getFullYear().toString()} Eileen Burdekin
      </p>
    </div>
  );
}
