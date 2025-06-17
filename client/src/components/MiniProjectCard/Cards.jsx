import assemblyGame from "../../assets/assemblyGame.png";

export default function Cards() {
  const CardItems = [
    {
      id: 1,
      label: "Assembly Game",
      desc: " A Wordle-style game where you guess tech terms to stop Assembly from   taking over. Built with React and CSS, it features keyboard input real-time feedback, and a fun programming twist.",
      quote: "Save your favorite languages before Assembly takes over!",
      subtitle: "Inspired by Wordle, customized for devs.",
      src: { assemblyGame },
      tech: "",
    },
  ];
}
