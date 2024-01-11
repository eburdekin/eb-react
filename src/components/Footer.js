import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const navStyle = {
    paddingTop: "150px",
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    textAlign: "center",
  };

  const iconStyle = {
    color: "#027353",
    margin: "5px",
  };

  return (
    <Container maxWidth="md" sx={navStyle}>
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
      {/* </div> */}
    </Container>
  );
}
