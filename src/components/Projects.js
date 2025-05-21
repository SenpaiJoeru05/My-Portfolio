import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A responsive personal portfolio website built with React and CSS.</p>
          </div>
          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>A full-stack app to manage daily tasks using Node.js and MongoDB.</p>
          </div>
          <div className="project-card">
            <h3>E-commerce Site</h3>
            <p>Frontend design and user interface for an online shop.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
