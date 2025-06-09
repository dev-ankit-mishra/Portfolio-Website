export default function About() {
  return (
    <section
      className=" scroll-mt-20 w-full h-screen bg-neutral-950"
      id="About"
    >
      <div className="w-full h-14">
        <h1 className="text-3xl text-white font-semibold text-center pt-2">
          About Me
        </h1>
      </div>

      <div className="w-full h-[90%] grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 place-items-center px-4 overflow-y-auto">
        <div className="w-[80%] h-auto rounded-3xl border-2 border-white bg-slate-900 p-4 row-span-2">
          <h1 className="text-3xl text-white font-medium text-center">
            Introduction
          </h1>
          <br />
          <p className="text-lg font-normal text-white">
            Hey there! I'm Ankit Mishra, a passionate software developer with
            expertise in Java, MERN stack, and React. I love solving complex
            problems and building scalable web applications. My coding journey
            started with Java, where I built a solid understanding of
            object-oriented programming.
            <br />
            <br />
            From there, I dived into full-stack web development using the MERN
            stack, creating dynamic and interactive applications. To sharpen my
            problem-solving skills, I actively participate in Codeforces
            contests and solve challenges on LeetCode.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="w-[80%] h-auto rounded-3xl border-2 border-white bg-slate-900 p-4">
          <h1 className="text-3xl text-white font-medium text-center">
            My Tech Stack and Expertise
          </h1>
          <br />
          <p className="text-lg font-normal text-white">
            <span className="font-medium">Languages:</span> Java, C++,
            JavaScript
            <br />
            <span className="font-medium">Frontend:</span> React.js, Tailwind
            CSS
            <br />
            <span className="font-medium">Backend:</span> Node.js, Express.js
            <br />
            <span className="font-medium">Databases:</span> MongoDB, MySQL
            <br />
            <span className="font-medium">Competitive Programming:</span>{" "}
            Codeforces, LeetCode
          </p>
        </div>

        {/* Currently Learning */}
        <div className="w-[80%] h-auto rounded-3xl border-2 border-white bg-slate-900 p-4">
          <h1 className="text-3xl text-white font-medium text-center">
            What I’m Currently Learning
          </h1>
          <br />
          <p className="text-lg font-normal text-white">
            Deepening my expertise in C++ for competitive programming, enhancing
            my React.js & Tailwind CSS skills while building this portfolio, and
            exploring scalable backend architectures.
          </p>
        </div>
      </div>
    </section>
  );
}
