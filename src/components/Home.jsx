import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Splash from "./Splash";
import PieChart from "../assets/PieChart";
import Button from "../assets/Button";

import maintain from "/maintain.png";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col md:flex-row h-screen text-white px-8 md:px-24 py-2 md:py-0">
      {loading && <Splash onFinish={() => setLoading(false)} />}
      <div className="left md:w-1/3 not-md:border-b border-gray-300 max-h-max not-md:py-2 md:py-24">
        <Navbar />
      </div>

      {/* main content*/}
      <div className="right w-2/3 md:ml-14 not-md:w-full md:px-20 pt-12 bg-gray-900 max-h-max overflow-y-scroll overflow-x-visible">
        <AboutMe />
        <MySkills />
      </div>
    </div>
  );
};

export default Home;
