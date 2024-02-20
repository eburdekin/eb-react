import ContactIcons from "../components/ContactIcons";

export default function Hero() {
  return (
    <div className="flex flex-col p-6 md:p-10">
      {/* <div className="flex flex-col p-6 md:p-10"> */}
      <div className="pt-32 md:pt-40 max-w-sm">
        <h1 className="text-4xl md:text-5xl font-bold">Eileen Burdekin</h1>
        <h2 className="text-2xl md:text-3xl font-bold">Full-stack Developer</h2>
        <p className="md:text-lg my-4">
          Digital advertising expert with 8+ years experience in agency,
          consultancy, and in-house capacities.
        </p>
      </div>
      <div className="font-bold flex items-center text-lg md:text-xl mb-2">
        <img
          src="../images/location.svg"
          alt="location pin"
          className="inline-block w-7 md:w-8"
        />
        <p className="mt-1 md:mt-2">Los Angeles, CA</p>
      </div>
      <div className="my-14">
        <a href="../docs/resume.pdf">
          <button className="rounded-xl shadow-md font-bold p-2 my-2 text-white">
            Download my resume
          </button>
        </a>
        <br />
        <a href="https://www.linkedin.com/in/eburdekin/">
          <button className="rounded-xl shadow-md font-bold p-2 my-2 text-white">
            Connect on LinkedIn
          </button>
        </a>
      </div>

      <div className="mt-12 flex items-center justify-center">
        <ContactIcons />
      </div>
    </div>
  );
}
