import React from 'react';
import '../styles/HomeTitle.css';

const HomeTitle: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`home-title-container ${className}`}>
      <p>Judul Escape</p>
    </div>
  );
};

export default HomeTitle;
