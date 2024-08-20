import ContactIcons from "../components/ContactIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-40 max-w-sm">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Eileen Burdekin
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Web Developer
        </h2>
        {/* <p className="md:text-lg my-4 text-gray-200">
          Di at agencies, brands, and
          publishers
        </p> */}
      </div>
      <div className="flex items-center text-lg md:text-xl gap-2 text-white">
        <FontAwesomeIcon icon={faLocationDot} size="lg" color="#49d6db" />
        <p className="mt-1 md:mt-2">Los Angeles, CA</p>
      </div>
      <div className="my-14">
        {/* <a href="../docs/Eileen_Burdekin_Resume.pdf">
          <button className="rounded font-bold p-2 my-2">
            Download my resume
          </button>
        </a>
        <br />
        <a href="https://www.linkedin.com/in/eburdekin/">
          <button className="rounded font-bold p-2 my-2">
            Connect on LinkedIn
          </button>
        </a> */}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <ContactIcons />
      </div>
    </div>
  );
}
