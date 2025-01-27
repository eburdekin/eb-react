import React from "react";
import { useEffect, useState, useRef } from "react";
import { Turn as Hamburger } from "hamburger-react";

type MenuItem = {
  label: string;
  url: string;
};

type MenuItemsProps = {
  onClick: () => void;
};

const MenuItems: React.FC<MenuItemsProps> = ({ onClick }) => {
  const menuItems: MenuItem[] = [
    { label: `Home`, url: `/#` },
    { label: `Projects`, url: `/#projects` },
    { label: `Skills`, url: `/#skills` },
    { label: `Reviews`, url: `/#reviews` },
    { label: `Contact`, url: `/#contact` },
  ];

  return (
    <>
      {menuItems.map(
        ({ url, label }: { url: string; label: string }, index: number) => (
          <a key={index} href={url} onClick={onClick} className="nav-link">
            {label}
          </a>
        )
      )}
    </>
  );
};

const Nav = () => {
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
      <nav className="nav-desktop-container">
        <div className="nav-desktop">
          <MenuItems onClick={toggleMenu} />
        </div>
      </nav>
      {isOpen && (
        <nav className="nav-mobile" ref={menuRef}>
          <MenuItems onClick={toggleMenu} />
        </nav>
      )}
      <button
        className="hamburger"
        ref={hamburgerButtonRef}
        aria-label="Toggle menu"
      >
        <Hamburger toggled={isOpen} toggle={toggleMenu} color="#97cfbb" />
      </button>
    </>
  );
};

export default Nav;
