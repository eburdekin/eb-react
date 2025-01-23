import React from "react";
import ContactIcons from "./ContactIcons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-contact-icon-container">
        <ContactIcons />
      </div>

      <p className="small-text">
        &copy; {new Date().getFullYear().toString()} Eileen Burdekin. Built with
        React.
      </p>
    </footer>
  );
};

export default Footer;
