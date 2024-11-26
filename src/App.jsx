import React from "react";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import "aos/dist/aos.css";
import "./App.css";
import Skills from "./components/Skills";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div id="home" className=" flex min-h-screen flex-col  ">
      <Nav />
      <div className="container mx-auto px-12 py-4 mt-28">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Skills />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
