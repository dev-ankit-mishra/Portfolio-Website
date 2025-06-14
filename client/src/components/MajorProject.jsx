import Cards from "./ProjectCards/Cards";

export default function Project() {
  return (
    <section
      className="scroll-mt-10 w-full h-screen bg-neutral-950"
      id="Projects"
    >
      <header>
        <h1 className="text-3xl text-center font-semibold pt-10 pb-3 text-neutral-100">
          Major Project
        </h1>
        <div className="w-24 h-1 bg-blue-500 rounded-2xl mx-auto mt-2"></div>
      </header>
      <main className="w-full h-full tracking-wide leading-relaxed flex flex-row justify-evenly items-center pb-35  ">
        <Cards />
      </main>
    </section>
  );
}
