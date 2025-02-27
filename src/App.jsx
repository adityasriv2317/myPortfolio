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
  return (
    <div className="bg-[rgb(15,23,45)]">
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
