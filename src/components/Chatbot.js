import React, { useState, useRef, useEffect } from "react";

const botResponses = [
	// Skills
	{
		keywords: [
			"skills", "what are your skills", "tech stack", "technologies", "what can you do", "what do you use"
		],
		response: "My main skills are React, Laravel, PostgreSQL, JavaScript, PHP, and FilamentPHP. I also work with HTML, CSS, and modern web tools.",
	},
	// Projects
	{
		keywords: [
			"show me your projects", "projects", "portfolio", "can i see your projects", "what have you built", "what are your projects"
		],
		response: (
			<>
				You can view my projects in the{" "}
				<a
					href="#projects"
					className="chatbot-link"
					onClick={scrollToSection("projects")}
				>
					Projects
				</a>{" "}
				section of this portfolio. My featured projects include Vision.AI (an assistive app for the visually impaired), AccreHub (an accreditation file management system), and PSA-HRIS (a web-based HR system for the Philippine Statistics Authority).
			</>
		),
	},
	// Experience
	{
		keywords: [
			"experience", "tell me about your experience", "work", "job", "career", "where have you worked", "work history"
		],
		response: "I developed the PSA-HRIS for the Philippine Statistics Authority Region V as a Full Stack Developer Intern, and AccreHub for a local school client as a freelance developer. I also work on various web and mobile projects for clients in my area.",
	},
	// Education
	{
		keywords: [
			"education", "where did you study", "school", "university", "college", "degree", "what did you study"
		],
		response: "I graduated from Bicol University with a Bachelor of Science in Computer Science.",
	},
	// Contact
	{
		keywords: [
			"contact", "how can i contact you", "email", "reach", "get in touch", "how do i contact you"
		],
		response: (
			<>
				You can contact me via the{" "}
				<a
					href="#contact"
					className="chatbot-link"
					onClick={scrollToSection("contact")}
				>
					Contact
				</a>{" "}
				section of this site or email me at{" "}
				<a
					href="mailto:joelrayton@gmail.com"
					className="chatbot-link"
				>
					joelrayton@gmail.com
				</a>
				.
			</>
		),
	},
	// Resume
	{
		keywords: [
			"resume", "cv", "show me your resume", "can i see your resume", "download your resume"
		],
		response: (
			<>
				You can view or download my resume from the{" "}
				<a
					href="#resume"
					className="chatbot-link"
					onClick={scrollToSection("resume")}
				>
					Resume
				</a>{" "}
				button on the homepage.
			</>
		),
	},
	// GitHub
	{
		keywords: [
			"github", "repo", "source code", "what's your github", "can i see your github"
		],
		response: (
			<>
				You can find my code and open source projects on my{" "}
				<a
					href="https://github.com/SenpaiJoeru05"
					className="chatbot-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				.
			</>
		),
	},
	// Vision.AI
	{
		keywords: [
			"vision.ai", "what is vision.ai", "thesis", "android app", "tell me about vision.ai"
		],
		response: "Vision.AI is my award-winning thesis project: an Android app that helps the visually impaired using YOLOv8, TensorFlow Lite, and OpenCV. It won Best Thesis at Bicol University.",
	},
	// Greetings
	{
		keywords: [
			"hi", "hello", "hey", "good morning", "good evening", "good afternoon"
		],
		response: "Hello! 👋 How can I help you learn more about me?",
	},
	// Hobbies
	{
		keywords: [
			"hobby", "hobbies", "free time", "do you like", "what do you do for fun", "interests"
		],
		response: "I enjoy coding, learning about AI, watching anime, and playing strategy games in my free time.",
	},
	// Location
	{
		keywords: [
			"location", "where are you", "where do you live", "where are you from", "based"
		],
		response: "I'm based in Ligao City, Philippines.",
	},
	// Awards
	{
		keywords: [
			"award", "achieve", "achievement", "recognition", "distinction", "honor"
		],
		response: "I was a Dean's Lister and received the Best Thesis Award for Vision.AI, an assistive app for the visually impaired.",
	},
	// Favorite tech
	{
		keywords: [
			"favorite", "love", "like most", "favorite stack", "favorite technology"
		],
		response: "I love building useful software and learning new technologies. My favorite stack is React + Laravel + PostgreSQL.",
	},
	// Thanks
	{
		keywords: [
			"thank", "thanks", "thank you", "appreciate"
		],
		response: "You're welcome! If you have more questions, just ask.",
	},
	// How are you
	{
		keywords: [
			"how are you", "how's it going", "how do you do"
		],
		response: "I'm just a bot, but I'm always ready to help you learn more about Joel!",
	},
	// Age
	{
		keywords: [
			"age", "old are you", "how old are you"
		],
		response: "I'm a portfolio bot, but Joel is a young and passionate software engineer.",
	},
	// AI
	{
		keywords: [
			"ai", "artificial intelligence", "do you like ai", "are you interested in ai"
		],
		response: "I'm passionate about AI! I love building and learning about AI-powered solutions.",
	},
	// Default fallback
	{
		keywords: [],
		response: "I'm Joel's portfolio bot! You can ask me about my skills, experience, education, projects, awards, or hobbies.",
	},
];

