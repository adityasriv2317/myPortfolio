import React, { useState, useEffect } from "react";
import Logo from "./Logo";

import { useWebContext } from "../Webcontext";

// navbar component
const Navbar = () => {
  const [linkon, setLinkon] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const line = document.querySelector(".line");
    if (!line) return;

    if (linkon === 1) {
      line.style.background = "#0077b5";
      line.style.boxShadow = "0px 0px 10px #0077b5";
    } else if (linkon === 2) {
      line.style.background = "#6e5494";
      line.style.boxShadow = "0px 0px 10px #6e5494";
    } else if (linkon === 3) {
      line.style.background = "#c13584";
      line.style.boxShadow = "0px 0px 10px #c13584";
    } else {
      line.style.background = "white";
      line.style.boxShadow = "0px 0px 10px white";
    }
  }, [linkon]);

  return (
    <div className="h-full flex flex-col justify-between text-white mb-2">
      {/* logo */}
      <div>
        <Logo />

        {/* socials */}
        <div className="hidden md:flex flex-row mt-3 ml-1">
          <div className="flex space-x-4 text-xl">
            <a
              href="https://linkedin.com/in/aditya2317"
              className="hover:bg-[rgba(255,255,255,0.3)] px-1"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkon(1)}
              onMouseLeave={() => setLinkon(0)}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/adityasriv2317"
              className="hover:bg-[rgba(255,255,255,0.3)] px-1"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkon(2)}
              onMouseLeave={() => setLinkon(0)}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://instagram.com"
              className="hover:bg-[rgba(255,255,255,0.3)] px-1"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkon(3)}
              onMouseLeave={() => setLinkon(0)}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="line bg-white w-full mx-3 h-[2px] my-auto"></div>
        </div>
      </div>
      <div>
        {/* navigation links for about, skills, projects and contacts*/}
        <div className="hidden md:flex uppercase text-md  text-gray-400 font-mono flex-col mt-3">
          <div className="flex flex-row items-center">
            <div className="line bg-gray-400 w-[20px] h-[2px] my-auto"></div>
            <a
              href="#about"
              className="px-3 py-1 rounded-sm"
              onMouseEnter={() => setLinkon(1)}
              onMouseLeave={() => setLinkon(0)}

              onClick={() => {
                setCurrentPage(0);
              }}
            >
              About
            </a>
          </div>
          <div className="flex flex-row items-center">
            <div className="line bg-gray-400 w-[20px] h-[2px] my-auto"></div>
            <a
              href="#about"
              className="px-3 py-1 rounded-sm"
              
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              skills and tools
            </a>
          </div>
          <div className="flex flex-row items-center">
            <div className="line bg-gray-400 w-[20px] h-[2px] my-auto"></div>
            <a
              href="#about"
              className="px-3 py-1 rounded-sm"
              
              onClick={() => {
                setCurrentPage(2);
              }}
            >
              projects
            </a>
          </div>
          <div className="flex flex-row items-center">
            <div className="line bg-gray-400 w-[20px] h-[2px] my-auto"></div>
            <a
              href="#about"
              className="px-3 py-1 rounded-sm"
              
              onClick={() => {
                setCurrentPage(3);
              }}
            >
              contact
            </a>
          </div>
        </div>

        {/* mail and resume */}
        <div className="hidden md:flex flex-row items-center gap-3 text-xl mt-3">
          <a
            href="/resume.pdf"
            className="hover:bg-[rgba(255,255,255,0.5)] border border-transparent hover:border-[rgba(255,255,255,0.5)] px-3 py-2 rounded-sm"
            onMouseEnter={() => setLinkon(5)}
            onMouseLeave={() => setLinkon(0)}
          >
            <i className="fa-solid fa-file"></i> Resume
          </a>
          <a
            href="mailto:adityaxia9237@gmail.com"
            className="border border-dashed hover:bg-[rgba(255,255,255,0.4)] px-3 py-2 rounded-sm"
            onMouseEnter={() => setLinkon(4)}
            onMouseLeave={() => setLinkon(0)}
          >
            <i className="fa-solid fa-envelope"></i> Mail Me
          </a>
        </div>
      </div>

      {/* navigation menu */}
      <div
        className="md:hidden fixed top-12 right-12 flex flex-col items-center gap-3 text-xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="line bg-white w-[20px] h-[2px]"></div>
        <div className="line bg-white w-[45px] h-[2px]"></div>
      </div>

      {/* navigation menu items */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-5 text-2xl">
          <a
            href="#about"
            className="hover:bg-[rgba(255,255,255,0.4)] px-3 py-2 rounded-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:bg-[rgba(255,255,255,0.4)] px-3 py-2 rounded-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:bg-[rgba(255,255,255,0.4)] px-3 py-2 rounded-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:bg-[rgba(255,255,255,0.4)] px-3 py-2 rounded-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            className="hover:bg-[rgba(255,255,255,0.4)] px-3 py-2 rounded-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
          <a
            href="mailto:adityaxia9237@gmail.com"
            className="hover:bg-[rgba(255,255,255,0.4)] px-3 py-2 rounded-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Mail Me
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
