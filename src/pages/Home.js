import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from "react";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

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

  const iconStyle = "text-black m-2 hover-effect";

  return (
    <>
      <NavBar />
      <div className="mt-28">
        <div className="mt-14 flex flex-col text-center items-center mx-auto transition-opacity duration-1000 ease-in opacity-100">
          <Hero />
          <p className="font-bold">Los Angeles, CA</p>
          <p className="font-medium">
            Full-stack developer & digital marketing expert.
            <br /> You can find me @eburdekin in most places.
          </p>
          <div className="mt-4">
            <a
              href="mailto:eileenburdekin@proton.me"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className={iconStyle}
              />
            </a>
            <a
              href="https://github.com/eburdekin"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className={iconStyle}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/eburdekin/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className={iconStyle}
              />
            </a>
          </div>
          <Reviews />
          <Footer />
        </div>
      </div>
      {showBackToTop && (
        <button
          className="fixed bottom-6 right-6 bg-white rounded-full p-1 shadow-md hover:bg-gray-300"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowCircleUp} size="xl" />
        </button>
      )}
    </>
  );
}

export default Home;
