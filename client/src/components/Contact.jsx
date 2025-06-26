import Footer from "./Footer";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      className=" w-full h-screen relative flex flex-col px-100 py-4 gap-4   text-neutral-100 bg-gradient-to-br from-[#000000] to-[#141e30]"
      id="Contact"
    >
      <h1 className="text-4xl font-bold mt-12">Let's Connect</h1>
      <p className="tracking-wide leading-relaxed text-neutral-200">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Whether you have a question or
        just want to say hi — I’ll try my best to get back to you!
      </p>
      <ContactForm />

      <Footer />
    </section>
  );
}
