import React from "react";
import ContactIcons from "./ContactIcons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-contact-icon-container">
        <ContactIcons />
      </div>

      <span className="small-text">
        &copy; {new Date().getFullYear().toString()} Eileen Burdekin
        {/* •{" "}
        <span className="hover-text credits">
          Credits{" "}
          <div className="credits-popup">
            Built with React and deployed with Netlify. Text is set in Acorn
            Semibold and GT Planar Regular.
          </div>
        </span> */}
      </span>
    </footer>
  );
};

export default Footer;
