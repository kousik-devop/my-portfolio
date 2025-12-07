import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen text-white flex items-center justify-center px-6 md:px-20"
    >
      <div className="text-center max-w-3xl">

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hey, I'm <span className="text-[#F97316]">Kousik</span><br />
          I Build Smart Web & AI Solutions
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Full Stack Developer (MERN) | AI Integrator | Data-Driven Product Builder
        </motion.p>

        {/* Buttons Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {/* Explore Work Button */}
          <a
            href="#about"
            className="bg-[#F97316] hover:bg-[#ff6a00] text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300"
          >
            👇 Explore My Work
          </a>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1h8qmiZPKfesol9K-p5mDE7aXLCKaW31Z/view?usp=drive_link"
            download="Kousik_Maiti_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300"
          >
            📄 Download Resume
          </a>
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-gray-400 animate-bounce">⬇ Scroll down</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
