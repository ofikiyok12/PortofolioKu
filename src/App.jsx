import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Lenis from "lenis";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import ScrollProgress from "./components/ui/ScrollProgress";
import LoadingScreen from "./components/ui/LoadingScreen";
import CustomCursor from "./components/ui/CustomCursor";
import ThemeToggle from "./components/ui/ThemeToggle";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Taufiq Andrian | Web Developer</title>
        <meta
          name="description"
          content="Taufiq Andrian - Fullstack Web Developer portfolio. Neo Brutalism design, creative web experiences with React, Laravel, and modern technologies."
        />
        <meta
          property="og:title"
          content="Taufiq Andrian - Fullstack Web Developer"
        />
        <meta
          property="og:description"
          content="Fullstack Web Developer crafting amazing web experiences."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground />

      <div className="paper-texture fixed inset-0 z-[1] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Gallery />
          <Contact />
        </main>

        <Footer />
      </div>

      <ThemeToggle />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
