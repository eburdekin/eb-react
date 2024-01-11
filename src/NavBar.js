import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
      >
        Home
      </NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
