import Footer from "./Footer";

export default function Contact() {
  return (
    <section
      className="scroll-mt-20 w-full h-screen relative flex flex-col px-80 gap-4 font-Inter  text-neutral-100 bg-neutral-900"
      id="Contact"
    >
      <h1 className="text-4xl font-bold">Let's Connect</h1>
      <p className="tracking-wide leading-relaxed text-neutral-300">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Whether you have a question or
        just want to say hi — I’ll try my best to get back to you!
      </p>

      <Footer />
    </section>
  );
}
