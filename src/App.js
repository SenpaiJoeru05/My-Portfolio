import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-white min-h-screen font-sans">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
