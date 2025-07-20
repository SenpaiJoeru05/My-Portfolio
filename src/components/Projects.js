import { motion } from "framer-motion";
import React from 'react';
import '../styles/Projects.css';
import { SiGithub } from 'react-icons/si';
import AnimatedLine from './AnimatedLine';
import { HiExternalLink } from 'react-icons/hi';

// Import Vision.png
import VisionImage from '../assets/Images/VisionAI.png'; 
import AccreHubImage from '../assets/Images/AccreHub.png';
import PortfolioImage from '../assets/Images/Portfolio.png';

function Projects() {
  const projects = [
    {
      title: "Vision.AI",
      description: "An advanced mobile application leveraging computer vision and machine learning for real-time object detection and recognition.",
      image: VisionImage,
      tech: ["Kotlin", "TensorFlow", "OpenCV", "Android"],
      githubLink: "https://github.com/SenpaiJoeru05/Vision.AI",
      videoLink: "#"
    },
    {
      title: "AccreHub",
      description: "A comprehensive web-based accreditation management system with robust features for managing institutional accreditation processes.",
      image: AccreHubImage,
      tech: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "jQuery"],
      githubLink: "https://github.com/SenpaiJoeru05/AccreHub",
      videoLink: "#"
    },
    {
      title: "Portfolio",
      description: "My personal portfolio website built with modern technologies and smooth animations to showcase my projects and skills.",
      image: PortfolioImage,
      tech: ["React", "JavaScript", "CSS3", "HTML5"],
      githubLink: "https://github.com/SenpaiJoeru05/My-Portfolio",
      videoLink: "#"
    },
    {
      title: "PSA-HRIS",
      description: "A Human Resource Information System (HRIS) designed to streamline and automate HR processes.",
      image: "https://via.placeholder.com/300",
      tech: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "jQuery", "Tailwind CSS", "Livewire", "Blade"],
      githubLink: "https://github.com/SenpaiJoeru05/My-Portfolio",
      videoLink: "#"
    }
  ];

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <SiGithub /> GitHub
                  </a>
                  {/* <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                    <HiExternalLink /> Video Demo
                  </a> */}
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech-item">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AnimatedLine />
    </motion.section>
  );
}

export default Projects;