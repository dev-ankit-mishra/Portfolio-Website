import websiteImg from "../assets/Website.png";

export default function Project() {
  return (
    <section
      className="scroll-mt-16 w-full min-h-screen bg-slate-800 py-8"
      id="Projects"
    >
      <h1 className="text-3xl font-semibold text-white text-center mb-6">
        Projects
      </h1>

      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-start gap-8 px-4">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="w-[22rem] min-h-[34rem] rounded-2xl bg-sky-900 flex flex-col shadow-lg hover:shadow-xl transition"
          >
            <img className="p-4 rounded-2xl" src={websiteImg} alt="Project" />
            <h1 className="text-lg font-medium text-white px-4 pb-2">
              Portfolio Website
            </h1>
            <p className="text-md font-normal text-white text-left px-4 pb-2 leading-6">
              This portfolio showcases my expertise in full-stack development,
              featuring projects that highlight skills in frontend, backend, and
              problem-solving. Each project is carefully crafted to demonstrate
              scalable and user-friendly solutions.
            </p>
            <div className="flex flex-wrap px-4 py-2 gap-2">
              <span className="text-sm rounded-xl bg-slate-800 px-3 py-1 text-white">
                HTML
              </span>
              <span className="text-sm rounded-xl bg-slate-800 px-3 py-1 text-white">
                CSS Tailwind
              </span>
              <span className="text-sm rounded-xl bg-slate-800 px-3 py-1 text-white">
                JavaScript
              </span>
            </div>
            <button
              id={`project${index + 1}`}
              type="button"
              className="w-[90%] mx-auto my-4 h-10 rounded-xl bg-slate-800 hover:bg-slate-900 text-white"
            >
              View more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
