// pages/LandingPage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Projects from './Projects';
import About from './About';

const LandingPage = () => {
  return (
    <div className='min-h-screen text-white'>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default LandingPage;
