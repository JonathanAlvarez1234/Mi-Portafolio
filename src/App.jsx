import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutMe from './components/AboutMe';
import Beams from './components/Beams';
import Skills from './components/Skills';
import Projects from './pages/ProjectsPage';
import Contact from './pages/ContactPage';
//import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div style={{ width: '100%', height: '800px', position: 'relative' }}>
              <Beams
                beamWidth={2}
                beamHeight={15}
                beamNumber={12}
                lightColor="#ffffff"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={0}
              />
            </div>
            <HomePage />
            <AboutMe />
            <Skills />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
