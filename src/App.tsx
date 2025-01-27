import React, { useState, useEffect } from "react";
import Menu from "./components/Nav";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
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
    <div>
      <div className="page-container">
        <Menu />
        <div className="hero-container">
          <Hero />
        </div>
        <div className="sections-container">
          <Projects />
          <Skills />
          <Reviews />
          <Contact />
          <Footer />
        </div>
        {showBackToTop && (
          <button className="scroll-to-top-button" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} size="2xl" color="#97cfbb" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
