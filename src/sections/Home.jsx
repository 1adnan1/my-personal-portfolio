import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import myPhoto from "../assets/myphoto.png";

const Home = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-primary text-white overflow-hidden">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center md:text-left px-8 md:px-20 space-y-6 max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm 
        </h1>
        <span className="text-accent text-4xl md:text-6xl font-bold leading-tight">Ahmad Lasani</span>
        <p className="text-lg text-justify md:text-xl text-gray-300">
          I'm a passionate Web Developer specializing in modern, responsive projects. I build sleek, animated interfaces with clean code, and I'm always eager to learn and take on new challenges.
        </p>

        {/* CV Button */}
        <a
          href="https://drive.google.com/your-cv-link" // Replace with your actual link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 bg-accent text-white font-semibold rounded hover:bg-accent-dark transition"
        >
          View My CV
        </a>

        {/* Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="cursor-pointer"
        >
          <a href="#about">
            <FaArrowDown className="text-3xl animate-bounce text-accent" />
          </a>
        </motion.div>
      </motion.div>

      {/* Your Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 mt-1 md:mt-0"
      >
        <img
          src={myPhoto}
          alt="Ahmad Lasani"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Home;
