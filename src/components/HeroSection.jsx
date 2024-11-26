import React, { useEffect } from "react";
import ozim from "../assets/ozimmmmmmm.jpg"; // Your image import
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []); // Ensures useEffect runs only once

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 px-4 sm:px-8 py-12">
      {/* Left Section */}
      <div
        className="col-span-1 sm:col-span-7 place-self-center text-center sm:text-left"
        data-aos="fade-right" // Animation for left section
      >
        <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 via-purple-600 to-pink-500">
            Hello I'm
          </span>
          <br />
          <TypeAnimation
            sequence={["Dilmurod", 1000, "Frontend Developer", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "48px", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <p
          className="text-gray-400 text-base sm:text-lg lg:text-xl mb-4"
          data-aos="fade-up" // Animation for paragraph
        >
          It's been a year since I got into programming. <br /> My goal is to
          become a senior developer and participate in more projects.
        </p>
        <div>
          <a
            href="https://github.com/FrontendDeveloperDilmurod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="w-full sm:w-auto text-white bg-gradient-to-l from-blue-500 via-purple-600 to-pink-500 font-bold rounded-full py-3 px-6 mr-4 transition duration-300 hover:from-blue-400 hover:via-purple-500 hover:to-pink-400"
              data-aos="zoom-in" // Button animation
            >
              GitHub
            </button>
          </a>

          {/* Uncomment if you want to add a "Download CV" button */}
          {/* <button
            className="w-full sm:w-auto font-bold border-white border text-white rounded-full py-3 px-6 hover:text-slate-50 mt-4 sm:mt-0"
            data-aos="zoom-in"
          >
            Download CV
          </button> */}
        </div>
      </div>

      {/* Right Section (Image) */}
      <div
        className="col-span-1 sm:col-span-5 place-self-center"
        data-aos="fade-left" // Animation for right section (image)
      >
        <div className="mt-4 overflow-hidden bg-transparent">
          <img
            src={ozim}
            alt="logo"
            className="w-full h-auto object-cover focus:scale-105 hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
