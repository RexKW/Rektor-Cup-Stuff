import React from 'react';
import '../styles/HomeParallax.css';
import hologramImage from '../assets/Hologram spin full.svg';

const HomeParallax: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <div className={`home-parallax-container ${className}`}>
        {/* Top-Left Spinny Thing */}
        <img src={hologramImage} alt="Hologram" className="home-parallax-image top-left-spinny" />
        
        {/* Bottom-Right Spinny Thing */}
        <img src={hologramImage} alt="Hologram" className="home-parallax-image bottom-right-spinny" />
      </div>
    );
  };

export default HomeParallax;
