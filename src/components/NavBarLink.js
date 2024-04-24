// import { NavLink } from "react-router-dom";

const NavBarLink = ({ href, closeMenu, children }) => {
  // const pathname = window.location.pathname;
  // const active = pathname.startsWith(href);

  return (
    <a
      href={href}
      onClick={closeMenu}
      className={
        "nav-link py-4 md:py-2 md:px-4 mt-1 mb-1 rounded block font-bold"
      }
    >
      {children}
    </a>
  );
};

export default NavBarLink;
