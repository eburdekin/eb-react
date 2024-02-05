// import { NavLink } from "react-router-dom";

const HeaderNavLink = ({ href, closeMenu, children }) => {
  const pathname = window.location.pathname;
  const active = pathname.startsWith(href);

  return (
    <a
      href={href}
      onClick={closeMenu}
      //   className="hover:bg-gray-100 p-2 rounded block"
      style={{ color: "#165634" }}
      className={"p-2 mt-1 mb-1 rounded block font-bold hover:text-gray-300"}
    >
      {children}
    </a>
  );
};

export default HeaderNavLink;
