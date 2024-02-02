import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function Home() {
  const iconStyle = "text-black m-2 hover-effect";

  return (
    <div className="flex flex-col text-center items-center mx-auto transition-opacity duration-1000 ease-in opacity-100">
      {/* <NavBar /> */}
      <Logo />
      <div>
        <a
          href="mailto:eileenburdekin@proton.me"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" className={iconStyle} />
        </a>
        <a href="https://github.com/eburdekin" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/eburdekin/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className={iconStyle} />
        </a>
      </div>
      <p className="font-bold">Los Angeles, CA</p>
      <p className="font-medium">
        Full-stack developer & digital marketing expert.
        <br /> You can find me @eburdekin in most places.
      </p>
      {/* <h3>Reviews</h3>
      <Reviews /> */}
      <Footer />
    </div>
  );
}

export default Home;
