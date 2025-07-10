import React, { useEffect, useState, useRef } from "react";
import "../styles/Loader.css";
import logo from "../assets/Logo.png";

const LOGO_ANIMATION = 1100; // ms, logo and name animation duration
const BAR_FILL = 1200; // ms, bar fill duration
const FADE_DURATION = 600; // ms, fade out duration
const HOLD_DURATION = 350; // ms, hold time after bar fill

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);
  const startRef = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    // Cleanup to prevent memory leaks or premature onFinish calls
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
  const logoTimer = setTimeout(() => {
    function animateBar(ts) {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const percent = Math.min((elapsed / BAR_FILL) * 100, 100);
      setProgress(percent);
      if (percent < 100) {
        requestAnimationFrame(animateBar);
      } else {
        setProgress(100);
        setTimeout(() => {
          if (isMounted.current) {
            setFade(true);
            setTimeout(() => {
              if (isMounted.current && onFinish) {
                onFinish(); // Calls showLoader()() to set isLoading to false
              }
            }, FADE_DURATION);
          }
        }, HOLD_DURATION);
      }
    }
    requestAnimationFrame(animateBar);
  }, LOGO_ANIMATION);

  return () => clearTimeout(logoTimer);
}, [onFinish]);

  return (
    <div className={`preloader${fade ? " preloader-hide" : ""}`}>
      <div className="logo-img no-bg">
        <img src={logo} alt="Logo" draggable="false" />
      </div>
      <div className="loader-name">Joel Rayton</div>
      <div className="loader-bar">
        <div
          className="loader-bar-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;