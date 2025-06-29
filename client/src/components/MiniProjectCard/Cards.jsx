import gameDeckImg from "../../assets/gameDeck.png";
import movieWatchListImg from "../../assets/movieWatchList.png";
import assemblyGameImg from "../../assets/assemblyGame.png";
import gameTenzieImg from "../../assets/gameTenzie.png";
import {
  assemblyGame,
  tenzieGame,
  deckGame,
  movieWatchlist,
} from "./CardsTechStack";
import { Code2, ExternalLink } from "lucide-react";

const cardItems = [
  {
    id: 1,
    src: assemblyGameImg,
    label: "Assembly EndGame",
    desc: "A Wordle-style game where you guess tech terms to stop Assembly. Built with React and CSS, featuring real-time feedback, keyboard input, and a fun coding twist.",
    quote: "Save your favorite languages before Assembly takes over!",
    sub_title: "Inspired by Wordle, customized for devs.",
    tech: assemblyGame,
    live: "https://end-assembly-game.netlify.app/",
    code: "https://github.com/dev-ankit-mishra/Assembly-EndGame",
  },
  {
    id: 2,
    src: gameTenzieImg,
    label: "Tenzie Game",
    desc: "A fast-paced dice game built with React and Vite. Match all ten dice to the same number by freezing and rolling smartly — a quick challenge of luck and logic.",
    quote: " Master the dice, beat the odds.",
    sub_title: "Inspired by the classic Tenzi game, reimagined for the web.",
    tech: tenzieGame,
    live: "https://gametenzie.netlify.app/",
    code: "https://github.com/dev-ankit-mishra/TenziesGame",
  },
  {
    id: 3,
    src: gameDeckImg,
    label: "Deck Game",
    desc: "A fast-paced card game built with JavaScript. Draw cards, beat the computer, and track your score in this quick game of luck and logic.",
    quote: "In the game of chance, every draw is a fresh start.",
    sub_title:
      "Inspired by the timeless thrill of card flips — reimagined for the browser.",
    tech: deckGame,
    live: "https://game-deck.netlify.app/",
    code: "https://github.com/dev-ankit-mishra/DeckGame",
  },
  {
    id: 4,
    src: movieWatchListImg,
    label: "Movie WatchList",
    desc: "Search and save your favorite movies using real-time data from the OMDb API. Browse details, build a personal watchlist, and explore a wide range of films .",
    quote: "Discover stories. Build your list.",
    sub_title: "Search. Save. Watch — your personal movie companion.",
    tech: movieWatchlist,
    live: "https://watchlists-movies.netlify.app/",
    code: "https://github.com/dev-ankit-mishra/Movie-Watchlist",
  },
];

export const cards = cardItems.map((item) => {
  return (
    <div
      key={item.id}
      className="group relative w-[19rem] h-[28rem] lg:w-[23.5rem] lg:h-[33rem] rounded-2xl bg-gradient-to-br border border-white/10 from-gray-800 to-gray-900 backdrop-blur-sm p-5 text-white shadow-lg transition-all duration-150 hover:scale-103 hover:shadow-2xl hover:ring-1 hover:ring-indigo-400"
    >
      {/* Image */}
      <img
        src={item.src}
        alt={item.label}
        className="w-full h-28 lg:h-40 object-cover rounded-t-2xl mb-4"
      />

      {/* Title */}
      <h2 className="text-lg lg:text-xl font-bold text-white tracking-tight">
        {item.label}
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-300 text-xs lg:text-sm leading-relaxed">
        {item.desc}
      </p>

      {/* Quote / Subtitle */}
      <p className="mt-3 border-l-4 border-blue-400 pl-4 text-gray-400 italic text-xs lg:text-sm">
        {item.quote} <br />
        <span className="not-italic">{item.sub_title}</span>
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {item.tech.map((obj) => {
          return (
            <span
              key={obj.id}
              className={`${obj.bgClass} px-3 py-1 rounded-full text-xs lg:text-sm font-medium`}
            >
              {obj.label}
            </span>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition flex gap-2 items-center"
        >
          <ExternalLink size={16} /> Live
        </a>
        <a
          href={item.code}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-lg border border-gray-500 text-gray-300 font-medium hover:border-white hover:text-white transition flex gap-2 items-center"
        >
          <Code2 size={16} /> Code
        </a>
      </div>
    </div>
  );
});
