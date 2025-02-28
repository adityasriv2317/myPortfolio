import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

// components
import Home from "./components/Home";
import Splash from "./components/Splash";

// import context provider
import { WebProvider } from "./Webcontext";
import Cursor from "./components/Cursor";

const App = () => {

  // Ripple effect
  document.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    // Set position based on click
    ripple.style.left = `${e.clientX - 5}px`;
    ripple.style.top = `${e.clientY - 5}px`;

    document.body.appendChild(ripple);

    // Remove ripple after animation ends
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });

  return (
    <div className="bg-[rgb(10,29,74)]">
      <WebProvider>
        <BrowserRouter>
          <Cursor />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Splash />} />
          </Routes>
        </BrowserRouter>
      </WebProvider>
    </div>
  );
};

export default App;
