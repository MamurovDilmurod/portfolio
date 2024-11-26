import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TailwindaCss from "../assets/tailwind css.webp"; // 1
// import Quiz from "../assets/quiz.avif"; // 2
import Quiz from "../assets/quiz.jpg"; // 2
import Teplodom from "../assets/_PENOPLEKS.png"; // 3
import fastFood from '../assets/FastFood.jpg'; // 4
import Necsent from '../assets/Nexcent.svg'

function ProjectSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const projects = [
    {
      id: 1,
      name: "Fast Food Restaurant",
      description: "This is a fast food restaurant website.",
      homepage: "https://fast-food-mocha.vercel.app/",
      image: fastFood,
    },
    {
      id: 2,
      name: "Quiz Application",
      description: "This is a quiz app built with modern web technologies.",
      homepage: "https://react-quiz-app-nine-henna.vercel.app/",
      image: Quiz,
    },
    {
      id: 3,
      name: "Tailwind CSS Project",
      description: "This is a project showcasing Tailwind CSS integration.",
      homepage: "https://tailwindcss-figma.vercel.app/",
      image: TailwindaCss,
    },

    {
      id: 4,
      name: "Teplodom Project",
      description: "This is a construction project management tool.",
      homepage: "https://teplodom-rho.vercel.app/",
      image: Teplodom,
    },
    {
      id: 5,
      name: "Nexcent Project",
      description: "This is a project showcasing Tailwind CSS integration.",
      homepage: "https://nexcent-mocha.vercel.app/",
      image: Necsent,
    },
  ];

  return (
    <section className="py-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-down">
        My Projects
      </h2>
      <div
        id="projects"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6"
      >
        {projects.map((project) => (
          <div className="hover:scale-105 transform transition duration-300">
            <div
              key={project.id}
              className="project-container bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              data-aos="zoom-in"
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full object-cover h-48 sm:h-56 md:h-64 lg:h-72"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description || "No description provided."}
                </p>
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
