import React from 'react';
import './Hero.css';
import backgroundVideo from '../assets/Test1.mp4';
import Logo from './Logo';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="geometric-overlay"></div>
      </div>
      
      <nav className="navbar">
        <Logo />
        <div className="nav-links">
          <a href="#home"><span className="nav-number">01.</span>Home</a>
          <a href="#about"><span className="nav-number">02.</span>About</a>
          <a href="#projects"><span className="nav-number">03.</span>Projects</a>
          <a href="#contact"><span className="nav-number">04.</span>Contact</a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <span className="greeting">Hello, my name is</span>
          <h1 className="name">Joel Rayton<span className="dot">.</span></h1>
          <h2 className="title">AI & Full-Stack Developer</h2>
          <p className="description">
            I'm a Computer Science graduate with a passion for building AI-powered solutions 
            and scalable software. With a 2nd Best Thesis Award for Vision.AI (YOLOv8 Mobile App), 
            I thrive at the intersection of AI, mobile, and full-stack development.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Let's work together</button>
            <button className="btn-outline">View Resume</button>
          </div>
        </div>
      </div>

      <div className="tech-list">
        <div className="tech-item">HTML5</div>
        <div className="tech-item">CSS</div>
        <div className="tech-item">JavaScript</div>
        <div className="tech-item">Node.js</div>
        <div className="tech-item">React</div>
        <div className="tech-item">Git</div>
        <div className="tech-item">GitHub</div>
      </div>
    </section>
  );
}

export default Hero;