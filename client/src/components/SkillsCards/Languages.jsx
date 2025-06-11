export default function Languages() {
  const languagesItems = [
    {
      id: 1,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      label: "C",
    },
    {
      id: 2,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      label: "TypeScript",
    },
    {
      id: 3,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      label: "Java",
    },
    {
      id: 4,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      label: "JavaScript",
    },
    {
      id: 5,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      label: "C++",
    },
    {
      id: 6,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      label: "Python",
    },
  ];

  const languages = languagesItems.map((lang) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* single skill */}
        <div className="flex flex-col items-center">
          <img
            className="w-8 h-8 hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-400/30 rounded-md"
            src={lang.src}
            alt={lang.label + "-icon"}
          />
          <span className="text-sm text-neutral-200 mt-1">{lang.label}</span>
        </div>
      </motion.div>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1000}
        gyroscope={true}
      >
        {/* your card here */}
        <div className="w-[20rem] h-65  bg-gradient-to-b from-[#1a1a1f] to-[#23232a] tracking-wide border border-white/50 rounded-2xl shadow-xl ">
          <p className="text-xl  text-center font-[550] text-neutral-200 pt-6 mb-1">
            Languages
          </p>
          <div className="mx-auto w-24 h-1 bg-blue-500 rounded mb-1 transition-all duration-200 hover:w-20"></div>
          <div
            className="grid grid-cols-3 gap-y-6 py-6 px-6
           place-items-center "
          >
            {/* Replace these with icons or images */}

            {languages}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
