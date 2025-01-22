import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ContactIcons from "./components/ContactIcons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
          <div className="flex flex-col min-h-screen p-6 sticky top-0">
            <div className="pt-40 my-auto max-w-md">
              <h1 className="text-5xl xl:text-6xl">Eileen Burdekin</h1>
              <h3 className="text-3xl md:text-4xl mb-4">Web Developer</h3>
            </div>
            <div className="flex items-center text-lg md:text-xl gap-2">
              <FontAwesomeIcon icon={faLocationDot} size="lg" color="#97cfbb" />
              <p className="mt-1 md:mt-2 text-large text-white">
                Los Angeles, CA
              </p>
            </div>
            <div className="my-40 flex items-center justify-center">
              <ContactIcons />
            </div>
          </div>
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
              className="fixed bottom-5 py-1 right-4 px-3 rounded"
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
