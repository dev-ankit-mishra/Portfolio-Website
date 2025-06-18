import Cards from "./MajorProjectCard/Cards";

export default function Project() {
  return (
    <section
      className=" w-full h-screen bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e1b4b]





"
      id="Projects"
    >
      <header>
        <h1 className="text-3xl text-center font-bold pt-8 pb-2 text-neutral-100">
          Major Project
        </h1>
        <div className="w-10 h-1 bg-blue-500 hover:w-24 transition-all duration-200 rounded-2xl mx-auto mt-2" />
      </header>
      <main className="w-full h-full  flex flex-row justify-evenly items-center pb-24  ">
        <Cards />
      </main>
    </section>
  );
}
