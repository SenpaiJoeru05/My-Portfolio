import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="app bg-dark text-white min-h-screen font-sans">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
