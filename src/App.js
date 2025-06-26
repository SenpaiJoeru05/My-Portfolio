import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Chatbot from './components/Chatbot';
import ScrollToTopButton from './components/ScrollToTopButton';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app bg-dark text-white min-h-screen font-sans">
      {loading && <Loader />}
      {!loading && (
        <>
          <Hero />
          <About />
          <Timeline />
          <Projects />
          <Contact />
          <Footer />
          <Chatbot />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
}

export default App;
