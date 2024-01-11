import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navStyle = {
    padding: "10px",
  };

  const linkStyle = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "inherit",
    margin: "5px",
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/work" style={linkStyle}>
        Work
      </NavLink>
      <NavLink to="/contact" style={linkStyle}>
        Contact
      </NavLink>
    </nav>
  );
}
