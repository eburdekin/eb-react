import SectionH2 from "./SectionH2";
import SectionH3 from "./SectionH3";

const ACCESS_KEY = "46845829-dc1a-4911-914b-c17c6fa698f1";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Access the form data and handle submission here
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle successful form submission
        console.log("Form submitted successfully!");
      } else {
        // Handle failed form submission
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <section id="section-contact">
      <SectionH2>Contact</SectionH2>
      <p className="mt-3">
        Email me{" "}
        <a
          href="mailto:eileenburdekin@proton.me"
          target="_blank"
          rel="noreferrer"
          className="text-black font-bold hover:text-gray-300"
        >
          here
        </a>{" "}
        or message me below:
      </p>
      <div className="mx-auto">
        <form onSubmit={handleSubmit} className="mt-10">
          <input type="hidden" name="access_key" value={ACCESS_KEY} />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-black px-10 py-2 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
