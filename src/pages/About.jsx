import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profile from '../assets/Profile.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, type: 'spring', stiffness: 60, damping: 15 }
  })
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen text-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-12"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center w-full md:w-2/3 space-y-6">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold"
          variants={fadeUp}
          custom={0}
        >
          👋 About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          variants={fadeUp}
          custom={1}
        >
          Hey! I'm <span className="font-semibold text-[#F97316]">Kousik</span>, a Full Stack Developer & AI Enthusiast.  
          I build modern web apps with the <strong className="text-white">MERN stack</strong> and love adding <strong className="text-white">AI/ML</strong> for smarter solutions.
        </motion.p>

        <motion.div
          className="bg-gray-900 p-5 rounded-xl shadow-lg max-w-lg w-full space-y-2 text-sm md:text-base"
          variants={fadeUp}
          custom={2}
        >
          <p><strong>🛠️ Stack:</strong> React, Node, Express, MongoDB, Python</p>
          <p><strong>🎯 Focus:</strong> Full Stack + AI + Cloud</p>
          <p><strong>☕ Fun:</strong> Debugging with coffee & lo-fi beats 🎵</p>
        </motion.div>

        <motion.p
          className="text-gray-400 italic"
          variants={fadeUp}
          custom={3}
        >
          Always learning. Always building. 🚀
        </motion.p>
      </div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <img
          src={profile}
          alt="Kousik's Profile"
          className="rounded-2xl w-52 h-52 md:w-72 md:h-72 object-cover shadow-lg border-2 border-[#F97316]"
        />
      </motion.div>
    </motion.section>
  );
};

export default About;
