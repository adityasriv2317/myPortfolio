import React, { useState, useEffect } from "react";
import Logo from "./Logo";

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
    <div className="h-full text-white">
      {/* logo */}
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
  );
};

export default Navbar;
