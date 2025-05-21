import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="services">
          <div className="service-item">
            <span className="service-icon">💻</span>
            <h3>Website Development</h3>
          </div>
          <div className="service-item">
            <span className="service-icon">📱</span>
            <h3>App Development</h3>
          </div>
          <div className="service-item">
            <span className="service-icon">🌐</span>
            <h3>Website Hosting</h3>
          </div>
        </div>
        
        <div className="about-text">
          <h2>About me</h2>
          <p>
            I started my software journey from photography. Through that, I learned to
            love the process of creating from scratch. Since then, this has led me to
            software development as I fulfill my love for learning and building things.
          </p>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">120<span className="plus">+</span></span>
              <span className="stat-label">Completed Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95<span className="percent">%</span></span>
              <span className="stat-label">Client satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10<span className="plus">+</span></span>
              <span className="stat-label">Years of experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;