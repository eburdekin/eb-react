import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

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
    { label: `Projects`, url: `/#section-projects` },
    { label: `Skills`, url: `/#section-skills` },
    { label: `Reviews`, url: `/#section-about` },
    { label: `Contact`, url: `/#section-contact` },
  ];

  return (
    <>
      <nav className="fixed w-full bg-black text-white bg-opacity-95 z-50 top-0 right-0">
        <div className="mx-auto px-4 relative z-50">
          <div className="flex justify-between items-center py-2">
            <div className="items-center"></div>
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map(({ url, label }, index) => (
                <a
                  key={index}
                  href={url}
                  onClick={closeMenu}
                  className="nav-link py-4 md:py-2 md:px-4 mt-1 mb-1 rounded block font-bold"
                >
                  {label}
                </a>
              ))}
              <a href="../docs/Eileen_Burdekin_Resume.pdf">
                <button className="rounded font-bold px-2 py-1 mx-3">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden fixed bg-black text-white bg-opacity-95 inset-x-0 top-0 z-50 pb-6">
          <div className="flex flex-col items-center mt-12 mb-4">
            {menuItems.map(({ url, label }, index) => (
              <a
                key={index}
                href={url}
                onClick={closeMenu}
                className="nav-link py-4 md:py-2 md:px-4 mt-1 mb-1 rounded block font-bold"
              >
                {label}
              </a>
            ))}
            <a href="../docs/Eileen_Burdekin_Resume.pdf">
              <button className="rounded font-bold px-2 py-1 my-3">
                Resume
              </button>
            </a>
          </div>
        </div>
      )}
      <button className="md:hidden fixed top-4 right-4 z-50 rounded shadow-md bg-black">
        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} color="#49d6db" />
      </button>
    </>
  );
}
