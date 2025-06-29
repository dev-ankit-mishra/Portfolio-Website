import Cards from "./MajorProjectCard/Cards";

export default function Project() {
  return (
    <section
      className=" w-full bg-gradient-to-br py-6 from-[#1e1b4b] via-[#312e81] to-[#1e1b4b]





"
      id="Projects"
    >
      <header>
        <h1 className="text-2xl md:text-3xl text-center font-bold pt-6 pb-2 text-neutral-100">
          Major Project
        </h1>
        <div className="w-10 h-1 bg-blue-500 hover:w-24 transition-all duration-200 rounded-2xl mx-auto mt-2 mb-4" />
      </header>
      <main className="w-full h-full  flex flex-col  gap-10  md:flex-row md:justify-evenly px-4 items-center py-4 lg:pb-24  ">
        <Cards />
      </main>
    </section>
  );
}
