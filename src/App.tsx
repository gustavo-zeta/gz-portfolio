import { MotionConfig } from "framer-motion";
import { Suspense, lazy } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Playground from "./components/Playground";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

// The 3D layer is the heaviest asset (three.js), so it ships as its own
// chunk and streams in behind the interface — content paints first.
const Scene = lazy(() => import("./components/Scene"));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-svh flex-col overflow-x-clip">
        {/* Fixed 3D layer behind everything; glass surfaces blur it live. */}
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <div className="grain" aria-hidden="true" />

        <Nav />

        <main className="relative z-10 flex-1">
          <Hero />
          <About />
          <Projects />
          <Playground />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
