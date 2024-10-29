import React from "react";
import { useEffect, useState, useRef } from "react";
import { Turn as Hamburger } from "hamburger-react";

interface MenuItem {
  label: string;
  url: string;
}

interface IMenuItemsProps {
  onClick: () => void;
}

const MenuItems: React.FC<IMenuItemsProps> = ({ onClick }) => {
  const menuItems: MenuItem[] = [
    { label: `Home`, url: `/#` },
    { label: `Projects`, url: `/#section-projects` },
    { label: `Skills`, url: `/#section-skills` },
    { label: `Reviews`, url: `/#section-reviews` },
    { label: `Contact`, url: `/#section-contact` },
  ];

  return (
    <>
      {menuItems.map(
        ({ url, label }: { url: string; label: string }, index: number) => (
          <a
            key={index}
            href={url}
            onClick={onClick}
            className="nav-link py-4 md:py-2 md:px-4 my-1 rounded block font-bold"
          >
            {label}
          </a>
        )
      )}
    </>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function useClickOutside(
    menuRef: React.RefObject<HTMLDivElement>,
    buttonRef: React.RefObject<HTMLButtonElement>,
    onClickOutside: () => void
  ): void {
    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        // Check if the click is outside both the menu and the hamburger button
        if (
          menuRef.current &&
          !menuRef.current.contains(e.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(e.target as Node)
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

  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle outside clicks for the menu, excluding the hamburger button
  useClickOutside(menuRef, hamburgerButtonRef, toggleMenu);

  return (
    <>
      <nav className="fixed w-full bg-black text-white bg-opacity-95 z-50 top-0 right-0">
        <div className="mx-auto px-4 relative z-50">
          <div className="flex justify-between items-center py-2">
            <div className="items-center"></div>
            <div className="hidden md:flex items-center space-x-2">
              <MenuItems onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden fixed bg-black text-white bg-opacity-95 inset-x-0 top-0 z-50 pb-6">
          <div className="flex flex-col items-center mt-12 mb-4" ref={menuRef}>
            <MenuItems onClick={toggleMenu} />
          </div>
        </div>
      )}
      <button
        className="md:hidden fixed top-4 right-4 z-50 rounded shadow-md bg-black"
        ref={hamburgerButtonRef}
        aria-label="Toggle menu"
      >
        <Hamburger toggled={isOpen} toggle={toggleMenu} color="#49d6db" />
      </button>
    </>
  );
};

export default Menu;
