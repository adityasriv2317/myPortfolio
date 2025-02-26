import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Splash from "./Splash";

const Home = () => {
  
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white px-8 md:px-16 py-10 md:py-12">
      {/* {loading && <Splash onFinish={() => setLoading(false)} />} */}
      <div className="left md:w-1/5 not-md:border-b md:border-r border-gray-300 h-full py-2">
        <Navbar />
      </div>

      {/* main */}
      <div className="right w-4/5 mx-auto">
        <h1 className="text-3xl font-bold text-center mt-10">Home</h1>
        <p className="text-center mt-5">Welcome to the home page</p>
      </div>
    </div>
  );
};

export default Home;
