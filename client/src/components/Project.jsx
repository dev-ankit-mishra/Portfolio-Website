import CodeImg from "../assets/image.png";

export default function Project() {
  const techStackItems = [
    {
      label: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      label: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      label: "Express",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      label: "Socket.Io",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    },
    {
      label: "Tailwind",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ];

  return (
    <section
      className="scroll-mt-10 w-full h-screen bg-neutral-950"
      id="Projects"
    >
      <header>
        <h1 className="text-3xl text-center font-semibold pt-4 pb-3 text-neutral-100">
          Major Project
        </h1>
        <div className="w-24 h-1 bg-blue-500 rounded-2xl mx-auto mt-2"></div>
      </header>
      <main className="w-full h-full tracking-wide leading-relaxed flex flex-row justify-center items-center pb-20  ">
        <div className="relative  w-[360px] h-[290px] group  overflow-hidden bg-slate-900 rounded-lg text-neutral-100 transition-all duration-300 hover:h-[360px] border border-white">
          <img src={CodeImg} className="w-full h-48" />
          <h1 className=" text-xl px-3 mt-1 pt-3 font-semibold">
            Collaborative Code Editor
          </h1>
          <p className="px-3 pt-2 tracking-wide leading-relaxed text-sm">
            Built for teams. Powered by real-time collaboration
          </p>
          <div className="absolute inset-0 bg-slate-900 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="px-4 text-xl py-1 mt-2 font-semibold">
              Key Features
            </h2>
            <ul className="px-8 pt-1 mb-4 text-sm leading-relaxed tracking-wide list-disc ">
              <li>Real-time code sync via WebSockets </li>
              <li>Multi-user support with live cursors </li>
              <li>Syntax highlighting for multiple langs</li>
              <li>File tree sidebar and tabbed editor </li>
              <li>Integrated terminal (coming soon)</li>
            </ul>
            <h2 className="text-xl px-4 py-2 font-semibold border-t border-neutral-600 mt-4 pt-2">
              Tech Stack
            </h2>
            <div className="px-3  flex flex-wrap gap-y-1 gap-x-3 ">
              {techStackItems.map((item) => {
                return (
                  <span class="bg-neutral-700 flex gap-x-2 items-center px-3 py-2 text-xs rounded-lg">
                    <img src={item.src} className="w-4 h-4" />
                    {item.label}
                  </span>
                );
              })}
            </div>
            <div className="px-4 pt-3 flex justify-between mt-1">
              <button className="bg-blue-700 px-2 py-1 text-sm rounded-md">
                Live Demo
              </button>
              <button className="bg-blue-700 px-2 py-1 text-sm  rounded-md">
                Code
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
