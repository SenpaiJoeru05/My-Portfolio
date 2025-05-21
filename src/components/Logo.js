import React from 'react';
import logoImage from '../assets/Logo.png';

const Logo = () => {
  return (
    <div className="nav-brand">
      <img 
        src={logoImage} 
        alt="JR Logo" 
        width="80"    // Increased size significantly
        height="80"   // Increased size significantly
      />
    </div>
  );
};

export default Logo;