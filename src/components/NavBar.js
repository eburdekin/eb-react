import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";

export default function NavBar() {
  const navStyle = {
    padding: "10px",
    width: "100%",
    textAlign: "center",
  };

  const linkStyle = {
    fontWeight: "bold",
    fontFamily: "Figtree",
    // color: "#027353",
    color: "black",
    fontSize: 20,
    textDecoration: "none",
    margin: "5px",
  };

  return (
    <Container maxWidth="md" style={navStyle}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      {/* <NavLink to="/work" style={linkStyle}>
        Work
      </NavLink>
      <NavLink to="/contact" style={linkStyle}>
        Contact
      </NavLink> */}
    </Container>
  );
}
