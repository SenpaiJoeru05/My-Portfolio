import React from 'react';
import './Timeline.css';
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
				'Major in Software Development and AI',
				"Dean's Lister with Academic Excellence",
				'Core Team Member of BU Computing Society',
				'Research: Vision.AI - Mobile Object Detection using YOLOv8',
				'Led development team for university web projects',
			],
		},
		right: {
			type: 'experience',
			title: 'Full Stack Developer Intern',
			company: 'Philippine Statistics Authority Region V',
			duration: 'June 2023 - August 2023',
			location: 'Legazpi City',
			details: [
				'Developed and maintained web applications using Laravel and MySQL',
				'Implemented responsive UI designs and improved user experience',
				'Collaborated with statisticians to create data visualization tools',
				'Assisted in database management and optimization',
			],
			tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
		},
	},
	{
		left: null,
		right: {
			type: 'experience',
			title: 'Freelance Developer',
			company: 'Self-employed',
			duration: '2022 - Present',
			location: 'Remote',
			details: [
				'Built custom websites and web applications for various clients',
				'Developed mobile applications using React Native',
				'Provided technical consulting and solutions architecture',
				'Managed project timelines and client communications',
			],
			tech: ['React', 'React Native', 'Node.js', 'MongoDB', 'AWS'],
		},
	},
];

function Timeline() {
	return (
		<section id="timeline" className="timeline-section">
			{/* Desktop Timeline (existing code) */}
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
									<div className="timeline-card education-card fade-in-left">
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
									</div>
								)}
							</div>
							{/* Center: Connector, Dot */}
							<div className="timeline-center">
								{row.left && (
									<div className="dot-container">
										<div className="timeline-horizontal-connector left-connector"></div>
										{/* Updated dot elements */}
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
									<div className="timeline-card experience-card fade-in-right">
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
									</div>
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

					<div className="mobile-card">
						<img
							src={bicolLogo}
							alt="Bicol University"
							className="mobile-school-logo"
						/>
						<h3>Bachelor of Science in Computer Science</h3>
						<div className="mobile-institution">Bicol University</div>
						<div className="mobile-meta">
							<span>📅 2021 - 2025</span>
							<span>📍 Polangui, Philippines</span>
						</div>
						<ul className="mobile-details">
							<li>Major in Software Development and AI</li>
							<li>Dean's Lister with Academic Excellence</li>
							<li>Core Team Member of BU Computing Society</li>
							<li>Research: Vision.AI - Mobile Object Detection using YOLOv8</li>
							<li>Led development team for university web projects</li>
						</ul>
					</div>
				</div>

				{/* Experience Section */}
				<div className="mobile-section">
					<div className="mobile-header experience">
						<span className="mobile-header-icon">💼</span>
						<h2>Experience</h2>
					</div>

					{/* First Experience Card */}
					<div className="mobile-card">
						<img
							src={psaLogo}
							alt="PSA Logo"
							className="mobile-company-logo"
						/>
						<h3>Philippine Statistics Authority</h3>
						<div className="mobile-institution">Full Stack Developer Intern</div>
						<div className="mobile-meta">
							<span>📅 June 2023 - August 2023</span>
							<span>📍 Legazpi City</span>
						</div>
						<ul className="mobile-details">
							<li>Developed and maintained web applications using Laravel and MySQL</li>
							<li>Implemented responsive UI designs and improved user experience</li>
							<li>Collaborated with statisticians to create data visualization tools</li>
							<li>Assisted in database management and optimization</li>
						</ul>
						<div className="mobile-tech-stack">
							{['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'].map((tech, i) => (
								<span key={i} className="mobile-tech-tag">
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Second Experience Card */}
					<div className="mobile-card">
						<h3>Freelance Developer</h3>
						<div className="mobile-institution">Self-employed</div>
						<div className="mobile-meta">
							<span>📅 2022 - Present</span>
							<span>📍 Remote</span>
						</div>
						<ul className="mobile-details">
							<li>Built custom websites and web applications for various clients</li>
							<li>Developed mobile applications using React Native</li>
							<li>Provided technical consulting and solutions architecture</li>
							<li>Managed project timelines and client communications</li>
						</ul>
						<div className="mobile-tech-stack">
							{['React', 'React Native', 'Node.js', 'MongoDB', 'AWS'].map((tech, i) => (
								<span key={i} className="mobile-tech-tag">
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
				<AnimatedLine />
			</div>
		</section>
	);
}

export default Timeline;