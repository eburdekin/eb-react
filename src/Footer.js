import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const navStyle = {
    padding: "10px",
  };

  const iconStyle = {
    color: "#027353",
    margin: "5px",
  };

  return (
    <div style={navStyle}>
      <a href="mailto:eileenburdekin@proton.me">
        <FontAwesomeIcon icon={faEnvelope} size="2xl" style={iconStyle} />
      </a>
      <a href="https://github.com/eburdekin">
        <FontAwesomeIcon icon={faGithub} size="2xl" style={iconStyle} />
      </a>
      <a href="https://www.linkedin.com/in/eburdekin/">
        <FontAwesomeIcon icon={faLinkedin} size="2xl" style={iconStyle} />
      </a>
    </div>
  );
}
