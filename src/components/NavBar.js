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
    { label: `About`, url: `/#section-about` },
    // { label: `Clubs`, url: `/clubs` },
    // { label: `Profile`, url: `/profile/my_clubs` },
  ];

  return (
    <>
      <nav
        className="fixed md:w-full z-50 top-0 right-0"
        style={{ backgroundColor: "#BAD9D6" }}
      >
        <div className="mx-auto px-4 relative z-50">
          <div className="flex justify-between items-center py-2">
            {" "}
            {/* Reduced py-2 for height */}
            <div className="items-center">
              <a
                href="/"
                className="hidden md:flex items-center text-gray-900 font-bold text-lg"
              >
                <span
                  style={{ color: "#165634" }}
                  className="text-2xl font-bold"
                >
                  EB
                </span>
              </a>
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
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-0 z-50 pb-6"
          style={{ backgroundColor: "#BAD9D6" }}
        >
          <div className="flex flex-col items-center mt-12 mb-4">
            {menuItems.map(({ url, label }, index) => (
              <HeaderNavLink key={index} href={url} closeMenu={closeMenu}>
                {label}
              </HeaderNavLink>
            ))}
          </div>
        </div>
      )}
      <div
        className="md:hidden fixed top-4 right-4 z-50 rounded-2xl shadow-md"
        style={{ backgroundColor: "#BAD9D6" }}
      >
        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
      </div>
    </>
  );
}
