import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [onSubmitMessage, setOnSubmitMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    const { name, email, message } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("subject", "Contacted via eileenburdekin.com!");
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setOnSubmitMessage("Form submitted successfully!");
        reset();
      } else {
        setOnSubmitMessage("Form submission failed");
      }
    } catch (error) {
      setOnSubmitMessage(
        "An error occurred while submitting the form:" +
          (error instanceof Error ? error.message : "Unknown error")
      );
    }
  };

  const labelClass =
    "absolute left-2 top-3 z-10 origin-[0] -translate-y-8 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75";

  const inputClass =
    "peer block w-full rounded border-green-100 bg-transparent p-2.5 focus:border-green-200";

  const ErrorMessage: React.FC<{ message: string | undefined }> = ({
    message,
  }) => {
    return <p className="form-error">{message}</p>;
  };

  return (
    <section id="section-contact">
      <h2 className="section-header mx-auto py-2 mt-8">Let's Connect!</h2>
      <div className="mx-auto flex flex-col items-center">
        <p className="mt-3 max-w-md">
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
                autoComplete="name"
              />
              <label className={labelClass} htmlFor="name">
                Your name
              </label>
              {errors.name && <ErrorMessage message={errors.name.message} />}
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
                autoComplete="email"
              />
              <label className={labelClass} htmlFor="email">
                Your email
              </label>
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>

            <div className="relative">
              <textarea
                id="message"
                className={inputClass}
                {...register("message", { required: "Message is required" })}
                rows={5}
                placeholder=" "
              ></textarea>
              <label className={labelClass} htmlFor="message">
                Your message
              </label>
              {errors.message && (
                <ErrorMessage message={errors.message.message} />
              )}
            </div>
          </div>

          <p className="highlighted text-sm mt-4">
            {onSubmitMessage && onSubmitMessage}
          </p>

          <button type="submit" className="mt-2 px-10 py-2" disabled={!isValid}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
