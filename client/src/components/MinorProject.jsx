import assemblyGame from "../assets/assemblyGame.png";
import gameTenzie from "../assets/gameTenzie.png";

export default function MinorProject() {
  const techStackItems = [
    {
      label: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      label: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      label: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
  ];

  const buttonsItem = [
    { label: "Live", href: "https://end-assembly-game.netlify.app/" },
    {
      label: "Code",
      href: "https://github.com/dev-ankit-mishra/Assembly-EndGame",
    },
  ];

  const buttons = buttonsItem.map((btn) => {
    return (
      <a className="bg-blue-600 px-2 py-1 rounded-lg" href={btn.href}>
        {btn.label}
      </a>
    );
  });

  const techs = techStackItems.map((item) => {
    return (
      <span className="rounded-lg bg-neutral-800 px-2 py-1 text-sm flex gap-2 justify-evenly items-center">
        <img src={item.src} className="w-4 h-4" />
        {item.label}
      </span>
    );
  });

  return (
    <section className="h-screen w-full bg-gradient-to-br from-[#0d0221] to-[#232526] text-white tracking-wide leading-relaxed">
      <header>
        <h1 className="text-3xl text-center font-semibold py-3 pt-6 ">
          Minor Project
        </h1>
        <div className="h-1 w-20 bg-blue-500 mt-1 mx-auto"></div>
      </header>
      <main className="w-full h-full flex flex-row justify-evenly items-center gap-x-6 pb-28">
        <div className="group relative w-full max-w-md rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm p-5 text-white shadow-lg transition-all duration-200 hover:scale-103 hover:shadow-2xl hover:ring-1 hover:ring-indigo-400">
          {/* Image */}
          <img
            src={gameTenzie}
            alt="Assembly Game"
            className="w-full h-50 object-cover rounded-t-2xl mb-4"
          />

          {/* Title */}
          <h2 className="text-xl font-bold text-white tracking-tight">
            Assembly EndGame
          </h2>

          {/* Description */}
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            A Wordle-style game where you guess tech terms to stop Assembly from
            taking over. Built with React and CSS, it features keyboard input,
            real-time feedback, and a fun programming twist.
          </p>

          {/* Quote / Subtitle */}
          <p className="mt-3 border-l-4 border-blue-400 pl-4 text-gray-400 italic text-sm">
            Save your favorite languages before Assembly takes over! <br />
            <span className="not-italic">
              Inspired by Wordle, customized for devs.
            </span>
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-900/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
              CSS
            </span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
              JavaScript
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
            >
              Live
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg border border-gray-500 text-gray-300 font-medium hover:border-white hover:text-white transition"
            >
              Code
            </a>
          </div>
        </div>
        <div className="group w-md p-5 bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-103 shadow-xl shadow-black/40 hover:ring-1 hover:ring-indigo-500 transition-all duration-200 rounded-2xl">
          <img
            src={tenzie}
            className="w-full rounded-t-2xl h-48 object-cover"
          />

          <h1 className="text-xl font-bold tracking-tight mt-4">
            Tenzie's Game
          </h1>
          <p className="text-sm leading-relaxed text-gray-300 mt-3">
            A fast-paced dice game built with React and Vite. Match all ten dice
            to the same number by freezing and rolling smartly — a quick
            challenge of luck and logic.
          </p>
          <p className="text-sm italic tracking-wide mt-4 text-gray-400 px-4 border-l-4 border-l-indigo-500">
            Master the dice, beat the odds.
            <br />
            <span className="not-italic">
              Inspired by the classic Tenzi game, reimagined for the web.
            </span>
          </p>
          <div className="text-sm flex gap-3 mt-4 font-medium tracking-tight items-center">
            <span className="px-3 py-1 rounded-2xl bg-neutral-600">React</span>
            <span className="px-3 py-1 rounded-2xl bg-blue-600">
              Typescript
            </span>
            <span className="px-3 py-1 rounded-2xl bg-cyan-700">Css</span>
          </div>
          <div className="mt-6 flex gap-4 items-center font-medium">
            <button className="py-2 px-4 rounded-lg bg-indigo-500  hover:bg-indigo-600  transition-all duration-200 cursor-pointer">
              Live
            </button>
            <button className="py-2 px-4 rounded-lg bg-transparent text-gray-300  border border-gray-500 hover:bg-subtle hover:border-gray-50 hover:text-gray-50 transition-all duration-200 cursor-pointer">
              Code
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
