import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactIcons from "../components/ContactIcons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-headers">
        <h1>Eileen Burdekin</h1>
        <h3>Web Developer</h3>
      </div>
      <div className="location">
        <FontAwesomeIcon icon={faLocationDot} size="lg" color="#97cfbb" />
        <p>Los Angeles, CA</p>
      </div>
      <div className="hero-contact-icon-container">
        <ContactIcons />
      </div>
    </div>
  );
};

export default Hero;
