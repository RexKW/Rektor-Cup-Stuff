import React from 'react';
import '../styles/TimerTitle.css'; 

const TimerTitle: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`title-container ${className}`}>
      <p>Escape Room</p>
    </div>
  );
};

export default TimerTitle;


