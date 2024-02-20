import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-6 md:p-10">
      <Projects />
      <About />
      <Contact />
      {showBackToTop && (
        <button
          className="fixed bottom-4 py-1 right-4 px-3 rounded-2xl shadow-md hover:bg-gray-100"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} size="2xl" color="white" />
        </button>
      )}
    </div>
  );
}
