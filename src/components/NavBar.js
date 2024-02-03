import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import HeaderNavLink from "./HeaderNavLink";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: `Home`, url: `/#` },
    { label: `Reviews`, url: `/#section-reviews` },
    // { label: `Clubs`, url: `/clubs` },
    // { label: `Profile`, url: `/profile/my_clubs` },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="mx-auto px-4 relative z-50">
        <div className="flex justify-between items-center py-2">
          {" "}
          {/* Reduced py-2 for height */}
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center text-gray-900 font-bold text-lg"
            >
              <img src="/initials.png" className="w-8 h-8 mr-2" alt="Logo" />{" "}
              {/* Reduced image size */}
            </a>
          </div>
          <div className="md:hidden">
            <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {" "}
            {/* Reduced space between items */}
            {menuItems.map(({ url, label }, index) => (
              <HeaderNavLink key={index} href={url} closeMenu={closeMenu}>
                {label}
              </HeaderNavLink>
            ))}
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-16 bg-white shadow-lg z-50">
            <div className="flex flex-col items-center">
              {menuItems.map(({ url, label }, index) => (
                <HeaderNavLink key={index} href={url} closeMenu={closeMenu}>
                  {label}
                </HeaderNavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
