import React from 'react';
import '../styles/Timeline.css';
import AnimatedLine from './AnimatedLine';
import bicolLogo from '../assets/bicol-logo.png';
import psaLogo from '../assets/PSA-Logo.png';

const timelineRows = [
	{
		left: {
			type: 'education',
			title: 'Bachelor of Science in Computer Science',
			institution: 'Bicol University',
			logo: bicolLogo,
			duration: '2021 - 2025',
			location: 'Polangui, Philippines',
			details: [
				"Dean's Lister with Academic Excellence",
				"Best Thesis Awardee: Vision.AI (Assistive App for the Visually Impaired)",
				"Developer of Vision.AI, an Android app for the visually impaired using YOLOv8, TensorFlow Lite, and OpenCV",
				"Graduated Cum Laude with a GPA of 1.60",
			],
		},
		right: {
			type: 'experience',
			title: 'Full Stack Developer Intern',
			company: 'Philippine Statistics Authority Region V',
			duration: 'June 2024 - August 2024',
			location: 'Legazpi City, Philippines',
			details: [
				"Spearheaded the design, development, testing, and deployment of PSA-HRIS, a web-based HR system for the agency",
				"Built secure backend (Laravel, PHP, PostgreSQL) and responsive frontend (HTML, CSS, JS, FilamentPHP)",
				"Collaborated with my intern team and PSA staff for requirements gathering and user training",
				"Implemented data visualization and reporting features for HR analytics",
				"Maintained documentation and provided technical support during rollout",
			],
			tech: ['Laravel', 'PHP', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'FilamentPHP'],
		},
	},
	{
		left: null,
		right: {
			type: 'experience',
			title: 'Freelance Full Stack Developer',
			company: 'Self-employed',
			duration: '2024 - Present',
			location: 'Ligao City, Philippines',
			details: [
				"Developed AccreHub, an accreditation file management system for a local school client",
				"Designed and implemented a user-friendly dashboard for managing accreditation documents",
				"Built secure web applications using Laravel, PHP, PostgreSQL, HTML, CSS, JavaScript, and FilamentPHP",
				"Delivered user-friendly dashboards and document management features",
				"Provided ongoing support and enhancements based on client feedback",
			],
			tech: ['Laravel', 'PHP', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'FilamentPHP'],
		},
	},
];

function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      {/* Education Section */}
      <div className="mobile-section">
        <div className="mobile-header education">
          <span className="mobile-header-icon">🎓</span>
          <h2>Education</h2>
        </div>
        <div className="mobile-card">
          <div className="mobile-card-top">
            <img
              src={bicolLogo}
              alt="Bicol University"
              className="mobile-school-logo"
            />
            <div className="mobile-card-header">
              <h3>Bicol University</h3>
              <div className="mobile-course">Bachelor of Science in Computer Science</div>
            </div>
          </div>
          <div className="mobile-card-body">
            <div className="mobile-meta-row">
              <span>📅 2021 - 2025</span>
              <span>📍 Polangui, Philippines</span>
            </div>
            <ul className="mobile-details">
              <li>Dean's Lister with Academic Excellence</li>
              <li>Best Thesis Awardee: Vision.AI (Assistive App for the Visually Impaired)</li>
              <li>Developer of Vision.AI, an Android app for the visually impaired using YOLOv8, TensorFlow Lite, and OpenCV</li>
              <li>Active participant in academic and programming competitions</li>
              <li>Completed coursework in software engineering, databases, and AI</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Experience Section */}
      <div className="mobile-section">
        <div className="mobile-header experience">
          <span className="mobile-header-icon">💼</span>
          <h2>Experience</h2>
        </div>
        <div className="mobile-card">
          <div className="mobile-card-top">
            <img
              src={psaLogo}
              alt="PSA Logo"
              className="mobile-company-logo"
            />
            <div className="mobile-card-header">
              <h3>Philippine Statistics Authority Region V</h3>
              <div className="mobile-course">Full Stack Developer Intern</div>
            </div>
          </div>
          <div className="mobile-card-body">
            <div className="mobile-meta-row">
              <span>📅 June 2024 - August 2024</span>
              <span>📍 Legazpi City, Philippines</span>
            </div>
            <ul className="mobile-details">
              <li>Spearheaded the design, development, testing, and deployment of PSA-HRIS, a web-based HR system for the agency</li>
              <li>Built secure backend (Laravel, PHP, PostgreSQL) and responsive frontend (HTML, CSS, JS, FilamentPHP)</li>
              <li>Collaborated with PSA IT staff for requirements gathering and user training</li>
              <li>Implemented data visualization and reporting features for HR analytics</li>
              <li>Maintained documentation and provided technical support during rollout</li>
            </ul>
            <div className="mobile-tech-stack">
              {['Laravel', 'PHP', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'FilamentPHP'].map((tech, i) => (
                <span key={i} className="mobile-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mobile-card">
          <div className="mobile-card-top">
            <div className="mobile-card-header">
              <h3>Self-employed</h3>
              <div className="mobile-course">Freelance Full Stack Developer</div>
            </div>
          </div>
          <div className="mobile-card-body">
            <div className="mobile-meta-row">
              <span>📅 2024 - Present</span>
              <span>📍 Ligao City, Philippines</span>
            </div>
            <ul className="mobile-details">
              <li>Developed AccreHub, an accreditation file management system for a local school client</li>
              <li>Handled the full project lifecycle: requirements, design, development, deployment, and training</li>
              <li>Built secure web applications using Laravel, PHP, PostgreSQL, HTML, CSS, JavaScript, and FilamentPHP</li>
              <li>Delivered user-friendly dashboards and document management features</li>
              <li>Provided ongoing support and enhancements based on client feedback</li>
            </ul>
            <div className="mobile-tech-stack">
              {['Laravel', 'PHP', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'FilamentPHP'].map((tech, i) => (
                <span key={i} className="mobile-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatedLine />
    </section>
  );
}

export default Timeline;