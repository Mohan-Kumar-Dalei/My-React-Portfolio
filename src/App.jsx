import React, { useState, useEffect } from "react";
import Loader from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoaderTop from "./components/LoaderTop";
import './gsapConfig';
import useSectionAnimations from "./hooks/useSectionAnimations";
import SmoothScroll from "./components/SmoothScroll";
import String from "./components/String";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);
  useSectionAnimations(!isLoading);

  return (
    <div className="bg-[#0E0E0E] min-h-screen relative">
      {/* Fullscreen Overlay Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0E0E]">
          {/* Centered LoaderTop + Loader */}
          <div className="flex flex-col items-center justify-center gap-6">
            <LoaderTop />
            <Loader />
          </div>
        </div>
      )}


      {/* Main Content (hidden until loader ends) */}
      <div
        className={`transition-all duration-1000 ease-in-out ${isLoading ? "opacity-0 blur-sm pointer-events-none" : "opacity-100 blur-none"
          }`}
      >
        <Navbar isLoading={isLoading} />
        <SmoothScroll>
          {!isLoading && <Hero />}
          <String />
          <AboutMe />
          <String />
          <Skills />
          <String />
          <Projects />
          <String />
          <Contact />
          <Footer />
        </SmoothScroll>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
