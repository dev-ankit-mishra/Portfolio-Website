import NavBar from "./components/NavBar";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Skill from "./components/Skills";
import Project from "./components/Project";
import Achievements from "./components/Achievements";
import Certification from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <About />
      <Skill />
      <Project />
      <Achievements />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
}
