import React from 'react';
import './Hero.css';
import backgroundVideo from '../assets/Test1.mp4';
import Logo from './Logo';
import AnimatedLine from './AnimatedLine';
import { Typewriter } from 'react-simple-typewriter';
import Pdf from '../assets/CVJoelRayton.pdf';
import NetworkingLines from './NetworkingLines'; // Import the new component

function Hero() {
  return (
    <section id='hero' className="hero-section">
      <NetworkingLines /> {/* Add the NetworkingLines component here */}
      <div className="hero-background">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="geometric-overlay"></div>
      </div>
      
      <nav className="navbar">
        <Logo />
        <div className="nav-links">
          <a href="#home"><span className="nav-number">I.</span>Home</a>
          <a href="#about"><span className="nav-number">II.</span>About</a>
          <a href="#projects"><span className="nav-number">III.</span>Projects</a>
          <a href="#contact"><span className="nav-number">IV.</span>Contact</a>
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
                words={['Software Engineer', 'Full-Stack Developer', 'AI Enthusiast','Mobile Developer']}
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

      <div className="hero-tech-list">
        <div className="hero-tech-list-line top">
          <AnimatedLine />
        </div>
        <div className="hero-tech-item">HTML5</div>
        <div className="hero-tech-item">CSS</div>
        <div className="hero-tech-item">JavaScript</div>
        <div className="hero-tech-item">Node.js</div>
        <div className="hero-tech-item">React</div>
        <div className="hero-tech-item">Git</div>
        <div className="hero-tech-item">GitHub</div>
        <div className="hero-tech-list-line bottom">
          <AnimatedLine />
        </div>
      </div>
    </section>
  );
}

export default Hero;