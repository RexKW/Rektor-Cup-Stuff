import React from 'react';
import '../styles/HomeTitle.css';

const HomeTitle: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`home-title-container ${className}`}>
      <p>Entation</p>
      <span className='subTitle'><p>The Unseen Faction</p></span>
    </div>
  );
};

export default HomeTitle;
