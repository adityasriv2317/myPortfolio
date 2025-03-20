import React from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="not-md:p-4 text-center h-screen text-white">
      {/* Section Title with animation */}
      <motion.h2
        className="text-6xl md:py-14 font-bold font-[gresbik] section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Expanded Paragraph with bullet points and external links */}
      <motion.div
        className="text-lg mt-4 section-text not-md:text-justify text-left max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p>
          I am a passionate and detail-oriented <strong>web developer</strong>{" "}
          dedicated to building scalable, responsive and high-performance
          applications. My expertise lies in modern frontend and backend
          technologies, allowing me to create responsive, accessible, and
          visually appealing UIs. while ensuring efficient API integrations,
          cross-platform compatibility and optimized backend performance.
        </p>

        <ul className="list-disc list-inside mt-4">
          <p className="text-3xl my-2 font-sans font-semibold">
            My skills include:
          </p>
          <li>
            Developing interactive <strong>React.js & Next.js</strong>{" "}
            applications.
          </li>
          <li>
            Building scalable <strong>Node.js & Spring Boot</strong> backends.
          </li>
          <li>
            Crafting clean, modern UI with{" "}
            <strong>Tailwind CSS & Framer Motion</strong>.
          </li>
          <li>
            Designing efficient databases using <strong>MySQL & MongoDB</strong>
            .
          </li>
          <li>
            Enhancing real-time experiences with{" "}
            <strong>Socket.IO & WebSockets</strong>.
          </li>
          <li>
            Deploying & managing projects using{" "}
            <strong>Vercel, Netlify, GitHub, and Docker</strong>.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutMe;
