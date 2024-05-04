import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Home() {
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
    <div className="min-h-screen gap-2 bg-black">
      <NavBar />

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:flex-1 max-w-md">
          <div className="md:fixed md:top-0 h-full p-6 md:p-10">
            <Hero />
          </div>
        </div>
        <div className="w-full md:flex-1 mt-10 px-6 justify-center">
          <Projects />
          <Skills />
          <About />
          <Contact />
          <div className="p-6 md:p-10">
            {showBackToTop && (
              <button
                className="fixed bottom-5 py-1 right-4 px-3 rounded bg-black"
                onClick={scrollToTop}
              >
                <FontAwesomeIcon icon={faArrowUp} size="2xl" color="#49d6db" />
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
