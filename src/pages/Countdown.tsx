import React from 'react';
import Timer from "../components/Timer";
import TimerParallax from "../components/TimerParallax";
import TimerTitle from "../components/TimerTitle";
import '../styles/Countdown.css';

import leftC from '../assets/leftCurtainwLight.svg';
import leftCM from '../assets/leftCurtainsM.svg';
import rightC from '../assets/rightCurtainwLight.svg';
import rightCM from '../assets/rightCurtainsM.svg'; 
import lightR from '../assets/lightRed.svg';
import lightP from '../assets/lightPink.svg';
import lightB from '../assets/lightBlue.svg';
import lightPr from '../assets/lightPurple.svg';

const Countdown: React.FC = () => {
  return (
    <div className='countdown'>
      {/* <img src={lightR} className='lightR' alt="Light Red" />
      <img src={lightP} className='lightP' alt="Light Pink" />
      <img src={lightB} className='lightB' alt="Light Blue" />
      <img src={lightPr} className='lightPr' alt="Light Purple" />
      <img src={leftC} className='leftCR' alt="Left Curtain" />
      <img src={leftCM} className='leftCRM' alt="Left Curtain Mobile" />
      <img src={rightC} className='rightCR' alt="Right Curtain" />
      <img src={rightCM} className='rightCRM' alt="Right Curtain Mobile" /> */}

      

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
