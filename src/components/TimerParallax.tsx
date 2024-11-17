import React from 'react';
import '../styles/TimerParallax.css'; 
import hologramImage from '../assets/Hologram spin full.svg'; 

const TimeParallax: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`parallax-container ${className}`}>
      <img src={hologramImage} alt="Hologram" className="parallax-image tp-big" />
      <img src={hologramImage} alt="Hologram" className="parallax-image tp-med" />
      <img src={hologramImage} alt="Hologram" className="parallax-image tp-smol" />
    </div>
  );
};

export default TimeParallax;


