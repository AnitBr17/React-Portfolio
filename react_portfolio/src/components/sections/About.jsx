import React from "react";
import RevealOnScroll from "../RevealOnScroll";
// import {
//   FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
// } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiMongodb, SiFirebase, SiCplusplus, SiPython, SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';

const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React.js", "TypeScript", "TailwindCSS", "Redux"];
  const backendSkills = ["Node.js", "MondoDB", "Firebase"];

  return (
    <section
      id="about"
      className="min-h-[60vh] flex items-center justify-center py-5"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-evenly flex-wrap gap-6 text-5xl text-gray-700">
              {/* <FaHtml5 className="hover:text-orange-600 transition" title="HTML5" />
              <FaCss3Alt className="hover:text-blue-600 transition" title="CSS3" />
              <FaJs className="hover:text-yellow-500 transition" title="JavaScript" />
              <FaReact className="hover:text-blue-400 transition" title="React" />
              <FaNodeJs className="hover:text-green-600 transition" title="Node.js" /> */}
              <FaHtml5 className="text-5xl text-orange-400 hover:animate-bounce" title="HTML5" />
              <FaCss3Alt className="text-5xl text-blue-400 hover:animate-bounce" title="CSS3" />
              {/* <FaJs className="text-5xl text-yellow-400 hover:animate-pulse" title="JavaScript" /> */}
              <FaJs className="text-5xl text-yellow-400 hover:animate-bounce" title="JavaScript" />
              <FaReact className="text-5xl text-cyan-400 hover:animate-bounce" title="React" />
              {/* <FaReact className="text-5xl text-green-600 hover:drop-shadow-lg hover:text-white hover:bg-green-600 p-2 rounded transition duration-300" title="React" /> */}
              <FaNodeJs className="text-5xl text-green-400 hover:animate-bounce" title="Node.js" />
              <SiFirebase className="text-5xl text-yellow-400 hover:animate-bounce" title="Firebase" />
              <SiTypescript className="text-5xl text-blue-400 hover:animate-bounce" title="Typescript" />
              <SiMongodb className="text-5xl text-green-400 hover:animate-bounce" title="MongoDB" />
              <SiTailwindcss className="text-5xl text-sky-400 hover:animate-bounce" title="Tailwindcss " />
              {/* <SiPython
                className="text-5xl text-yellow-400 hover:animate-bounce"
                title="Python"
              /> */}
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.tech IN Computer Science</strong> - RGPV University
                  (2020-2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
