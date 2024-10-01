import { useEffect, useState, useRef } from "react";
import { Turn as Hamburger } from "hamburger-react";

export const NavbarItems = ({ items, onClick }) => (
  <>
    {items.map(({ url, label }, index) => (
      <a
        key={index}
        href={url}
        onClick={onClick}
        className="nav-link py-4 md:py-2 md:px-4 mt-1 mb-1 rounded block font-bold"
      >
        {label}
      </a>
    ))}
  </>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function useClickOutside(ref, onClickOutside) {
    useEffect(() => {
      // Invoke function onClick outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }
      // Bind
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Dispose
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(menuRef, () => {
    setIsOpen(false);
  });

  const navbarItems = [
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
            <div className="items-center" ref={menuRef}></div>
            <div className="hidden md:flex items-center space-x-2">
              <NavbarItems
                items={navbarItems}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden fixed bg-black text-white bg-opacity-95 inset-x-0 top-0 z-50 pb-6">
          <div className="flex flex-col items-center mt-12 mb-4" ref={menuRef}>
            <NavbarItems items={navbarItems} onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
      <button className="md:hidden fixed top-4 right-4 z-50 rounded shadow-md bg-black">
        <Hamburger toggled={isOpen} toggle={toggleMenu} color="#49d6db" />
      </button>
    </>
  );
}
