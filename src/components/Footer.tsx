import React from "react";
import ContactIcons from "./ContactIcons";

const Footer = () => {
  return (
    <div className="w-full text-center mt-10">
      <div className="md:hidden">
        <ContactIcons />
      </div>

      <p className="text-sm text-white">
        &copy; {new Date().getFullYear().toString()}{" "}
        <a href="https://github.com/eburdekin" target="_blank" rel="noreferrer">
          Eileen Burdekin
        </a>
        . Built with <span className="highlighted">React</span> and{" "}
        <span className="highlighted">TypeScript</span>.
      </p>
    </div>
  );
};

export default Footer;
