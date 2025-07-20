
import React, { useEffect, Suspense } from 'react';
import './App.css';
import { LoaderProvider, useLoader } from './context/LoaderContext'; // Import LoaderContext
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Loader from './components/Loader';


const Projects = React.lazy(() => import('./components/Projects'));
const Timeline = React.lazy(() => import('./components/Timeline'));
const Chatbot = React.lazy(() => import('./components/Chatbot'));


function AppContent() {
  const { isLoading, showLoader } = useLoader();

  useEffect(() => {
    // Hide loader after initial load
    const timer = setTimeout(() => {
      showLoader()(); // Trigger the callback to set isLoading to false
    }, 3000); // Adjust to ensure loader animations complete (LOGO_ANIMATION + BAR_FILL + HOLD_DURATION + FADE_DURATION)
    return () => clearTimeout(timer);
  }, [showLoader]);

  return (
    <div className="app bg-dark text-white min-h-screen font-sans">
      {isLoading && <Loader onFinish={() => showLoader()()} />}
      {!isLoading && (
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <About />
          <Timeline />
          <Projects />
          <Contact />
          <Footer />
          <Chatbot />
          <ScrollToTopButton />
        </Suspense>
      )}
    </div>
  );
}

function App() {
  return (
    <LoaderProvider>
      <AppContent />
    </LoaderProvider>
  );
}

export default App;