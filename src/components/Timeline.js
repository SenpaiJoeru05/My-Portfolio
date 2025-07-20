import { motion } from "framer-motion";
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

// Animation variants
const leftVariants = {
	hidden: { opacity: 0, x: -80 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const rightVariants = {
	hidden: { opacity: 0, x: 80 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

function Timeline() {
	return (
		<motion.section
			id="timeline"
			className="timeline-section"
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
		>
			{/* Desktop Timeline */}
			<div className="timeline-desktop">
				<div className="timeline-headers-wrapper">
					<div className="timeline-header-row">
						<div className="timeline-header-label education-label">
							<div className="header-content">
								<span className="timeline-label-icon">🎓</span>
								Education
							</div>
						</div>
						<div className="timeline-empty"></div>
						<div className="timeline-header-label experience-label">
							<div className="header-content">
								<span className="timeline-label-icon">💼</span>
								Experience
							</div>
						</div>
					</div>
				</div>
				<div className="timeline-main-grid">
					{/* Vertical timeline line (unbroken, behind everything) */}
					<div className="timeline-vertical-main"></div>
					{timelineRows.map((row, idx) => (
						<div className="timeline-row" key={idx}>
							{/* Left: Education */}
							<div className="timeline-side left">
								{row.left && (
									<motion.div
										className="timeline-card education-card"
										variants={leftVariants}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, amount: 0.3 }}
									>
										<div className="education-content">
											<img
												src={row.left.logo}
												alt="School Logo"
												className="school-logo"
											/>
											<div>
												<h3>{row.left.title}</h3>
												<span className="school-name">
													{row.left.institution}
												</span>
												<div className="education-meta">
													<span className="year">
														📅 {row.left.duration}
													</span>
													<span className="location">
														📍 {row.left.location}
													</span>
												</div>
												<ul className="achievements">
													{row.left.details.map((d, i) => (
														<li key={i}>{d}</li>
													))}
												</ul>
											</div>
										</div>
									</motion.div>
								)}
							</div>
							{/* Center: Connector, Dot */}
							<div className="timeline-center">
								{row.left && (
									<div className="dot-container">
										<div className="timeline-horizontal-connector left-connector"></div>
										<div className="timeline-dot education-dot"></div>
									</div>
								)}
								{row.right && (
									<div className="dot-container">
										<div className="timeline-dot experience-dot"></div>
										<div className="timeline-horizontal-connector right-connector"></div>
									</div>
								)}
							</div>
							{/* Right: Experience */}
							<div className="timeline-side right">
								{row.right && (
									<motion.div
										className="timeline-card experience-card"
										variants={rightVariants}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, amount: 0.3 }}
									>
										{row.right.company === 'Philippine Statistics Authority Region V' && (
											<img 
												src={psaLogo} 
												alt="PSA Logo" 
												className="company-logo"
											/>
										)}
										<div className="experience-content">
											<h3>{row.right.title}</h3>
											<span className="company-name">{row.right.company}</span>
											<div className="experience-meta">
												<span className="duration">📅 {row.right.duration}</span>
											</div>
											<div className="location-meta">
												<span className="location">📍 {row.right.location}</span>
											</div>
											<ul className="experience-details">
												{row.right.details.map((d, i) => (
													<li key={i}>{d}</li>
												))}
											</ul>
											{row.right.tech && (
												<div className="tech-stack">
													{row.right.tech.map((t, i) => (
														<span key={i} className="tech-tag">{t}</span>
													))}
												</div>
											)}
										</div>
									</motion.div>
								)}
							</div>
						</div>
					))}
				</div>
				<AnimatedLine />
			</div>

			{/* Mobile Timeline */}
			<div className="timeline-mobile container">
				{/* Education Section */}
				<div className="mobile-section">
					<div className="mobile-header education">
						<span className="mobile-header-icon">🎓</span>
						<h2>Education</h2>
					</div>
					<motion.div
						className="mobile-card"
						variants={leftVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
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
					</motion.div>
				</div>

				{/* Experience Section */}
				<div className="mobile-section">
					<div className="mobile-header experience">
						<span className="mobile-header-icon">💼</span>
						<h2>Experience</h2>
					</div>

					{/* First Experience Card */}
					<motion.div
						className="mobile-card"
						variants={rightVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
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
					</motion.div>

					{/* Second Experience Card */}
					<motion.div
						className="mobile-card"
						variants={rightVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
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
					</motion.div>
				</div>
				<AnimatedLine />
			</div>
		</motion.section>
	);
}

export default Timeline;