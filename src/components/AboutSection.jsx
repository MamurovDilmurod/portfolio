import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutMe from "../assets/aboutMe.jpg";

const AboutSection = () => {
  const [tab, setTab] = useState(""); // Default bo'lim bo'sh

  useEffect(() => {
    AOS.init({
      duration: 1000,
      // easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section id="about" className="text-white py-16">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <img
          className="rounded-md focus:scale-105 hover:scale-105 duration-100 object-contain mx-auto"
          src={aboutMe}
          alt="About"
          width={500}
          data-aos="fade-up"
        />
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mt-[30px] mb-4 text-white">
            About Me
          </h2>
          <p className="py-4 text-base md:text-lg">
            My name is Dilmurod, I am 19 years old and a front-end developer. I
            was born in Kokand, Fergana and graduated from the PDP Academy,
            where I built a solid foundation in modern web technologies. I have
            knowledge of HTML, CSS, JavaScript and React.js, I am a fast
            learner, I strive to quickly adapt to new technologies and
            constantly improve my skills. In the future, I aim to become a
            full-stack developer and continue to specialize in front-end
            technologies, while studying the back-end side of development.
          </p>
          <div className="grid gap-4 md:flex w-auto">
            <button
              onClick={() => setTab(tab === "Skills" ? "" : "Skills")}
              className={`bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-bold py-2 px-4 rounded-full ${
                tab === "Skills" ? "bg-blue-700" : ""
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setTab(tab === "Education" ? "" : "Education")}
              className={`bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-bold py-2 px-4 rounded-full ${
                tab === "Education" ? "bg-blue-700" : ""
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setTab(tab === "Experience" ? "" : "Experience")}
              className={`bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-bold py-2 px-4 rounded-full ${
                tab === "Experience" ? "bg-blue-700" : ""
              }`}
            >
              Experience
            </button>
          </div>

          <div className="mt-8">
            {tab === "Skills" && (
              <ul className="text-lg space-y-1">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> HTML
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> React JS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> GitHub
                </li>
              </ul>
            )}

            {tab === "Education" && (
              <div className="text-lg space-y-3">
                <h3 className="font-semibold text-xl">
                  PDP Academy, 2023 - 2024
                </h3>
                <p>
                  Men PDP Academy’da Frontend Development bo'yicha o'quv
                  kurslarini tamomlamoqdaman. Asosiy yo'nalishim veb dasturlash
                  va interaktiv tizimlar yaratish.
                </p>
              </div>
            )}

            {tab === "Experience" && (
              <div className="text-lg space-y-3">
                <h3 className="font-semibold text-xl">Frontend Developer</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    React.js va Tailwind CSS yordamida web ilovalarni yaratish
                  </li>
                </ul>

                <h3 className="font-semibold text-xl mt-4">
                  Junior Frontend Developer
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    HTML, CSS va JavaScript orqali statik saytlar yaratish
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
