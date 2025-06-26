import React from "react";
import  "../styles/Loader.css"; // Ensure you have the CSS for styling

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-glass">
      <div className="loader-spinner"></div>
      <div className="loader-title">Loading Portfolio...</div>
    </div>
  </div>
);

export default Loader;