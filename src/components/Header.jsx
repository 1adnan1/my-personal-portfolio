import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-8 flex justify-between items-center bg-primary bg-opacity-80">
      {/* Name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl font-bold text-white"
      >
       Ahmad Lasani
      </motion.div>

      {/* Social Links */}
      <div className="flex gap-6 text-xl text-accent">
        <motion.a
          href="https://github.com/1adnan1"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ahmad-lasani-2868b8262"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://x.com/ad545454nan"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <FaTwitter />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
