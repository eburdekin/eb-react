import ContactIcons from "../components/ContactIcons";

export default function Hero() {
  return (
    <div className="min-h-screen text-center flex flex-col justify-center items-center">
      <h1
        style={{ color: "#165634" }}
        className="text-7xl font-bold py-36 md:py-40 max-w-sm"
      >
        Eileen Burdekin
      </h1>
      <div className="font-bold flex items-center text-xl md:text-2xl mb-2">
        <img
          src="/location.svg"
          alt="location pin"
          className="inline-block w-8 md:w-10" // Add margin-right for spacing
        />
        <p style={{ color: "#165634" }} className="mt-1 md:mt-2">
          Los Angeles, CA
        </p>
      </div>
      <p className="md:text-lg">
        Full-stack developer & digital marketing expert.
        <br /> You can find me @eburdekin in most places.
      </p>
      <ContactIcons />
    </div>
  );
}
