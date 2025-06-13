import React from 'react';
import './Timeline.css';
import AnimatedLine from './AnimatedLine';
import bicolLogo from '../assets/bicol-logo.png';

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
			company: 'Philippine Statistics Authority',
			duration: 'June 2023 - December 2023',
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
		<section className="timeline-section">
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
								<>
									<div className="timeline-horizontal-connector left-connector"></div>
									<div className="timeline-dot education-dot">
										<span className="dot-icon">🎓</span>
									</div>
								</>
							)}
							{row.right && (
								<>
									<div className="timeline-dot experience-dot">
										<span className="dot-icon">💼</span>
									</div>
									<div className="timeline-horizontal-connector right-connector"></div>
								</>
							)}
						</div>
						{/* Right: Experience */}
						<div className="timeline-side right">
							{row.right && (
								<div className="timeline-card experience-card fade-in-right">
									<div className="experience-header">
										<h3>{row.right.title}</h3>
										<span className="company">{row.right.company}</span>
									</div>
									<div className="experience-meta">
										<span className="duration">
											📅 {row.right.duration}
										</span>
										<span className="location">
											📍 {row.right.location}
										</span>
									</div>
									<ul className="experience-details">
										{row.right.details.map((d, i) => (
											<li key={i}>{d}</li>
										))}
									</ul>
									<div className="tech-stack">
										{row.right.tech &&
											row.right.tech.map((t, i) => (
												<span key={i} className="tech-tag">
													{t}
												</span>
											))}
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
			<AnimatedLine />
		</section>
	);
}

export default Timeline;