import React, { useEffect, useRef, useState } from "react";
import "../styles/Loader.css";
import logo from "../assets/Logo.png"; // Use your logo path

const LOADING_DURATION = 1800; // ms, adjust for 1.5-2s

const Loader = ({ fadeOut, onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);
  const [exiting, setExiting] = useState(false);
  const canvasRef = useRef(null);

  // Animate progress bar in sync with loader duration
  useEffect(() => {
    let start;
    let frame;
    function animateBar(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const percent = Math.min((elapsed / LOADING_DURATION) * 100, 100);
      setProgress(percent);
      if (elapsed < LOADING_DURATION) {
        frame = requestAnimationFrame(animateBar);
      } else {
        setProgress(100); // Ensure bar is full
        setExiting(true);
        setTimeout(() => {
          setHide(true);
          if (onFinish) onFinish();
        }, 600); // match exit animation duration
      }
    }
    frame = requestAnimationFrame(animateBar);
    return () => cancelAnimationFrame(frame);
  }, [onFinish]);

  // Particle background animation (unchanged)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    const particleCount = 80;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.05;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) {
          particles.splice(index, 1);
          particles.push(new Particle());
        }
      });
      connectParticles();
      animationId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className={
        `loader-joel-container` +
        (exiting ? " loader-exit" : "") +
        ((fadeOut || hide) ? " loader-fadeout" : "")
      }
      style={{ display: hide ? "none" : "flex" }}
    >
      <canvas ref={canvasRef} className="loader-canvas" />
      <div className="loader-content">
        <div className="loader-logo-svg">
          <img src={logo} alt="Logo" />
          <svg className="loader-svg-circle" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffcc" />
                <stop offset="100%" stopColor="#ff00cc" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="5"
              strokeDasharray="10,5"
            />
          </svg>
        </div>
        <div className="loader-logo-text">Joel Rayton</div>
        <div className="loader-progress-bar">
          <div
            className="loader-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;