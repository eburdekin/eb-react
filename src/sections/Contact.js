import SectionH2 from "../components/SectionH2";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [message, setMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let isValid = true;

    if (!data.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email";
      isValid = false;
    }

    if (!data.message) {
      errors.message = "Message is required";
      isValid = false;
    }

    if (isValid) {
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
        } else {
          setMessage("Form submission failed");
        }
      } catch (error) {
        setMessage("An error occurred while submitting the form:", error);
      }

      reset();
    }
  };

  const labelClass =
    "absolute left-2 top-3 z-10 origin-[0] -translate-y-8 scale-75 transform text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500";

  const inputClass =
    "peer block w-full rounded border-gray-500 bg-transparent p-2.5 text-md text-white focus:border-cyan-600";

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
          <input
            type="hidden"
            name="subject"
            value="Contacted via eileenburdekin.com!"
          />
          <input type="hidden" name="access_key" value={ACCESS_KEY} />

          <div className="flex flex-col space-y-6 w-full">
            <div className="relative">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={inputClass}
                placeholder=" "
              />
              <label className={labelClass}>Your name</label>
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className={inputClass}
                placeholder=" "
              />
              <label className={labelClass}>Your email</label>
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="5"
                className={inputClass}
                placeholder=" "
              ></textarea>
              <label className={labelClass}>Your message</label>
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
