import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Anit Baranwal<span className="text-blue-500"></span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-transparent bg-clip-text bg-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-500 font-semibold text-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-transparent bg-clip-text bg-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-500 font-semibold text-lg"
            >
              About
            </a>
            {/* <a
              href="#projects"
              className="text-gray-800 text-lg font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
            >
              Project
            </a> */}
            <a
              href="#projects"
              className="text-transparent bg-clip-text bg-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-500 font-semibold text-lg"
            >
              Project
            </a>

            {/* <a
              href="#contact1"
              className="px-4 py-1 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Contact1
            </a> */}
            <a
              href="#contact"
              className="text-transparent bg-clip-text bg-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-500 font-semibold text-lg"
            >
              Contact
            </a>
            {/* <a
              href="#contact3"
              className="text-gray-700 text-lg font-semibold px-3 py-1 border border-transparent hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 rounded"
            >
              Contact3
            </a> */}
            {/* <a
              href="https://drive.google.com/file/d/1uzMenbFWlsfVnnC7cHgcbkltzYDe7-z3/view?usp=drive_link"
              target="blank"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Resume
            </a>
            <button class="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span class="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              
              Resume
            </button> */}
            <a href="https://drive.google.com/file/d/1kaOlf6CNJG1KZ2NDnpmevCWaIFej3kHx/view?usp=sharing">
              <button type="button" class="cursor-pointer flex items-center gap-2.5 border border-gray-500/30 px-6 py-3 text-sm text-gray-800 rounded bg-white hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30 active:scale-95 transition">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 12.5V1.003S3.5.5 4 .5h11s.5.002.5.502v13s0 1.498-1.5 1.498H2s-1.5.002-1.5-1.998v-7.5S.5 5.5 1 5.5h1m4.5-2H9m-2.5 2h6m-6 2h6m-6 2h6m-6 2h6" stroke="#60A5FA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
