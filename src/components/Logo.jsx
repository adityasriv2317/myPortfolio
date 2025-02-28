import { useState, useRef, useEffect } from "react";

const Logo = () => {
  const shortName = "Aditya";
  const fullName = "Aditya Srivastava";
  const [displayName, setDisplayName] = useState(shortName);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null); // Store interval ID persistently

  const handleMouseEnter = () => {
    if (animating || displayName === fullName) return; // Prevent redundant animations
    setAnimating(true);

    let i = shortName.length - 1; // Start from where the short name ends
    setDisplayName(shortName); // Reset name before animation starts

    // Clear any existing interval before setting a new one
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayName((prev) => prev + fullName[i]);
      i++;

      if (i === fullName.length - 1) {
        clearInterval(intervalRef.current);
        setAnimating(false);
      }
    }, 60);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current); // Stop animation immediately
    setDisplayName(shortName);
    setAnimating(false);
  };

  // Cleanup effect to clear interval if the component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="flex logo text-[rgba(255,255,255,0.8)] w-fit hover:text-white hover:[text-shadow:0px_0px_7px_rgba(255,255,255,0.4)] items-center text-3xl text-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.scrollTo(top)}
    >
      <div className="font-light">&lt;</div>
      <div className="name hover:font-medium font-light duration-1000 transition-all">
        {displayName.slice(0, 6)}
        <span className="font-light [text-shadow:0px_0px_7px_rgba(255,255,255,0.8)]">
          {displayName.slice(6)}
        </span>
      </div>
      <div className="font-light">&gt;</div>
    </div>
  );
};

export default Logo;
