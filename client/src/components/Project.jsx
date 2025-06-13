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
    </section>
  );
}
