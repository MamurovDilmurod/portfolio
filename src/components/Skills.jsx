import React from "react";
import css from "../assets/css.svg";
import b from "../assets/b.svg";
import Next from "../assets/NextJs.png";
import html from "../assets/html.svg";
import reactImage from "../assets/react.svg";
import sass from "../assets/sass.svg";
import ta from "../assets/ta.svg";
import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import Github from '../assets/GITHUB.png'

function Skills() {
  const tech = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: sass, title: "Sass", style: "shadow-rose-400" },
    { id: 4, src: b, title: "Bootstrap", style: "shadow-violet-500" },
    { id: 5, src: ta, title: "Tailwind", style: "shadow-sky-400" },
    { id: 9, src: Github, title: "Github", style: "shadow-gray-500" },
    { id: 6, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 8, src: ts, title: "TypeScript", style: "shadow-sky-500" },
    { id: 7, src: reactImage, title: "React", style: "shadow-cyan-500" },
    { id: 10, src: Next, title: "NextJs", style: "shadow-orange-500" },
  ];

  return (
    <section id="skills" className="py-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-down">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-8 lg:px-16">
        {tech.map(({ id, src, title, style }) => (
          <div className="hover:scale-110 transition duration-500 ease-in-out p-2">
            <div
              key={id}
              className={`hover:scale-105 transform transition duration-300 ease-in-out ${style} bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center justify-center `}
              data-aos="zoom-in"
            >
              <img
                src={src}
                alt={`technology ${title}`}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain mb-4 "
              />
              <p className="text-lg sm:text-xl font-semibold text-center">
                {title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
