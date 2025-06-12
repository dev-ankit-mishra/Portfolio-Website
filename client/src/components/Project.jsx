import CodeImg from "../assets/image.png";

export default function Project() {
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
      <main className="w-full h-full flex flex-row justify-center items-center pb-20 ">
        <div className="w-90 h-140 bg-neutral-700 rounded-xl text-neutral-100">
          <img
            src={CodeImg}
            className="w-85 h-40 px-3 py-4 mx-auto rounded-3xl"
          />
          <h1 className="px-5 text-lg font-semibold">
            Collaborative Code Editor
          </h1>
          <p className="px-5 py-2">
            Build and edit code in real-time with others across the globe.
          </p>

          <h2 className="px-5 text-lg font-semibold">Key Features</h2>
          <ul className="pl-14 pr-5 list-disc">
            <li>Real-time code sync via WebSockets </li>
            <li>Multi-user support with live cursors </li>
            <li>Syntax highlighting for multiple langs</li>
            <li>File tree sidebar and tabbed editor </li>
            <li>Integrated terminal (coming soon)</li>
          </ul>
          <div className="px-5 pt-2 flex flex-wrap gap-y-2 gap-x-2 ">
            <span class="bg-neutral-900 px-2 py-1  rounded-lg">React</span>
            <span class="bg-neutral-900 px-2 py-1  rounded-lg">Node.js</span>
            <span class="bg-neutral-900 px-2 py-1  rounded-lg">Express</span>
            <span class="bg-neutral-900 px-2 py-1  rounded-lg">Monaco</span>
            <span class="bg-neutral-900 px-2 py-1 rounded-lg">Socket.Io</span>
          </div>
          <div className="px-5 pt-3 flex justify-between">
            <button className="bg-blue-500 px-3 py-2 rounded-xl">
              Live Demo
            </button>
            <button className="bg-blue-500 px-3 py-2 rounded-xl">Code</button>
          </div>
        </div>
      </main>
    </section>
  );
}
