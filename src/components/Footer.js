import React from 'react';
import '../styles/Footer.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
import Logo from './Logo';
import Pdf from '../assets/CV/CVJoelRaytonFullstack.pdf';

function Footer() {
  const handleResume = () => {
    // Add your resume PDF URL or download logic here
    window.open(Pdf, '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <footer className="footer">
      <div className="footer-line"></div>
      <div className="footer-grid">
        {/* Left Section */}
        <div className="footer-left">
          <a href="#hero" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="footer-brand">
              <Logo className="footer-logo" />
              <h3>Joel Rayton</h3>
            </div>
          </a>
          <p>Building digital experiences with code and creativity</p>
          <div className="footer-social">
            <a 
              href="https://github.com/SenpaiJoeru05" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <SiGithub />
            </a>
            <a 
              href="https://linkedin.com/in/joel-rayton" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin />
            </a>
            <a 
              href="mailto:joelrayton@gmail.com"
              aria-label="Email"
            >
              <HiMail />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <a href="#about">About</a>
            <a href="#timeline">Experience</a>
            <a href="#timeline">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Get In Touch</h4>
          <p>Available for freelance opportunities and full-time positions</p>
          <div className="footer-buttons">
            <a href="#contact" className="footer-cta">
              Let's Talk
            </a>
            <a
              href={Pdf}
              className="footer-cta secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>&copy; {new Date().getFullYear()} Joel Rayton. Built with React & ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;