import React from "react";
import ContactIcons from "./ContactIcons";

const Footer = () => {
  return (
    <footer>
      <div className="md:hidden">
        <ContactIcons />
      </div>

      <p className="small-text">
        &copy; {new Date().getFullYear().toString()}{" "}
        <a href="https://github.com/eburdekin" target="_blank" rel="noreferrer">
          Eileen Burdekin
        </a>
        . Built with React.
      </p>
    </footer>
  );
};

export default Footer;
