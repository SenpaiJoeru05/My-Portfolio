import { motion } from "framer-motion";
import React from 'react';
import  '../styles/About.css';
import joelImg from '../assets/joel.jpg';
import AnimatedLine from './AnimatedLine';
import TechGlobe from './TechGlobe';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const leftVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const rightVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="about-content" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          {/* Left: Image */}
          <motion.div
            className="about-image"
            variants={leftVariants}
          >
            <img  
              src={joelImg}
              alt="Joel Rayton"
              className="profile-image"
            />
          </motion.div>
          {/* Right: About Details */}
          <motion.div
            className="about-text"
            variants={rightVariants}
            style={{ flex: 1 }}
          >
            <h2 className="section-heading">// About Me</h2>
            <p className="about-description">
              I'm <span className="highlight">Joel Rayton</span>, a Software Engineer and Full Stack Developer with a strong foundation in both front-end and back-end development. I hold a Bachelor of Science in Computer Science from Bicol University Polangui, where I developed a passion for building meaningful and scalable software solutions.<br /><br />
              I value clean code, intuitive user experiences, and the opportunity to solve complex problems with efficient solutions. I'm always eager to learn new technologies and contribute to impactful projects.
            </p>

            {/* Quick Facts Section */}
            <div className="quick-facts">
              <div className="fact-item">
                <span className="fact-title">🎓 Degree</span>
                <span className="fact-detail">BS Computer Science</span>
              </div>
              <div className="fact-item">
                <span className="fact-title">🏅 Distinction</span>
                <span className="fact-detail">Cum Laude</span>
              </div>
              <div className="fact-item">
                <span className="fact-title">🏆 Award</span>
                <span className="fact-detail">Best Thesis: <span className="highlight">Vision.AI</span></span>
              </div>
              
            </div>

            <h2 className="section-heading">// My Skills</h2>
            <TechGlobe />
          </motion.div>
        </div>
        <AnimatedLine />
      </div>
    </motion.section>
  );
}

export default About;