import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import Portfolio1 from '../../assets/Moneycontrol.png';
import Portfolio2 from '../../assets/UrbanNights.png';
import Portfolio3 from '../../assets/Portfolio.png';
import Portfolio4 from '../../assets/Mercury.png';
import Portfolio5 from '../../assets/Tictactoe.png';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          
          {/* Card Layout - First Row
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
           
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Moneycontrol – Financial News & Market Tracker</h3>
              <img src={Portfolio1} alt="Moneycontrol Clone" className="rounded-lg mb-4" />
              <p className="text-gray-400 mb-4">
                Developed a fully responsive clone of the popular financial news platform Moneycontrol, replicating real-world
                UI/UX using clean, modular code.
                Implemented multiple sections including stock market updates, news feeds, and financial data visualizations.
                Focused on pixel-perfect design, layout responsiveness, and interactive UI elements for a seamless user experience.
                Enhanced DOM manipulation skills and applied real-time design techniques to build a professional-grade interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-evenly items-center">
                <a
                  href="https://moneycontroll-clone.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Nitheesh23/B42_WEB_012_Dev-Designers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Github →
                </a>
              </div>
            </div>

            
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">UrbanNights – Hotel Booking Application</h3>
              <img src={Portfolio2} alt="UrbanNights App" className="rounded-lg mb-4" />
              <p className="text-gray-400 mb-4">
                Designed and developed a fully responsive hotel booking application using React.js and Tailwind CSS.
                Created an intuitive user interface for browsing hotels, viewing details, and making reservations.
                Implemented responsive design principles for optimal viewing across devices.
                Integrated interactive features to enhance the user experience and streamline the booking process.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-evenly items-center">
                <a
                  href="https://urbannights-booking.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/yourusername/urbannights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Github →
                </a>
              </div>
            </div>

         
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Mercury – Web Banking Application Clone</h3>
              <img src={Portfolio4} alt="Mercury Banking App" className="rounded-lg mb-4" />
              <p className="text-gray-400 mb-4">
                Developed a responsive web banking application named Mercury Demo to simplify money management and enhance financial tracking for users.
                Focused on balancing finances with a clean, user-friendly interface for streamlined financial operations.
                Built using HTML, CSS, and JavaScript, ensuring intuitive functionality and a responsive design across devices.
                Emulated the design and features of the original Mercury Demo to replicate real-world banking UI/UX experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-evenly items-center">
                <a
                  href="https://mercurydemo-clone.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/irsuhail/B41_WEB_019_The-stylists/tree/main/WorkAnit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Github →
                </a>
              </div>
            </div>

          
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Tic Tac Toe</h3>
              <img src={Portfolio5} alt="Tic Tac Toe Game" className="rounded-lg mb-4" />
              <p className="text-gray-400 mb-4">
                Built an interactive two-player Tic Tac Toe game using HTML, CSS, and JavaScript.
                Integrated real-time DOM manipulation with dynamic win/draw logic. Delivered a clean, user-friendly interface
                while sharpening debugging skills. Implemented dynamic game logic to handle win, loss, and draw conditions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-evenly items-center">
                <a
                  href="https://tictactoe-game-anit.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/AnitBr17/Tic-Tac-Toe-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Github →
                </a>
              </div>
            </div>
          </div> */}
          
          
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition w-full mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left side image */}
              <div className="w-full md:w-1/2">
                <img
                  src={Portfolio3}
                  alt="Portfolio"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>

              {/* Right side content */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Portfolio Website
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    Designed and developed a fully responsive portfolio website using React.js and Tailwind CSS to showcase projects,
                    technical skills, and achievements. Utilized component-based architecture for clean and maintainable code.
                    Leveraged Tailwind CSS utility classes for rapid UI development and consistent styling across devices.
                    Integrated smooth navigation, animations, and interactive elements to enhance the user experience.
                  </p>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap justify-center text-center gap-6 mb-4">
                  {["React", "Tailwind CSS", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center text-center gap-6 mb-4">
                  <a
                    href="https://shivamthakreportfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                  <a
                    href="https://github.com/yourusername/portfolio-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Github →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;