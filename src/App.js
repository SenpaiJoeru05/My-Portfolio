import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Chatbot
 from './components/Chatbot';
function App() {
  return (
    <div className="app bg-dark text-white min-h-screen font-sans">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
