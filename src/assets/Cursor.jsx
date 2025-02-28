import React, { useEffect, useRef } from "react";

const Cursor = () => {
  // Refs
  const cursorRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    // Destructure refs into variables
    const cursor = cursorRef.current;
    const trails = trailsRef.current;

    // If cursor or trails are not available, return
    if (!cursor || trails.length === 0) return;

    // Initial positions for trails
    const positions = Array(trails.length).fill({ x: 0, y: 0 });

    // Cursor move event
    const cursorMove = (e) => {
      // Get mouse position
      const x = e.clientX;
      const y = e.clientY;
      // Move cursor to mouse position
      cursor.style.transform = `translate(${x-2}px, ${y-2}px)`;

      // Update positions for trails
      positions.unshift({ x, y });
      // Remove the last position
      positions.pop();

      // Move trails to new positions
      trails.forEach((trail, i) => {
        // Effects for trails based on index i
        const scale = 1 - i * 0.1; // Shrinking effect
        const opacity = 1 - i * 0.1; // Fading effect

        trail.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px) scale(${scale})`;
        trail.style.opacity = opacity;
      });
    };

    document.addEventListener("mousemove", cursorMove);
    return () => document.removeEventListener("mousemove", cursorMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="customCursor fixed h-4 w-4 border-2 border-white rounded-b-full rounded-r-full pointer-events-none"
      ></div>

      {/* Cursor Trails */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailsRef.current[i] = el)}
          className="max-md:hidden trail fixed h-4 w-4 bg-red-300 rounded-full pointer-events-none transition-all duration-700 ease-out filter blur-md"
          style={{
            transition: `transform ${0.1 * (i + 1)}s ease-out, opacity 0.6s`,
          }}
        ></div>
      ))}
    </>
  );
};

export default Cursor;
