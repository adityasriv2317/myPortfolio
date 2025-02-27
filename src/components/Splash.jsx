import React, { useEffect, useState } from "react";

const Splash = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const logoText = document.querySelector(".logoText");
    const txt = document.querySelectorAll(".txt");
    const slices = document.querySelectorAll(".slice");
    const slice1 = document.querySelectorAll(".slice1");

    const handleAnimation = () => {
      setTimeout(() => {
        txt.forEach((txt, idx) => {
          setTimeout(() => {
            logoText.classList.add("active");
            txt.classList.add("active");
          }, (idx + 1) * 150);
        });

        setTimeout(() => {
          txt.forEach((txt, idx) => {
            // setTimeout(() => {
            //   txt.classList.remove("active");
            //   txt.classList.add("fade");
            // }, (idx + 1) * 100);
            txt.classList.remove("active");
            txt.classList.add("fade");
          });
        }, 1500);

        setTimeout(() => {
          for (let i = 0; i < slices.length / 2; i++) {
            setTimeout(() => {
              slices[i].classList.add("over");
              slices[slices.length - 1 - i].classList.add("over");
            }, 80 + i * 100);
          }
        }, 1100);

        setTimeout(() => {
          for (let i = 0; i < slice1.length / 2; i++) {
            setTimeout(() => {
              slice1[i].classList.add("over");
              slice1[slice1.length - 1 - i].classList.add("over");
            }, 80 + i * 100);
          }
        }, 1100);
      });
    };

    handleAnimation();

    // Cleanup function to clear any timeouts if component is unmounted
    return () => {
      // Cleanup logic could be added here if you need to clear timeouts or animations
    };
  }, []);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish(); // Check if onFinish is provided before calling
    }, 2200);

    // Cleanup timeout when the component is unmounted
    return () => {
      clearTimeout(splashTimeout);
    };
  }, [onFinish]);

  return (
    show && (
      <div className="splashBase bg-transparent fixed inset-0 z-40 flex flex-col items-center font-bold text-3xl text-white overflow-hidden duration-700">
        <div className="logoText absolute z-[43] gap-20 top-48 flex flex-col md:flex-row md:items-center">
          <span className="txt text-center">A.</span>
          <span className="txt text-center">B.</span>
          <span className="txt text-center">C.</span>
        </div>

        {/* background slices */}
        <div className="w-screen h-screen bg-transparent relative gap-0 flex top-0 left-0 z-[42]">
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
        </div>

        <div className="w-screen h-screen bg-transparent relative gap-0 flex top-0 left-0 z-[40]">
          <div className="slice1"></div>
          <div className="slice1"></div>
          <div className="slice1"></div>
          <div className="slice1"></div>
          <div className="slice1"></div>
          <div className="slice1"></div>
        </div>
      </div>
    )
  );
};

export default Splash;