function scrollToSection(id) {
	return (e) => {
		e.preventDefault();
		const el =
			document.getElementById(id) ||
			document.querySelector(`[name='${id}']`);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};
}

function getBotResponse(input) {
	const lower = input.toLowerCase();
	for (const entry of botResponses) {
		if (entry.keywords.some((k) => lower.includes(k))) {
			return entry.response;
		}
	}
	return "I'm Joel's portfolio bot! You can ask me about my skills, experience, education, projects, awards, or hobbies.";
}

export default function Chatbot() {
    const [messages, setMessages] = useState([
        { from: "bot", text: "👋 Hi! I'm Joel's portfolio bot. Ask me anything about Joel Rayton." },
    ]);
    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // NEW
    const messagesEndRef = useRef(null);
    const suggestionsRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const suggestionList = [
		"What are your skills?",
		"Show me your projects",
		"Tell me about your experience",
		"Where did you study?",
		"How can I contact you?",
		"Show me your resume",
		"What's your GitHub?",
		"What is Vision.AI?",
	];

	// Auto-scroll animation for suggestions
	useEffect(() => {
		if (!open) return;
		const el = suggestionsRef.current;
		if (!el) return;
		let running = true;
		const scrollStep = 1; 
		const scrollDelay = 20; 

		function animate() {
			if (!running || isHovered) return;
			if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1) {
				el.scrollLeft = 0; 
			} else {
				el.scrollLeft += scrollStep;
			}
			if (running && !isHovered) setTimeout(animate, scrollDelay);
		}
		animate();
		return () => { running = false; };
	}, [open, isHovered, suggestionList.length]);

	useEffect(() => {
		if (open && messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages, open]);

	// Animation for open/close
	const handleOpen = () => {
        setIsClosing(false);
        setAnimating(true);
        setOpen(true);
        setTimeout(() => setAnimating(false), 300);
    };
    const handleClose = () => {
        setIsClosing(true); 
        setAnimating(true);
        setTimeout(() => {
            setOpen(false);
            setAnimating(false);
            setIsClosing(false); // Reset after animation
        }, 300);
    };

	const sendMessage = (e) => {
		e.preventDefault();
		if (!input.trim()) return;
		const userMsg = { from: "user", text: input };
		const botMsg = { from: "bot", text: getBotResponse(input) };
		setMessages((msgs) => [...msgs, userMsg, botMsg]);
		setInput("");
	};

	// Theme colors
	const darkBg = "#0a192f";
	const darkBg2 = "#112240";
	const accent = "#64ffda";
	const accentGradient = "linear-gradient(135deg, #2d8cff 60%, #64ffda 100%)";

	return (
		<>
			{/* Floating Chat Button */}
			{!open && (
				<button
					onClick={handleOpen}
					style={{
						position: "fixed",
						bottom: 32,
						right: 32,
						background: accentGradient,
						color: "#0a192f",
						border: "none",
						borderRadius: "50%",
						width: 56,
						height: 56,
						boxShadow: "0 4px 24px rgba(100,255,218,0.18)",
						fontSize: 28,
						cursor: "pointer",
						zIndex: 1001,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transition: "background 0.2s",
					}}
					aria-label="Open chat"
				>
					{/* Modern robot SVG icon */}
					<svg
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
					>
						<rect
							x="4"
							y="8"
							width="16"
							height="10"
							rx="4"
							fill="#0a192f"
							stroke="#64ffda"
							strokeWidth="2"
						/>
						<circle
							cx="8.5"
							cy="13"
							r="1.5"
							fill="#64ffda"
						/>
						<circle
							cx="15.5"
							cy="13"
							r="1.5"
							fill="#64ffda"
						/>
						<rect
							x="10"
							y="2"
							width="4"
							height="4"
							rx="2"
							fill="#64ffda"
						/>
						<rect
							x="2"
							y="12"
							width="2"
							height="4"
							rx="1"
							fill="#64ffda"
						/>
						<rect
							x="20"
							y="12"
							width="2"
							height="4"
							rx="1"
							fill="#64ffda"
						/>
					</svg>
				</button>
			)}

			{/* Chatbot Window with animation */}
			{(open || animating) && (
				<div
					className={
						animating
							? isClosing
								? "chatbot-window scale-out"
								: "chatbot-window scale-in"
							: "chatbot-window"
					}
					style={{
						position: "fixed",
						bottom: 32,
						right: 32,
						width: 370,
						maxWidth: "98vw",
						background: darkBg,
					 color: "#fff",
						borderRadius: 22,
						boxShadow: "0 8px 32px rgba(100,255,218,0.18)",
						zIndex: 1002,
						padding: 0,
						display: "flex",
						flexDirection: "column",
						overflow: "hidden",
						border: `2.5px solid ${accent}`,
						opacity: open ? 1 : 0,
						pointerEvents: open ? "auto" : "none",
						transition: "opacity 0.3s",
						transformOrigin: "bottom right",
						height: 500, // <-- add a fixed height for desktop, or use 100% for mobile
						minHeight: 350,
					}}
				>
					{/* Header with Icon */}
					<div
						style={{
							background: accentGradient,
							color: darkBg,
							padding: "18px 26px 18px 20px",
							fontWeight: 700,
							fontSize: 20,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottom: `1.5px solid ${accent}`,
						}}
					>
						<span style={{ display: "flex", alignItems: "center", gap: 10 }}>
							{/* Robot Icon */}
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
							  <rect x="4" y="8" width="16" height="10" rx="4" fill="#0a192f" stroke="#64ffda" strokeWidth="2"/>
							  <circle cx="8.5" cy="13" r="1.5" fill="#64ffda"/>
							  <circle cx="15.5" cy="13" r="1.5" fill="#64ffda"/>
							  <rect x="10" y="2" width="4" height="4" rx="2" fill="#64ffda"/>
							  <rect x="2" y="12" width="2" height="4" rx="1" fill="#64ffda"/>
							  <rect x="20" y="12" width="2" height="4" rx="1" fill="#64ffda"/>
							</svg>
							JoelBot
						</span>
						<button
							onClick={handleClose}
							style={{
								background: "transparent",
								border: "none",
								color: darkBg,
								fontSize: 26,
								cursor: "pointer",
								marginLeft: 8,
								fontWeight: 700,
							}}
							aria-label="Close chat"
						>
							×
						</button>
					</div>
					{/* Messages */}
					<div
						className="messages-area" // <-- Add this!
						style={{
							flex: "1 1 0",
							padding: "20px 18px 0 18px", // Remove bottom padding!
							overflowY: "auto",
							background: "rgba(10,25,47,0.98)",
							minHeight: 180,
							maxHeight: 300,
							transition: "background 0.2s",
							fontSize: 15,
							borderBottom: `1px solid ${accent}`,
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
						}}
					>
						{messages.map((msg, i) => (
							<div
								key={i}
								style={{
									display: "flex",
									justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
									margin: "8px 0",
									animation: "fadeIn 0.4s",
									animationDelay: `${i * 0.04}s`,
									animationFillMode: "backwards",
								}}
							>
								<span
									style={{
										background: msg.from === "user"
											? accentGradient
											: darkBg2,
										color: msg.from === "user" ? darkBg : accent,
										borderRadius: msg.from === "user"
											? "20px 20px 8px 20px"
											: "20px 20px 20px 8px",
										padding: "10px 16px",
										fontSize: 15,
										maxWidth: "80%",
										boxShadow: msg.from === "user"
											? "0 2px 8px rgba(100,255,218,0.10)"
											: "0 2px 8px rgba(100,255,218,0.08)",
										wordBreak: "break-word",
										lineHeight: 1.6,
										border: msg.from === "user"
											? `1.5px solid ${accent}`
											: `1.5px solid ${darkBg2}`,
									}}
								>
									{typeof msg.text === "string" ? msg.text : msg.text}
								</span>
							</div>
						))}
						<div ref={messagesEndRef} />
					</div>

					{/* Suggestions Carousel */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							background: darkBg2,
							borderTop: `1.5px solid ${accent}`,
							borderBottom: `1.5px solid ${accent}`,
							padding: "0 10px",
							minHeight: 54,
							margin: 0, // Remove margin
						}}
					>
						<div
							ref={suggestionsRef}
							style={{
								display: "flex",
								overflowX: "auto",
								gap: 10,
								flex: 1,
								scrollbarWidth: "none",
								msOverflowStyle: "none",
								scrollBehavior: "smooth",
							}}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							{suggestionList.map((s, i) => (
								<button
									key={i}
									onClick={() => {
										// Capture current scroll position
										const el = suggestionsRef.current;
										const prevScroll = el ? el.scrollLeft : 0;

										const userMsg = { from: "user", text: s };
										const botMsg = { from: "bot", text: getBotResponse(s) };
										setMessages((msgs) => [...msgs, userMsg, botMsg]);
										setInput("");

										// Restore scroll position after DOM updates
										setTimeout(() => {
											if (el) el.scrollLeft = prevScroll;
										}, 0);
									}}
									style={{
										background: "rgba(100,255,218,0.13)",
										color: accent,
										border: `1.5px solid ${accent}`,
										borderRadius: 18,
										padding: "6px 18px",
										fontSize: 14,
										cursor: "pointer",
										whiteSpace: "nowrap",
										transition: "background 0.2s, color 0.2s",
										margin: "8px 0",
										fontWeight: 500,
									}}
									type="button"
								>
									{s}
								</button>
							))}
						</div>
					</div>

					{/* Input */}
					<form
						onSubmit={sendMessage}
						style={{
							display: "flex",
							gap: 6,
							padding: "12px 10px", // Reduce padding
							background: darkBg2,
							borderTop: `1.5px solid ${accent}`,
							margin: 0, // Remove margin
						}}
					>
						<input
							id="chatbot-input"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Ask me about Joel..."
							style={{
								flex: 1,
								borderRadius: 10,
								border: `1.5px solid ${accent}`,
								padding: "10px 14px",
								background: darkBg,
								color: "#fff",
								fontSize: 15,
								outline: "none",
							}}
						/>
						<button
							type="submit"
							style={{
								background: accentGradient,
								color: darkBg,
								border: "none",
								borderRadius: 10,
								padding: "0 20px",
								fontWeight: 600,
								fontSize: 15,
								cursor: "pointer",
								transition: "background 0.2s",
							}}
						>
							Send
						</button>
					</form>
				</div>
			)}

			{/* Keyframes for fadeIn and scale animations */}
			<style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes scaleIn {
            from { 
              transform: scale(0.3) translate(170px, 170px);
              opacity: 0.2;
              box-shadow: 0 0 0 rgba(100,255,218,0.00);
              border-radius: 50%;
            }
            to { 
              transform: scale(1) translate(0, 0);
              opacity: 1;
              box-shadow: 0 8px 32px rgba(100,255,218,0.18);
              border-radius: 22px;
            }
          }
          @keyframes scaleOut {
            from { 
              transform: scale(1) translate(0, 0);
              opacity: 1;
              box-shadow: 0 8px 32px rgba(100,255,218,0.18);
              border-radius: 22px;
            }
            to { 
              transform: scale(0.3) translate(170px, 170px);
              opacity: 0;
              box-shadow: 0 0 0 rgba(100,255,218,0.00);
              border-radius: 50%;
            }
          }
          .chatbot-window {
            transform-origin: calc(100% - 28px) calc(100% - 28px);
          }
          .chatbot-window.scale-in {
            animation: scaleIn 0.32s cubic-bezier(.4,1.4,.6,1) both;
          }
          .chatbot-window.scale-out {
            animation: scaleOut 0.32s cubic-bezier(.4,1.4,.6,1) both;
          }
          .chatbot-link {
            color: #64ffda;
            text-decoration: underline;
            cursor: pointer;
            transition: color 0.2s;
          }
          .chatbot-link:hover {
            color: #2d8cff;
          }

          /* --- Responsive styles for mobile --- */
          @media (max-width: 600px) {
            .chatbot-window {
              width: 92vw !important;
              max-width: 400px !important;
              min-width: 0 !important;
              height: 68vh !important;
              max-height: 80vh !important;
              left: 50% !important;
              right: auto !important;
              transform: translateX(-50%) !important;
              border-radius: 18px !important;
              box-shadow: 0 6px 32px rgba(0,0,0,0.18);
              border-width: 2px !important;
              z-index: 1002;
              display: flex !important;
              flex-direction: column !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .chatbot-window .messages-area {
              flex: 1 1 0 !important;
              padding: 12px 8px 0 8px !important;
              font-size: 14px !important;
              min-height: 0 !important;
              max-height: none !important;
              display: flex !important;
              flex-direction: column !important;
              justify-content: flex-end !important;
            }
            .chatbot-window form {
              padding: 14px 10px 10px 10px !important; /* More padding for comfort */
              margin: 0 !important;
              gap: 10px !important; /* More space between input and button */
              background: #112240 !important;
              border-radius: 0 0 16px 16px !important;
              box-shadow: 0 -2px 12px rgba(0,0,0,0.06);
            }
            .chatbot-window form input {
              padding: 14px 14px !important; /* More vertical padding */
              font-size: 16px !important;
              border-radius: 12px !important;
              min-height: 44px !important;
            }
            .chatbot-window form button[type="submit"] {
              padding: 0 26px !important;
              font-size: 16px !important;
              min-height: 44px !important;
              border-radius: 12px !important;
              font-weight: 700 !important;
              box-shadow: 0 2px 8px rgba(100,255,218,0.10);
            }
            .chatbot-window .suggestions-carousel {
              min-height: 44px !important;
              padding: 0 2px !important;
              margin: 0 !important;
            }
          }
          /* Make suggestion carousel easier to scroll on touch */
          .chatbot-window .suggestions-carousel {
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .chatbot-window .suggestions-carousel::-webkit-scrollbar {
            display: none;
          }
        `}
            </style>
        </>
    );
}