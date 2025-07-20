import { motion } from "framer-motion";
import React, { useState } from 'react';
import '../styles/Hero.css';
import backgroundVideo from '../assets/Test1.mp4';
import Logo from './Logo';
import AnimatedLine from './AnimatedLine';
import { Typewriter } from 'react-simple-typewriter';
import Pdf from '../assets/CV/JoelRayton-FullStackDev-CV.pdf';
import NetworkingLines from './NetworkingLines';

const techList = ["HTML5", "CSS", "JavaScript", "React", "Git", "GitHub"];

const techContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const techItemVariants = (index) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
});

function Hero() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <motion.section
      id='hero'
      className="hero-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <NetworkingLines />
      <div className="hero-background">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="geometric-overlay"></div>
      </div>
      
      <nav className="navbar">
        <Logo />
        <div
          className={`burger-menu${navOpen ? ' open' : ''}`}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
          tabIndex={0}
          role="button"
        >
          <span />
          <span />
          <span />
        </div>
        <div className={`nav-links${navOpen ? ' active' : ''}`}>
          <a href="#home" onClick={() => setNavOpen(false)}><span className="nav-number">I.</span>Home</a>
          <a href="#about" onClick={() => setNavOpen(false)}><span className="nav-number">II.</span>About</a>
          <a href="#projects" onClick={() => setNavOpen(false)}><span className="nav-number">III.</span>Projects</a>
          <a href="#contact" onClick={() => setNavOpen(false)}><span className="nav-number">IV.</span>Contact</a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <span className="greeting">Hello, my name is</span>
          <h1 className="name">Joel Rayton<span className="dot">.</span></h1>
          <div className="typewriter-block">
            <span className="iam-label">I am </span> 
            <span className="typewriter-effect">
              <Typewriter
                words={['Software Engineer', 'Full-Stack Developer', 'AI Enthusiast','Web Developer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </span>
          </div>
          <p className="description">
            I'm a Computer Science graduate passionate about building AI-powered and scalable software solutions. I thrive at the intersection of AI, mobile, and full-stack development.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn-primary">Let's work together</a>
            <a href={Pdf} className="btn-outline" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
        </div>
      </div>

      <motion.div
        className="hero-tech-list"
        initial="hidden"
        whileInView="visible"
        variants={techContainerVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="hero-tech-list-line top">
          <AnimatedLine />
        </div>
        {techList.map((tech, idx) => (
          <motion.div
            className="hero-tech-item"
            key={tech}
            variants={techItemVariants(idx)}
          >
            {tech}
          </motion.div>
        ))}
        <div className="hero-tech-list-line bottom">
          <AnimatedLine />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;