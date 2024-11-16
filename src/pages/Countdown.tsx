import React from 'react';
import Timer from "../components/Timer";
import TimerParallax from "../components/TimerParallax";
import TimerTitle from "../components/TimerTitle";
import '../styles/Countdown.css';

const Countdown: React.FC = () => {
  return (
    <div className='countdown'>


      

      {/* Weird Spinny Thingy Component */}
      <TimerParallax className='T_Parallax' />
      
      {/* Timer Component */}
      <Timer className='timerCountdown' />

      {/* Weird Spinny Thingy Component */}
      <TimerTitle className='T_T' />
    </div>
  );
};

export default Countdown;
