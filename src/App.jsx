import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import LocomotiveScroll from 'locomotive-scroll';
import { i } from 'framer-motion/client';
import Footer from './components/Footer';

function App() {
  // const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className=' w-full flex flex-col min-h-screen  text-white bg-[#0A0A0]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects/:id' element={<ProjectDetail />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App