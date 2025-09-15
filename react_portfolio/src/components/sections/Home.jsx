import React, { useState, useEffect, useRef } from "react";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const roles = useRef([
    "a Full-Stack Developer",
    "a Frontend Developer",
    "a UI/UX Designer",
    "a Web Enthusiast",
  ]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    let timeout;
    const currentText = roles.current[currentRoleIndex % roles.current.length];
    const prefix = "I'm ";

    if (isTyping) {
      if (displayText.length < (prefix + currentText).length) {
        timeout = setTimeout(() => {
          setDisplayText(
            (prefix + currentText).substring(0, displayText.length + 1)
          );
        }, 100 + Math.random() * 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > prefix.length) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setCurrentRoleIndex(currentRoleIndex + 1);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isTyping]);

  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex flex-col md:flex-row md:items-center md:justify-center md:space-x-10">
          {/* Profile Picture */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src="/profile1.jpg"
              alt="Anit Baranwal"
              className="mt-10 w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-lg object-full mx-auto"
            />
          </div>

          {/* Intro Text */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Anit Baranwal
            </h1>
            <h5 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mt-2">
              {displayText}
              <span
                className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            </h5>

            <p className="text-gray-400 text-base md:text-lg mt-4 mb-8 max-w-lg mx-auto md:mx-0">
              I craft digital experiences that are fast, intuitive, and
              beautiful. Currently focused on building responsive web
              applications with modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://drive.google.com/file/d/1r5TnQnXP6Aw10nBiKcTnjayQnFBj7GhX/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-500/30 hover:border-blue-500/70 text-blue-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-blue-500/20"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
