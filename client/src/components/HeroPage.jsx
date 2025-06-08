import resume from "../assets/resume.pdf";
import NavBar from "./NavBar";

export default function HeroPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf"; // Name the file as you want
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="Home" className="w-full h-screen">
      <NavBar />

      <main className="w-full h-screen flex flex-row justify-center items-center  text-neutral-200  bg-neutral-950">
        {/* Left Section: Name and Title */}
        <div className="w-1/2 h-full  flex flex-col gap-y-4 justify-center items-center font-Inter">
          <h1 className="text-center tracking-wide text-4xl mt-14 font-bold">
            Hi, I'm Ankit Mishra
          </h1>
          <h2 className="text-center tracking-wide text-2xl font-semibold">
            Full-Stack Developer
          </h2>

          <p className="px-6 text-center text-lg tracking-wide leading-relaxed  font-normal mb-6 mt-1">
            I build interactive, scalable and responsive web apps using React,
            Next.js, and Node.js — from AI-powered tools to real-time
            collaboration platforms.
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mb-2"></div>
          <button
            onClick={handleDownload}
            className="py-3 px-6  text-xl font-medium border border-blue-600 text-blue-400 hover:bg-blue-800/20 hover:shadow-md hover:shadow-blue-600/30 transition duration-300  rounded-xl mt-8  cursor-pointer"
          >
            Download Resume
          </button>
        </div>

        {/* Right Section: Profile Image */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?semt=ais_hybrid"
            alt="profile-picture"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-xl"
          />
        </div>
      </main>
    </section>
  );
}
