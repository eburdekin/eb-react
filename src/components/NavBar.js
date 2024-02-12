import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import NavBarLink from "./NavBarLink";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    // { label: `Home`, url: `/#` },
    { label: `Projects`, url: `/#section-projects` },
    { label: `About`, url: `/#section-about` },
    { label: `Contact`, url: `/#section-contact` },
  ];

  return (
    <>
      <nav className="fixed md:w-full z-50 bg-white bg-opacity-95 top-0 right-0">
        <div className="mx-auto px-4 relative z-50">
          <div className="flex justify-between items-center py-2">
            <div className="items-center"></div>
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map(({ url, label }, index) => (
                <NavBarLink key={index} href={url} closeMenu={closeMenu}>
                  {label}
                </NavBarLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden fixed bg-white bg-opacity-95 inset-x-0 top-0 z-50 pb-6">
          <div className="flex flex-col items-center mt-12 mb-4">
            {menuItems.map(({ url, label }, index) => (
              <NavBarLink key={index} href={url} closeMenu={closeMenu}>
                {label}
              </NavBarLink>
            ))}
          </div>
        </div>
      )}
      <div className="md:hidden fixed top-4 right-4 z-50 rounded-2xl shadow-md">
        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
      </div>
    </>
  );
}
