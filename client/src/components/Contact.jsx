import { lazy, Suspense } from "react";

const ContactForm = lazy(() => {
  return import("./ContactForm");
});
const Footer = lazy(() => import("./Footer"));

export default function Contact() {
  return (
    <section
      id="Contact"
      className="
        w-full h-fit xl:h-screen flex flex-col gap-4 
        text-gray-800 dark:text-neutral-100 
        bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] 
        dark:from-[#000000] dark:to-[#141e30]
      "
    >
      <main
        className="
          flex-1 2xl:px-70 xl:px-60 md:px-24 lg:px-36 px-10 
          space-y-4 pb-4 xl:pb-0 lg:pt-4 xl:pt-8
        "
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-12">
          Let's Connect
        </h1>
        <p className="tracking-wide text-xs md:text-sm lg:text-base leading-relaxed text-gray-700 dark:text-neutral-200">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Whether you have a question
          or just want to say hi — I’ll try my best to get back to you!
        </p>
        <Suspense fallback={<h2>Loading...</h2>}>
          <ContactForm />
        </Suspense>
      </main>

      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </section>
  );
}
