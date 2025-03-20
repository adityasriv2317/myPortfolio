import { useState, useEffect } from "react";
import Logo from "./Logo";

import useWebContext from "./WebContext";
import resume from "../assets/AdityaResume.pdf";
import Button from "../assets/Button";

// navbar component
const Navbar = () => {
  const [linkon, setLinkon] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { currentPage, setCurrentPage } = useWebContext();

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

  useEffect(() => {
    const indLine = document.querySelectorAll(".indLine");
    const indTxt = document.querySelectorAll(".indTxt");

    if (!indLine || !indTxt) return;

    indLine.forEach((line) => {
      line.style.width = "20px";
      line.style.background = "gray";
      line.style.boxShadow = "none";
    });

    indTxt.forEach((txt) => {
      txt.style.color = "gray";
      txt.style.textShadow = "none";
    });

    indLine[currentPage].style.width = "50px";
    indLine[currentPage].style.background = "white";
    indLine[currentPage].style.boxShadow = "0px 0px 10px rgba(255,255,255,0.5)";
    indTxt[currentPage].style.color = "white";
    indTxt[currentPage].style.textShadow = "0px 0px 10px rgba(255,255,255,0.5)";
  }, [currentPage]);

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
              className="hover:bg-[rgba(255,255,255,0.3)] rounded-sm px-1.5"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkon(1)}
              onMouseLeave={() => setLinkon(0)}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/adityasriv2317"
              className="hover:bg-[rgba(255,255,255,0.3)] px-1.5 rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkon(2)}
              onMouseLeave={() => setLinkon(0)}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://instagram.com"
              className="hover:bg-[rgba(255,255,255,0.3)] px-1.5 rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkon(3)}
              onMouseLeave={() => setLinkon(0)}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="line bg-white w-full mx-3 rounded-sm h-[6px] my-auto"></div>
        </div>
      </div>
      <div>
        {/* navigation links for about, skills, projects and contacts*/}
        <div className="hidden md:flex uppercase text-md text-gray-400 font-mono flex-col mt-3">
          <div
            className="flex flex-row items-center w-fit"
            onClick={() => {
              setCurrentPage(0);
            }}
          >
            <div className="line indLine bg-gray-400 h-[2px] my-auto"></div>
            <a href="#about" className="px-3 py-1 indTxt rounded-sm">
              About
            </a>
          </div>
          <div
            className="flex flex-row items-center w-fit"
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            <div className="line indLine bg-gray-400 h-[2px] my-auto"></div>
            <a href="#skills" className="px-3 py-1 indTxt rounded-sm">
              skills and tools
            </a>
          </div>
          <div
            className="flex flex-row items-center w-fit"
            onClick={() => {
              setCurrentPage(2);
            }}
          >
            <div className="line indLine bg-gray-400 h-[2px] my-auto"></div>
            <a href="#projects" className="px-3 py-1 indTxt rounded-sm">
              my projects
            </a>
          </div>
          <div
            className="flex flex-row items-center w-fit"
            onClick={() => {
              setCurrentPage(3);
            }}
          >
            <div className="line indLine bg-gray-400 h-[2px] my-auto"></div>
            <a href="#contact" className="px-3 py-1 indTxt rounded-sm">
              contact
            </a>
          </div>
        </div>

        {/* mail and resume */}
        <div
          className="hidden md:flex flex-row items-center gap-2 text-xl mt-3"
          style={{ fontFamily: "Poppins" }}
        >
          <Button
            url={"mailto:adityaxia9237@gmail.com"}
            data="Mail Me"
            stl={"border border-white border-dashed rounded-xs hover:bg-blue-500 mr-2 px-4 [text-shadow:0px_0px_7px_rgba(255,255,255,0.3)] hover:text-black transition"}
            icon={<i className="fa-solid fa-envelope"></i>}
          />

          <Button
            data="Resume"
            url={resume}
            icon={<i className="fa-solid fa-file"></i>}
            stl={"[text-shadow:0px_0px_5px_rgba(255,255,255,0.5)]"}
          />
        </div>
      </div>

      {/* navigation menu button*/}
      <div
        className="md:hidden fixed top-8 right-8 flex flex-col items-center gap-2 text-xl z-[35]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="line bg-white w-[20px] h-[2px]"></div>
        <div className="line bg-white w-[45px] h-[2px]"></div>
      </div>

      {/* navigation menu items */}
      {isMenuOpen && (
        <>
          <div className="bg-blue-950 opacity-40 fixed inset-0 z-[33] blur-lg"></div>
          <div className="fixed flex flex-col z-[34] bg-[rgb(10,29,74)] h-full top-0 right-0 w-3/4 items-center justify-center text-white text-xl space-y-6">
            {["About", "Skills", "Projects", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-semibold hover:scale-110 transition-transform"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="flex space-x-5 mt-4">
              <a
                href="https://linkedin.com/in/aditya2317"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in text-2xl hover:text-blue-500"></i>
              </a>
              <a
                href="https://github.com/adityasriv2317"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github text-2xl hover:text-gray-400"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram text-2xl hover:text-pink-500"></i>
              </a>
            </div>

            <div className="mt-5 flex space-x-4">
              <a
                href={resume}
                className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
              <a
                href="mailto:adityaxia9237@gmail.com"
                className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Mail Me
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
