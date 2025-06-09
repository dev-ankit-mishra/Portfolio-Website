export default function Skills() {
  return (
    <section
      className="scroll-mt-16 w-full h-screen box-border bg-slate-800"
      id="Skills"
    >
      <h1 className="h-14 text-3xl font-semibold text-center text-white">
        Skills
      </h1>

      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center place-content-center pb-10 px-4">
        {/* Languages */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Languages
          </p>
          <div className="grid grid-cols-3 gap-4 place-items-center">
            {/* Replace these with icons or images */}
            <span className="text-white">Java</span>
            <span className="text-white">C++</span>
            <span className="text-white">JavaScript</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Frontend
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">React, Tailwind</span>
          </div>
        </div>

        {/* Backend */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Backend
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">Node, Express</span>
          </div>
        </div>

        {/* Databases */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Databases
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">MongoDB, MySQL</span>
          </div>
        </div>

        {/* Libraries/Frameworks */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Libraries & Frameworks
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">React, Tailwind, Express</span>
          </div>
        </div>

        {/* Tools */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Tools
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">Git, VSCode, Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
}
