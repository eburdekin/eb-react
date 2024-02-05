import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ContactIcons from "../components/ContactIcons";
import About from "../components/About";
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
    // <>
    <div style={{ backgroundColor: "#BAD9D6" }}>
      <NavBar />
      <div className="pt-14 flex flex-col text-center items-center mx-auto transition-opacity duration-1000 ease-in opacity-100">
        <Hero />
        <div
          className="font-bold flex flex-row text-xl md:text-2xl mb-2"
          style={{ color: "#165634" }}
        >
          <img
            src="/location.svg"
            alt="location pin"
            className="inline-block w-8 md:w-10"
          />
          <p className="mt-1 md:mt-2">Los Angeles, CA</p>
        </div>
        <p className="md:text-lg">
          Full-stack developer & digital marketing expert.
          <br /> You can find me @eburdekin in most places.
        </p>
        <ContactIcons />
        <About />
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

    // </>
  );
}

export default Home;
