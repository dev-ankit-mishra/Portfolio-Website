export default function Contact() {
  return (
    <section
      className="scroll-mt-20 w-full min-h-screen relative bg-slate-800"
      id="Contact"
    >
      <div className="w-full h-20 p-4">
        <h2 className="text-2xl text-white font-medium text-center pt-1">
          Get in Touch
        </h2>
        <h1 className="text-3xl text-white font-semibold text-center">
          Contact Me
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-evenly px-4 py-6 gap-8">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            className="rounded-full h-80 w-[25rem] object-cover"
            src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_640.jpg"
            alt="Developer"
          />
        </div>

        {/* Contact Form */}
        <form
          action=""
          className="flex flex-col items-center justify-center gap-2 bg-slate-700 p-6 rounded-2xl shadow-lg"
        >
          <label htmlFor="name" className="text-xl font-medium text-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Ankit Mishra"
            className="w-60 border-2 rounded-2xl bg-slate-900 text-white p-2"
          />

          <label htmlFor="email" className="text-xl font-medium text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. ankitmishra@gmail.com"
            className="w-60 border-2 rounded-2xl bg-slate-900 text-white p-2"
          />

          <label htmlFor="message" className="text-xl font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            cols="30"
            rows="5"
            placeholder="e.g. Hello, how are you doing?"
            className="w-60 border-2 rounded-2xl bg-slate-900 text-white p-2"
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className="w-60 border-2 bg-blue-800 text-white rounded-2xl p-2 mt-2 cursor-pointer hover:bg-blue-950"
          />
        </form>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full h-10 flex items-center justify-center p-3 bg-slate-950">
        <p className="text-center text-white text-sm">
          © 2025 Ankit Mishra Development. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
