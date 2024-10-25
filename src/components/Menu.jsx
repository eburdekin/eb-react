import { useEffect, useState, useRef } from "react";
import { Turn as Hamburger } from "hamburger-react";

export const MenuItems = ({ items, onClick }) => (
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

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function useClickOutside(menuRef, buttonRef, onClickOutside) {
    useEffect(() => {
      function handleClickOutside(event) {
        // Check if the click is outside both the menu and the hamburger button
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)
        ) {
          onClickOutside();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Cleanup
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [menuRef, buttonRef, onClickOutside]);
  }

  const menuRef = useRef(null); // Ref for the menu
  const buttonRef = useRef(null); // Ref for the hamburger button

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle outside clicks for the menu, excluding the hamburger button
  useClickOutside(menuRef, buttonRef, () => setIsOpen(false));

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
              <MenuItems items={menuItems} onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden fixed bg-black text-white bg-opacity-95 inset-x-0 top-0 z-50 pb-6">
          <div className="flex flex-col items-center mt-12 mb-4" ref={menuRef}>
            <MenuItems items={menuItems} onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
      <button
        className="md:hidden fixed top-4 right-4 z-50 rounded shadow-md bg-black"
        ref={buttonRef} // Add ref for the hamburger button
      >
        <Hamburger toggled={isOpen} toggle={toggleMenu} color="#49d6db" />
      </button>
    </>
  );
}
