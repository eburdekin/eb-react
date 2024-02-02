// import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Hamburger toggled={isOpen} toggle={setOpen} />
    // <div className="container mx-auto px-4 py-2 text-center">
    //   <NavLink
    //     to="/"
    //     className="font-bold font-figtree text-black no-underline mr-5"
    //   >
    //     Home
    //   </NavLink>
    /* <NavLink to="/work" className="font-bold font-figtree text-black no-underline mr-5">
        Work
      </NavLink>
      <NavLink to="/contact" className="font-bold font-figtree text-black no-underline">
        Contact
      </NavLink> */
    // </div>
  );
}
