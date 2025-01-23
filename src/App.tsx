import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Hero from "./sections/Hero";
import Projects from "./sections/Work";
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
    <div className="min-h-screen gap-2">
      <Menu />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:flex-1">
          <Hero />
        </div>
        <div className="w-full max-w-6xl md:flex-1 mt-20 px-6 flex flex-col gap-10 justify-center">
          <Projects />
          <Skills />
          <Reviews />
          <Contact />
        </div>
        <div className="p-6 md:p-10">
          {showBackToTop && (
            <button
              className="fixed bottom-5 py-1 right-4 px-3"
              onClick={scrollToTop}
            >
              <FontAwesomeIcon icon={faArrowUp} size="2xl" color="#97cfbb" />
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
