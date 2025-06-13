import React, { useRef, useEffect } from 'react';
import './Experience.css';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedLine from './AnimatedLine';

function Experience() {
  const titleRef = useScrollReveal();
  const cardRefs = [useScrollReveal(), useScrollReveal()];
  const timelineRef = useRef(null);

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Philippine Statistics Authority",
      location: "Legazpi City",
      duration: "June 2023 - December 2023",
      details: [
        "Developed and maintained web applications using Laravel and MySQL",
        "Implemented responsive UI designs and improved user experience",
        "Collaborated with statisticians to create data visualization tools",
        "Assisted in database management and optimization"
      ],
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"]
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      location: "Remote",
      duration: "2022 - Present",
      details: [
        "Built custom websites and web applications for various clients",
        "Developed mobile applications using React Native",
        "Provided technical consulting and solutions architecture",
        "Managed project timelines and client communications"
      ],
      tech: ["React", "React Native", "Node.js", "MongoDB", "AWS"]
    }
  ];

  useEffect(() => {
    function handleScroll() {
      const timeline = timelineRef.current;
      if (!timeline) return;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;

      // Calculate the distance from the top of the timeline to the center of the viewport
      const timelineTopToCenter = centerY - rect.top;
      // The total scrollable height for the line to extend
      const maxLineHeight = rect.height;

      // Only animate when the center is within the timeline
      let lineHeight = 0;
      if (timelineTopToCenter > 0 && timelineTopToCenter < maxLineHeight) {
        lineHeight = timelineTopToCenter;
      } else if (timelineTopToCenter >= maxLineHeight) {
        lineHeight = maxLineHeight;
      }
      // Otherwise, lineHeight stays 0

      timeline.style.setProperty('--timeline-line-height', `${lineHeight}px`);
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="experience-section">
        <div className="container">
          <h2 ref={titleRef} className="section-title reveal-element">
            Experience
          </h2>
          <div className="timeline" ref={timelineRef}>
            {/* Single animated line */}
            <div className="timeline-vertical-line"></div>
            {experiences.map((exp, index) => (
              <div className="timeline-row" key={index}>
                <div className="timeline-marker">
                  <span className="timeline-dot"></span>
                </div>
                <div 
                  ref={cardRefs[index]}
                  className={`experience-card reveal-element delay-${index + 1}`}
                >
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <span className="company">{exp.company}</span>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">📅 {exp.duration}</span>
                    <span className="location">📍 {exp.location}</span>
                  </div>
                  <ul className="experience-details">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AnimatedLine />
    </>
  );
}

export default Experience;