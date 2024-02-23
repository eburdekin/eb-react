import SectionH2 from "./SectionH2";
import SectionH3 from "./SectionH3";
import { useState } from "react";

const ACCESS_KEY = "46845829-dc1a-4911-914b-c17c6fa698f1";

const Contact = () => {
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
      } else {
        setMessage("Form submission failed");
      }
    } catch (error) {
      setMessage("An error occurred while submitting the form:", error);
    }

    e.target.reset();
  };

  return (
    <section id="section-contact">
      <SectionH2>Let's Connect!</SectionH2>
      <div className="mx-auto flex flex-col items-center">
        <p className="mt-3 text-gray-300 max-w-md">
          I am actively exploring new career opportunities and welcome your
          inquiries. Let's see how we can work together!
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col items-center"
        >
          <input
            type="hidden"
            name="subject"
            value="Contacted via eileenburdekin.com!"
          />
          <input type="hidden" name="access_key" value={ACCESS_KEY} />

          <div className="grid gap-6 sm:grid-cols-1">
            <div className="relative z-0">
              <div>
                <input
                  type="text"
                  name="name"
                  className="peer block w-full rounded border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your name
                </label>
              </div>
            </div>

            <div className="relative z-0">
              <div>
                <input
                  type="text"
                  name="email"
                  className="peer block w-full rounded border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your email
                </label>
              </div>
            </div>

            <div className="relative z-0 col-span-2">
              <div>
                <textarea
                  name="message"
                  rows="5"
                  className="peer block w-full rounded border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your message
                </label>
              </div>
            </div>
          </div>

          <p className="text-sm mt-4" style={{ color: "#09abb0" }}>
            {message ? `${message}` : null}
          </p>

          <button type="submit" className="mt-2 rounded bg-black px-10 py-2">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
