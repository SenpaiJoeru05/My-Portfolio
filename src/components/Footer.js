import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Joel Rayton</h3>
            <p>AI & Full-Stack Developer</p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Joel Rayton. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;