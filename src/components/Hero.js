import ContactIcons from "../components/ContactIcons";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col p-6 md:p-10">
      <div className="py-32 md:py-40 max-w-sm">
        <h1 className="text-4xl md:text-5xl font-bold">Eileen Burdekin</h1>
        <h2 className="text-2xl md:text-3xl font-bold">Full-stack Developer</h2>
        <p className="md:text-lg">
          Digital advertising expert with 8+ years experience in agency,
          consultancy, and in-house capacities.
        </p>
      </div>
      <div>Menu items</div>
      <div className="font-bold flex items-center text-xl md:text-2xl mb-2">
        <img
          src="/location.svg"
          alt="location pin"
          className="inline-block w-8 md:w-10" // Add margin-right for spacing
        />
        <p className="mt-1 md:mt-2">Los Angeles, CA</p>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <ContactIcons />
      </div>
    </div>
  );
}
