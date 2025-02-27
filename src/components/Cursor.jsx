import React, { useEffect } from "react";

const Cursor = () => {
  //   const cursor = document.querySelector(".customCursor");

  //   document.addEventListener("mousemove", (e) => {
  //     const x = e.clientX;
  //     const y = e.clientY;
  //     cursor.style.top = y + "px";
  //     cursor.style.left = x + "px";
  //   });

  useEffect(() => {
    const cursor = document.querySelector(".customCursor");

    const cursorMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
    };

    document.addEventListener("mousemove", cursorMove);
  });

  return (
    <div
      className="customCursor absolute h-4 w-4 bg-white rounded-full border-2 border-black pointer-events-none"
    ></div>
  );
};

export default Cursor;
