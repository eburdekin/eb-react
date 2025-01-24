import React from "react";
import ContactIcons from "./ContactIcons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-contact-icon-container">
        <ContactIcons />
      </div>

      <span className="small-text">
        &copy; {new Date().getFullYear().toString()} Eileen Burdekin. Built with
        React.
      </span>
    </footer>
  );
};

export default Footer;
