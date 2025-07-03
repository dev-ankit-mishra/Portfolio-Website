import React, { Suspense, lazy } from "react";

// Eagerly load components that are visible above-the-fold
import HeroPage from "./components/HeroPage";
import About from "./components/About";

// Lazy load the rest
const Skill = lazy(() => import("./components/Skills"));
const MajorProject = lazy(() => import("./components/MajorProject"));
const MinorProject = lazy(() => import("./components/MinorProject"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  return (
    <div className="scroll-smooth">
      <HeroPage />
      <About />

      {/* Wrap lazy components in Suspense */}
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
