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

  const ErrorMessage: React.FC<{ message: string | undefined }> = ({
    message,
  }) => {
    return <p className="form-error">{message}</p>;
  };

  return (
    <section id="contact">
      <h2 className="section-header">Let's Connect!</h2>
      <div className="contact-form-container">
        <p className="contact-blurb">
          I am actively exploring new career opportunities and welcome your
          inquiries. Let's see how we can work together.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="contact-inputs-container">
            <div className="contact-input-container">
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="contact-input peer"
                placeholder=" "
                autoComplete="name"
              />
              <label className="contact-input-label" htmlFor="name">
                Your name
              </label>
              {errors.name && <ErrorMessage message={errors.name.message} />}
            </div>

            <div className="contact-input-container">
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
                className="contact-input peer"
                placeholder=" "
                autoComplete="email"
              />
              <label className="contact-input-label" htmlFor="email">
                Your email
              </label>
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>

            <div className="contact-input-container">
              <textarea
                id="message"
                className="contact-input peer"
                {...register("message", { required: "Message is required" })}
                rows={5}
                placeholder=" "
              ></textarea>
              <label className="contact-input-label" htmlFor="message">
                Your message
              </label>
              {errors.message && (
                <ErrorMessage message={errors.message.message} />
              )}
            </div>
          </div>

          <p className="small-text submit-message">
            {onSubmitMessage && onSubmitMessage}
          </p>

          <button type="submit" className="send-button" disabled={!isValid}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
