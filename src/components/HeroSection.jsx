import React, { useEffect } from "react";
import ozim from "../assets/me.jpg"; // Your image import
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
    <div className="grid grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-12 sm:gap-4 sm:px-8">
      {/* Left Section */}
      <div
        className="col-span-1 text-center sm:col-span-7 place-self-center sm:text-left"
        data-aos="fade-right" // Animation for left section
      >
        <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-6xl">
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
          className="mb-4 text-base text-gray-400 sm:text-lg lg:text-xl"
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
              className="w-full px-6 py-3 mr-4 font-bold text-white transition duration-300 rounded-full sm:w-auto bg-gradient-to-l from-blue-500 via-purple-600 to-pink-500 hover:from-blue-400 hover:via-purple-500 hover:to-pink-400"
              data-aos="zoom-in" // Button animation
            >
              GitHub
            </button>
          </a>

          {/* Uncomment if you want to add a "Download CV" button */}
          {/* <button
            className="w-full px-6 py-3 mt-4 font-bold text-white border border-white rounded-full sm:w-auto hover:text-slate-50 sm:mt-0"
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
        <div className="mt-4 overflow-hidden bg-transparent border border-gray-300 rounded-lg shadow-lg">
          <img
            src={ozim}
            alt="logo"
            className="object-cover w-full h-auto transition-transform duration-300 rounded-lg focus:scale-105 hover:scale-110"
          />
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
