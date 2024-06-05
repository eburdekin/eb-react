import SectionH2 from "../components/SectionH2";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [message, setMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("subject", "Contacted via eileenburdekin.com!");
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        reset();
      } else {
        setMessage("Form submission failed");
      }
    } catch (error) {
      setMessage("An error occurred while submitting the form:", error);
    }
  };

  const labelClass =
    "absolute left-2 top-3 z-10 origin-[0] -translate-y-8 scale-75 transform text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500";

  const inputClass =
    "peer block w-full rounded border-gray-500 bg-transparent p-2.5 text-white focus:border-cyan-600";

  return (
    <section id="section-contact">
      <SectionH2>Let's Connect!</SectionH2>
      <div className="mx-auto flex flex-col items-center">
        <p className="mt-3 text-gray-300 max-w-md">
          I am actively exploring new career opportunities and welcome your
          inquiries. Let's see how we can work together.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex flex-col items-center max-w-md w-full"
        >
          <div className="flex flex-col space-y-6 w-full">
            <div className="relative">
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className={inputClass}
                placeholder=" "
                autocomplete="name"
              />
              <label className={labelClass} htmlFor="name">
                Your name
              </label>
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="relative">
              <input
                id="email"
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className={inputClass}
                placeholder=" "
                autocomplete="email"
              />
              <label className={labelClass} htmlFor="email">
                Your email
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                id="message"
                className={inputClass}
                {...register("message", { required: "Message is required" })}
                rows="5"
                placeholder=" "
              ></textarea>
              <label className={labelClass} htmlFor="message">
                Your message
              </label>
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message.message}</p>
              )}
            </div>
          </div>

          <p className="highlighted text-sm mt-4">
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
