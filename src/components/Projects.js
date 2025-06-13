import React, { useRef, useEffect } from 'react';
import './Projects.css';
import { 
  SiKotlin, 
  SiTensorflow, 
  SiOpencv,
  SiAndroid,
  SiPhp,
  SiLaravel,
  SiPostgresql,
  SiBootstrap,
  SiJquery,
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiGithub
} from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi'; // Using HeroIcons external link
import useScrollReveal from '../hooks/useScrollReveal';

function Projects() {
  const titleRef = useScrollReveal();
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const projects = [
    {
      title: "Vision.AI",
      description: "An advanced mobile application leveraging computer vision and machine learning for real-time object detection and recognition.",
      image: "/path-to-vision-ai-image.jpg",
      tech: [
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "Android", icon: <SiAndroid /> }
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "AccreHub",
      description: "A comprehensive web-based accreditation management system with robust features for managing institutional accreditation processes.",
      image: "/path-to-accrehub-image.jpg",
      tech: [
        { name: "PHP", icon: <SiPhp /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "jQuery", icon: <SiJquery /> }
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio",
      description: "My personal portfolio website built with modern technologies and smooth animations to showcase my projects and skills.",
      image: "/path-to-portfolio-image.jpg",
      tech: [
        { name: "React", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "HTML5", icon: <SiHtml5 /> }
      ],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 ref={titleRef} className="section-title reveal-element">
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={el => projectRefs.current[index] = el}
              className={`project-card reveal-element delay-${index % 3 + 1}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <HiExternalLink /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <SiGithub /> GitHub
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item" title={tech.name}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;