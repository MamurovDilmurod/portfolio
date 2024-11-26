import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TailwindaCss from "../assets/tailwind css.webp"; // 1
// import Quiz from "../assets/quiz.avif"; // 2
import Quiz from "../assets/quiz.jpg"; // 2
import Teplodom from "../assets/_PENOPLEKS.png"; // 3
import fastFood from '../assets/FastFood.jpg'; // 4
import Necsent from '../assets/Nexcent.svg'
import Netflix from '../assets/Netflix.avif'
import Pizza from '../assets/Pizza.jpg'
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
      name: "Netflix Clone",
      description: "This is a Netflix clone project.",
      homepage: "https://movies-mu-hazel.vercel.app/",
      image: Netflix,
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
      name: "Pizza Restaurant",
      description: "This is a pizza restaurant website.",
      homepage: "https://pitsa-order.vercel.app/",
      image: Pizza,
    },
    {
      id: 5,
      name: "Teplodom Project",
      description: "This is a construction project management tool.",
      homepage: "https://teplodom-rho.vercel.app/",
      image: Teplodom,
    },
    // {
    //   id: 5,
    //   name: "Nexcent Project",
    //   description: "This is a project showcasing Tailwind CSS integration.",
    //   homepage: "https://nexcent-mocha.vercel.app/",
    //   image: Necsent,
    // },
    {
      id: 6,
      name: "Quiz Application",
      description: "This is a quiz app built with modern web technologies.",
      homepage: "https://react-quiz-app-nine-henna.vercel.app/",
      image: Quiz,
    },

  ];

  return (
    <section className="py-12 text-white bg-gray-900">
      <h2 className="mb-8 text-4xl font-bold text-center" data-aos="fade-down">
        My Projects
      </h2>
      <div
        id="projects"
        className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <div className="transition duration-300 transform hover:scale-105">
            <div
              key={project.id}
              className="overflow-hidden transition duration-300 transform bg-gray-800 rounded-lg shadow-lg project-container hover:scale-105"
              data-aos="zoom-in"
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
                <p className="mb-4 text-gray-400">
                  {project.description || "No description provided."}
                </p>
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-400"
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
