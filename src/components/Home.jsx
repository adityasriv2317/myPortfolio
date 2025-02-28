import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Splash from "./Splash";
import PieChart from "../assets/PieChart";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col md:flex-row h-screen text-white px-8 md:px-24 py-10 md:py-0">
      {loading && <Splash onFinish={() => setLoading(false)} />}
      <div className="left md:w-1/3 not-md:border-b border-gray-300 max-h-max not-md:py-2 md:py-24">
        <Navbar />
      </div>

      {/* main content*/}
      <div className="right w-2/3 not-md:w-full md:px-20 py-2 max-h-max overflow-y-scroll">
        <h1 className="text-3xl font-bold text-[#ff004f] [text-shadow:0px_0px_7px_rgba(255,0,60,0.8)] text-center mt-10">
          Home
        </h1>
        <p className="text-center my-5">Welcome to the home page</p>
        <PieChart />
        <About />
      </div>
    </div>
  );
};

export default Home;
