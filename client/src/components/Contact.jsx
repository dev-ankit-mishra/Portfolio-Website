import { Input } from "postcss";
import { Send } from "lucide-react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section
      className=" w-full h-screen relative flex flex-col px-100 py-4 gap-4   text-neutral-100 bg-neutral-900"
      id="Contact"
    >
      <h1 className="text-4xl font-bold mt-12">Let's Connect</h1>
      <p className="tracking-wide leading-relaxed text-neutral-200">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Whether you have a question or
        just want to say hi — I’ll try my best to get back to you!
      </p>
      <form action="" className="flex flex-col space-y-3 mt-6 ">
        <label className="text-lg" htmlFor="FullName">
          Full name
        </label>
        <input
          className="bg-neutral-800 p-2 rounded border text-white border-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder="eg. Ankit Mishra "
        />
        <label className="text-lg mt-3" htmlFor="Email">
          Email address
        </label>
        <input
          className="bg-neutral-800 p-2 rounded text-white border border-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600 "
          type="email"
          placeholder="eg. contact@ankitmishra.pro "
        />
        <label className="text-lg mt-3" htmlFor="message">
          Your message
        </label>
        <textarea
          className="bg-neutral-800 p-2 rounded border text-white border-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600 "
          rows={4}
          cols={6}
          placeholder="Type your message here..."
        />
        <button
          className="group flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold p-2 rounded-md text-lg mt-4"
          type="submit"
        >
          Send Message
          <Send
            size={18}
            className=" transition-transform group-hover:translate-x-1"
          />
        </button>
      </form>

      <Footer />
    </section>
  );
}
