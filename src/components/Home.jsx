import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white px-8 md:px-24 py-10 md:py-20">
      {/* {loading && <Splash onFinish={() => setLoading(false)} />} */}
      <div className="left md:w-1/4 not-md:border-b border-gray-300 max-h-max py-2">
        <Navbar />
      </div>

      {/* main */}
      <div className="right w-3/4 mx-auto">
        <h1 className="text-3xl font-bold text-[#ff004f] [text-shadow:0px_0px_7px_rgba(255,0,60,0.8)] text-center mt-10">
          Home
        </h1>
        <p className="text-center mt-5">Welcome to the home page</p>
      </div>
    </div>
  );
};

export default Home;
