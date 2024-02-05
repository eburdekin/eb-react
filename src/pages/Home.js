import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";

function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
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
    <div style={{ backgroundColor: "#BAD9D6" }}>
      <NavBar />
      <div className="pt-14 flex flex-col text-center items-center mx-auto">
        <Hero />
        <About />
        {/* <Contact /> */}
        <Footer />
      </div>
      {showBackToTop && (
        <button
          style={{ backgroundColor: "#BAD9D6" }}
          className="fixed bottom-4 py-1 right-4 px-3 rounded-2xl shadow-md hover:bg-gray-100"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            size="2xl"
            style={{ color: "#165634" }}
          />
        </button>
      )}
    </div>
  );
}

export default Home;
