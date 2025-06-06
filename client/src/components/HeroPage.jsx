import Resume from "../assets/resume.pdf";

export default function HeroPage() {
  return (
    <section
      id="Home"
      className="w-full h-screen text-white flex items-center justify-center bg-slate-600"
    >
      <div className="w-full flex flex-row flex-wrap justify-center items-center">
        {/* Left Section: Name and Title */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center p-2">Ankit Mishra</h1>
          <h2 className="text-2xl font-semibold text-gray-300 text-center p-2">
            I'm a Software Enthusiast
          </h2>
          <button
            id="resume"
            className="bg-slate-900 rounded-2xl border border-white mt-8 hover:bg-slate-950 cursor-pointer"
          >
            <h2 className="text-xl font-medium text-center p-4">
              Download Resume
            </h2>
          </button>
        </div>

        {/* Right Section: Profile Image */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?semt=ais_hybrid"
            alt="profile-picture"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
