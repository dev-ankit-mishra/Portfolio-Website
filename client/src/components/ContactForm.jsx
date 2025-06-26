import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const [buttonState, setButtonState] = useState("idle"); // idle | processing | success | error
  const [buttonText, setButtonText] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonState("processing");
    setButtonText("Processing...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setButtonState("success");
          setButtonText("Message Sent!");
          form.current.reset();
        },
        () => {
          setButtonState("error");
          setButtonText("Failed to Send");
        }
      )
      .finally(() => {
        setTimeout(() => {
          setButtonState("idle");
          setButtonText("Send Message");
        }, 3000);
      });
  };

  // Determine button classes based on state
  const getButtonColor = () => {
    switch (buttonState) {
      case "processing":
        return "bg-gray-500 cursor-not-allowed";
      case "success":
        return "bg-green-600 hover:bg-green-700";
      case "error":
        return "bg-red-600 hover:bg-red-700";
      default:
        return "bg-blue-600 hover:bg-blue-700";
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col space-y-3 mt-6"
    >
      <label className="text-lg">Full name</label>
      <input
        name="name"
        required
        autoComplete="off"
        className="bg-neutral-800 p-2 rounded border text-white border-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        type="text"
        placeholder="e.g., Ankit Mishra"
      />

      <label className="text-lg mt-3">Email address</label>
      <input
        name="email"
        required
        autoComplete="off"
        className="bg-neutral-800 p-2 rounded text-white border border-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        type="email"
        placeholder="e.g., contact@ankitmishra.pro"
      />

      <label className="text-lg mt-3">Your message</label>
      <textarea
        name="message"
        autoComplete="off"
        required
        className="bg-neutral-800 p-2 rounded border text-white border-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        rows={4}
        placeholder="Type your message here..."
      />

      <button
        type="submit"
        className={`group flex justify-center items-center gap-2 text-white font-semibold p-2 rounded-md text-lg mt-4 transition-all duration-200 ${getButtonColor()}`}
        disabled={buttonState === "processing"}
      >
        {buttonText}
        <Send
          size={18}
          className={`transition-transform ${
            buttonState === "idle" ? "group-hover:translate-x-1" : ""
          }`}
        />
      </button>
    </form>
  );
};

export default ContactForm;
