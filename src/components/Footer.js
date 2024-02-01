import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const navStyle = {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    textAlign: "center",
  };

  const iconStyle = {
    // color: "#027353",
    color: "black",
    margin: "5px",
  };

  return (
    <Container maxWidth="md" sx={navStyle}>
      <a
        href="mailto:eileenburdekin@proton.me"
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
      <Typography sx={{ fontSize: 14 }}>
        &copy; {new Date().getFullYear().toString()} Eileen Burdekin
      </Typography>
      {/* </div> */}
    </Container>
  );
}
