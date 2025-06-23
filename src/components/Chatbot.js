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
    const [isClosing, setIsClosing] = useState(false);
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
            setIsClosing(false);
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
					className="chatbot-button"
					aria-label="Open chat"
				>
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
				>
					{/* Header with Icon */}
					<div className="chatbot-header">
						<span style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
							aria-label="Close chat"
						>
							× 
						</button>
					</div>
					{/* Messages */}
					<div className="messages-area">
						{messages.map((msg, i) => (
							<div
								key={i}
								className={`message ${msg.from === "user" ? "user-message" : "bot-message"}`}
							>
								<span>
									{typeof msg.text === "string" ? msg.text : msg.text}
								</span>
							</div>
						))}
						<div ref={messagesEndRef} />
					</div>

					{/* Suggestions Carousel */}
					<div className="suggestions-carousel">
						<div
							ref={suggestionsRef}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							{suggestionList.map((s, i) => (
								<button
									key={i}
									onClick={() => {
										const el = suggestionsRef.current;
										const prevScroll = el ? el.scrollLeft : 0;
										const userMsg = { from: "user", text: s };
										const botMsg = { from: "bot", text: getBotResponse(s) };
										setMessages((msgs) => [...msgs, userMsg, botMsg]);
										setInput("");
										setTimeout(() => {
											if (el) el.scrollLeft = prevScroll;
										}, 0);
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
						className="chatbot-input-form"
					>
						<input
							id="chatbot-input"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Ask me about Joel..."
						/>
						<button type="submit">Send</button>
					</form>
				</div>
			)}

			{/* Styles */}
			<style>
				{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
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
              border-radius: 18px;
            }
          }
          @keyframes scaleOut {
            from { 
              transform: scale(1) translate(0, 0);
              opacity: 1;
              box-shadow: 0 8px 32px rgba(100,255,218,0.18);
              border-radius: 18px;
            }
            to { 
              transform: scale(0.3) translate(170px, 170px);
              opacity: 0;
              box-shadow: 0 0 0 rgba(100,255,218,0.00);
              border-radius: 50%;
            }
          }
          .chatbot-button {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: ${accentGradient};
            color: ${darkBg};
            border: none;
            border-radius: 50%;
            width: 3.5rem;
            height: 3.5rem;
            box-shadow: 0 4px 24px rgba(100,255,218,0.18);
            font-size: 1.75rem;
            cursor: pointer;
            z-index: 1001;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease, background 0.2s ease;
          }
          .chatbot-button:hover {
            transform: scale(1.1);
          }
          .chatbot-window {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 24rem;
            max-width: 95vw;
            height: 32rem;
            max-height: 85vh;
            background: ${darkBg};
            color: #fff;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(100,255,218,0.18);
            z-index: 1002;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 2px solid ${accent};
            opacity: ${open ? 1 : 0};
            pointer-events: ${open ? "auto" : "none"};
            transition: opacity 0.3s ease;
            transform-origin: bottom right;
          }
          .chatbot-window.scale-in {
            animation: scaleIn 0.32s cubic-bezier(.4,1.4,.6,1) both;
          }
          .chatbot-window.scale-out {
            animation: scaleOut 0.32s cubic-bezier(.4,1.4,.6,1) both;
          }
          .chatbot-header {
            background: ${accentGradient};
            color: ${darkBg};
            padding: 1rem 1.5rem;
            font-weight: 700;
            font-size: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1.5px solid ${accent};
          }
          .chatbot-header button {
            background: transparent;
            border: none;
            color: ${darkBg};
            font-size: 1.5rem;
            cursor: pointer;
            font-weight: 700;
            transition: transform 0.2s ease;
          }
          .chatbot-header button:hover {
            transform: scale(1.2);
          }
          .messages-area {
            flex: 1 1 0;
            padding: 1rem 1rem 0;
            overflow-y: auto;
            background: rgba(10,25,47,0.98);
            min-height: 10rem;
            transition: background 0.2s ease;
            font-size: 0.9375rem;
            border-bottom: 1px solid ${accent};
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .message {
            display: flex;
            margin: 0.5rem 0;
            animation: fadeIn 0.4s;
          }
          .user-message {
            justify-content: flex-end;
          }
          .bot-message {
            justify-content: flex-start;
          }
          .message span {
            padding: 0.625rem 1rem;
            font-size: 0.9375rem;
            max-width: 80%;
            box-shadow: 0 2px 8px rgba(100,255,218,0.08);
            word-break: break-word;
            line-height: 1.6;
            border-radius: 16px;
          }
          .user-message span {
            background: ${accentGradient};
            color: ${darkBg};
            border: 1.5px solid ${accent};
            border-radius: 16px 16px 8px 16px;
          }
          .bot-message span {
            background: ${darkBg2};
            color: ${accent};
            border: 1.5px solid ${darkBg2};
            border-radius: 16px 16px 16px 8px;
          }
          .suggestions-carousel {
            display: flex;
            align-items: center;
            background: ${darkBg2};
            border-top: 1.5px solid ${accent};
            border-bottom: 1.5px solid ${accent};
            padding: 0 0.625rem;
            min-height: 3rem;
          }
          .suggestions-carousel > div {
            display: flex;
            overflow-x: auto;
            gap: 0.625rem;
            flex: 1;
            scrollbar-width: none;
            ms-overflow-style: none;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          .suggestions-carousel > div::-webkit-scrollbar {
            display: none;
          }
          .suggestions-carousel button {
            background: rgba(100,255,218,0.13);
            color: ${accent};
            border: 1.5px solid ${accent};
            border-radius: 16px;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            cursor: pointer;
            white-space: nowrap;
            transition: background 0.2s ease, color 0.2s ease;
            margin: 0.5rem 0;
            font-weight: 500;
          }
          .suggestions-carousel button:hover {
            background: rgba(100,255,218,0.25);
          }
          .chatbot-input-form {
            display: flex;
            gap: 0.5rem;
            padding: 0.75rem 0.625rem;
            background: ${darkBg2};
            border-top: 1.5px solid ${accent};
          }
          .chatbot-input-form input {
            flex: 1;
            border-radius: 12px;
            border: 1.5px solid ${accent};
            padding: 0.75rem 1rem;
            background: ${darkBg};
            color: #fff;
            font-size: 0.9375rem;
            outline: none;
            min-height: 2.5rem;
          }
          .chatbot-input-form button {
            background: ${accentGradient};
            color: ${darkBg};
            border: none;
            border-radius: 12px;
            padding: 0 1.5rem;
            font-weight: 600;
            font-size: 0.9375rem;
            cursor: pointer;
            transition: background 0.2s ease;
            min-height: 2.5rem;
          }
          .chatbot-input-form button:hover {
            background: linear-gradient(135deg, #2d8cff 40%, #64ffda 100%);
          }
          .chatbot-link {
            color: #64ffda;
            text-decoration: underline;
            cursor: pointer;
            transition: color 0.2s ease;
          }
          .chatbot-link:hover {
            color: #2d8cff;
          }

          /* Responsive styles */
          @media (max-width: 768px) {
            .chatbot-button {
              bottom: 1.5rem;
              right: 1.5rem;
              width: 3rem;
              height: 3rem;
              font-size: 1.5rem;
            }
            .chatbot-window {
              width: 90vw;
              height: 70vh;
              max-height: 80vh;
              left: 50%;
              right: auto;
              transform: translateX(-50%);
              border-radius: 16px;
              border-width: 1.5px;
              box-shadow: 0 6px 24px rgba(0,0,0,0.2);
            }
            .chatbot-header {
              padding: 0.875rem 1.25rem;
              font-size: 1.125rem;
            }
            .chatbot-header button {
              font-size: 1.25rem;
            }
            .messages-area {
              padding: 0.75rem 0.625rem 0;
              font-size: 0.875rem;
            }
            .message span {
              font-size: 0.875rem;
              padding: 0.5rem 0.875rem;
            }
            .suggestions-carousel {
              padding: 0 0.5rem;
              min-height: 2.75rem;
            }
            .suggestions-carousel button {
              font-size: 0.8125rem;
              padding: 0.375rem 0.875rem;
            }
            .chatbot-input-form {
              padding: 0.625rem 0.5rem;
              gap: 0.375rem;
            }
            .chatbot-input-form input {
              padding: 0.625rem 0.875rem;
              font-size: 0.875rem;
              min-height: 2.25rem;
            }
            .chatbot-input-form button {
              padding: 0 1.25rem;
              font-size: 0.875rem;
              min-height: 2.25rem;
            }
          }
          @media (max-width: 480px) {
            .chatbot-button {
              bottom: 1rem;
              right: 1rem;
              width: 2.75rem;
              height: 2.75rem;
            }
            .chatbot-window {
              width: 95vw;
              height: 65vh;
              max-height: 75vh;
              border-radius: 14px;
            }
            .chatbot-header {
              padding: 0.75rem 1rem;
              font-size: 1rem;
            }
            .messages-area {
              padding: 0.625rem 0.5rem 0;
            }
            .suggestions-carousel button {
              font-size: 0.75rem;
              padding: 0.3rem 0.75rem;
            }
            .chatbot-input-form {
              padding: 0.5rem 0.375rem;
            }
          }
        `}
			</style>
		</>
	);
}