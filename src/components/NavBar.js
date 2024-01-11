import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navStyle = {
    padding: "10px",
    maxWidth: "100%",
  };

  const linkStyle = {
    fontWeight: "bold",
    fontFamily: "Figtree",
    color: "#027353",
    fontSize: 20,
    textDecoration: "none",
    margin: "5px",
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      {/* <NavLink to="/work" style={linkStyle}>
        Work
      </NavLink>
      <NavLink to="/contact" style={linkStyle}>
        Contact
      </NavLink> */}
    </nav>
  );
}
