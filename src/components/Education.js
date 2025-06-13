import React from 'react';
import './Education.css';
import bicolLogo from '../assets/bicol-logo.png';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedLine from './AnimatedLine';

function Education() {
  const titleRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <>
      <section className="education-section">
        <div className="container">
          <h2 ref={titleRef} className="section-title reveal-element">
            Education
          </h2>
          <div ref={cardRef} className="education-card reveal-element delay-1">
            <img src={bicolLogo} alt="Bicol University Logo" className="school-logo" />
            <div className="education-content">
              <h3>Bachelor of Science in Computer Science</h3>
              <a href="https://www.bicol-u.edu.ph/" className="school-name" target="_blank" rel="noopener noreferrer">
                Bicol University
              </a>
              <div className="education-meta">
                <span className="year">📅 2021 - 2025</span>
                <span className="location">📍 Polangui, Philippines</span>
              </div>
              <ul className="achievements">
                <li>Major in Software Development and AI</li>
                <li>Dean's Lister with Academic Excellence</li>
                <li>Core Team Member of BU Computing Society</li>
                <li>Research: Vision.AI - Mobile Object Detection using YOLOv8</li>
                <li>Led development team for university web projects</li>
              </ul>
              <div className="education-highlights">
                <h4>Key Coursework</h4>
                <div className="coursework-tags">
                  <span>Data Structures & Algorithms</span>
                  <span>Artificial Intelligence</span>
                  <span>Mobile Development</span>
                  <span>Web Technologies</span>
                  <span>Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatedLine />
      </section>
    </>
  );
}

export default Education;