import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaServer, FaGithub, FaDatabase, FaBolt, FaTasks} from "react-icons/fa";
import { DiNodejs, DiBootstrap, DiFirebase,DiSass } from "react-icons/di";
import { SiTailwindcss, SiChakraui, SiPostman, SiNetlify, SiC, SiCplusplus } from "react-icons/si";

const skills = [
  { icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
  { icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
  { icon: FaJsSquare, color: "text-yellow-500", name: "JavaScript" },
  { icon: FaPython, color: "text-blue-600", name: "Python" },
  { icon: SiC, color: "text-blue-600", name: "C" },
  { icon: SiCplusplus, color: "text-indigo-600", name: "C++" },
  { icon: FaReact, color: "text-cyan-400", name: "ReactJS" },
  { icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind" },
  { icon: DiSass, color: "text-pink-500", name: "Scss" },
  { icon: SiChakraui, color: "text-teal-400", name: "Chakra UI" },
  { icon: DiBootstrap, color: "text-purple-600", name: "Bootstrap" },
  { icon: DiNodejs, color: "text-green-600", name: "NodeJS" },
  { icon: FaServer, color: "text-gray-500", name: "ExpressJS" },
  { icon: FaGitAlt, color: "text-orange-600", name: "Git" },
  { icon: FaGithub, color: "text-black", name: "GitHub" },
  { icon: SiNetlify, color: "text-green-400", name: "Netlify" },
  { icon: DiFirebase, color: "text-yellow-500", name: "Firebase" },
  { icon: SiPostman, color: "text-orange-500", name: "Postman" },
  { icon: FaBolt, color: "text-yellow-400", name: "Thunder Client" },
  { icon: FaDatabase, color: "text-blue-600", name: "MySQL" },
  { icon: FaTasks, color: "text-green-500", name: "DSA" },
];
  
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0f172a] text-white px-6 md:px-16 py-20 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Meet the Developer</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
          I'm Ahmad Lasani, a passionate web developer with a Bachelor's degree in Computer Applications (BCA). I specialize in creating modern, responsive websites using technologies like React, Tailwind CSS, and Framer Motion. My focus is on clean design, smooth animations, and delivering exceptional user experiences. I enjoy turning ideas into reality through code and constantly strive to stay updated with the latest trends in web development. Whether it's building sleek user interfaces or optimizing site performance, I bring creativity and precision to every project. I'm always open to new challenges and opportunities to grow as a developer
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-4">Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className={`text-4xl ${skill.color}`} />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
