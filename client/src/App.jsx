import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Skill from "./components/Skills";
import MajorProject from "./components/MajorProject";
import MinorProject from "./components/MinorProject";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
export default function App() {
  return (
    <>
      <div className="scroll-smooth">
        <HeroPage />
        <About />
        <Skill />
        <MajorProject />
        <MinorProject />
        <Achievements />
        <Contact />
      </div>
    </>
  );
}
