import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const navStyle = {
    padding: "10px",
    position: "absolute",
    bottom: 0,
    width: "75%",
  };

  const iconStyle = {
    color: "#027353",
    margin: "5px",
  };

  // const copyrightStyle = {
  //   // fontSize: "14px",
  //   // fontWeight: "medium",
  // };

  return (
    <>
      <div style={navStyle}>
        <a
          href="mailto:hello@eileenburdekin.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2xl" style={iconStyle} />
        </a>
        <a href="https://github.com/eburdekin" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2xl" style={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/eburdekin/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" style={iconStyle} />
        </a>
        <Typography sx={{ fontSize: 14 }}>© Eileen Burdekin 2023</Typography>
      </div>
    </>
  );
}
