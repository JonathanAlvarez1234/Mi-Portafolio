import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Beams from './components/Beams';
import Skills from './components/Skills';
//import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
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
      <Skills/>
    </div>
  );
}

export default App
