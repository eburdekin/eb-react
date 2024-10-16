import ContactIcons from "../components/ContactIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-40 max-w-sm">
        <h1 className="text-4xl md:text-5xl font-semibold">Eileen Burdekin</h1>
        <h2 className="text-2xl md:text-3xl text-white mb-4">Web Developer</h2>
      </div>
      <div className="flex items-center text-lg md:text-xl gap-2 text-gray-300">
        <FontAwesomeIcon icon={faLocationDot} size="lg" color="#49d6db" />
        <p className="mt-1 md:mt-2">LOS ANGELES, CA</p>
      </div>
      <div className="my-40 flex items-center justify-center">
        <ContactIcons />
      </div>
    </div>
  );
}
