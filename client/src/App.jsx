import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet"; // 🧠 SEO tags
import heroimage from "./assets/heroimage.webp";

// Eagerly loaded components
import HeroPage from "./components/HeroPage";
import About from "./components/About";

// Lazy loaded components
const Skill = lazy(() => import("./components/Skills"));
const MajorProject = lazy(() => import("./components/MajorProject"));
const MinorProject = lazy(() => import("./components/MinorProject"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  return (
    <div className="scroll-smooth">
      <Helmet>
        <title>Ankit Mishra | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Ankit Mishra – full-stack developer skilled in React.js, Node.js, MongoDB, Express, DevOps, and DSA. Explore major projects, achievements, and contact details."
        />

        <meta
          property="og:title"
          content="Ankit Mishra | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="React, Next.js, Node.js developer with strong DSA skills and 1000+ GitHub contributions. Final-year MCA student building scalable, user-centric apps."
        />
        <meta property="og:image" content={heroimage} />
        <meta property="og:url" content="https://ankitmishra.pro" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Components */}
      <HeroPage />
      <About />

      <Suspense
        fallback={<div className="text-center py-10">Loading sections...</div>}
      >
        <Skill />
        <MajorProject />
        <MinorProject />
        <Achievements />
        <Contact />
      </Suspense>
    </div>
  );
}
