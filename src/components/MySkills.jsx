import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaExternalLinkAlt,
  FaMobile,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiGit,
  SiSocketdotio,
  SiOpenai,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    level: 90,
    icon: <FaReact className="icon-container text-blue-500" />,
  },
  {
    name: "Node.js",
    level: 85,
    icon: <FaNodeJs className="icon-container text-green-500" />,
  },

  {
    name: "Web Development",
    level: 90,
    icon: <FaGlobe className="icon-container text-yellow-500" />,
  },
  {
    name: "JavaScript",
    level: 95,
    icon: <FaJsSquare className="icon-container text-yellow-500" />,
  },
  {
    name: "CSS & Tailwind",
    level: 85,
    icon: <SiTailwindcss className="icon-container text-blue-400" />,
  },
  {
    name: "MySQL & MongoDB",
    level: 80,
    icon: <FaDatabase className="icon-container text-purple-500" />,
  },
  {
    name: "REST APIs",
    level: 90,
    icon: <SiPostman className="icon-container text-orange-500" />,
  },
  {
    name: "Socket.IO",
    level: 80,
    icon: <SiSocketdotio className="icon-container text-white" />,
  },
  {
    name: "Vercel",
    level: 85,
    icon: <SiVercel className="icon-container text-black" />,
  },
  {
    name: "Git & GitHub",
    level: 90,
    icon: <SiGit className="icon-container text-red-500" />,
  },
  {
    name: "Responsive Websites",
    level: 95,
    icon: <FaMobile className="icon-container text-blue-300" />,
  },
  {
    name: "Postman",
    level: 80,
    icon: <SiPostman className="icon-container text-orange-500" />,
  },
  {
    name: "AI Prompting",
    level: 85,
    icon: <SiOpenai className="icon-container text-green-500" />,
  },
];

const MySkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div ref={ref} id="skills" className="py-8 text-center overflow-visible">
      <motion.h2
        className="text-6xl md:py-14 font-bold font-[gresbik] section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills & Toolset
      </motion.h2>

      {/* Skills Grid with animated progress meters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
          >
            {/* Skill Icon */}
            {skill.icon}
            <h3 className="text-xl font-semibold mt-2">{skill.name}</h3>

            {/* Interactive Progress Bar */}
            <motion.div
              className="meter mt-2"
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.div
                className="meter-fill"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                style={{ width: `${skill.level}%` }}
              ></motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-10 text-center">
        You can check out my latest projects and contributions here:
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/adityasriv2317"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-600"
        >
          <FaGithub /> GitHub <FaExternalLinkAlt size={12} />
        </a>
        <a
          href="https://linkedin.com/in/aditya2317"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-600"
        >
          <FaLinkedin /> LinkedIn <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </div>
  );
};

export default MySkills;
