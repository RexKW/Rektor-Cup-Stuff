import React from 'react';
import Timer from "../components/Timer";
import TimerParallax from "../components/TimerParallax";
import TimerTitle from "../components/TimerTitle";
import Floor from "../assets/Floor.svg"
import BG from "../assets/BGStripe.png"
import '../styles/Countdown.css';
import dots from '../assets/dots.png';

const Countdown: React.FC = () => {
  return (
    <div className='countdown bg-[#000919] h-screen relative justify-center flex flex-col'>


      
      <div className='z-10 relative flex flex-col justify-center items-center' >
        {/* Weird Spinny Thingy Component */}
        <TimerParallax className='T_Parallax opacity-20' />
        
        {/* Timer Component */}
        <Timer className='timerCountdown' />

        {/* Weird Spinny Thingy Component */}
        <TimerTitle className='T_T' />
      </div>
      <img src={dots} alt="" className='w-[30vw] h-[30vw] absolute top-0 left-0 rotate-180'/>
      <img src={dots} alt="" className='w-[30vw] h-[30vw] absolute top-0 right-0 rotate-[-90deg]'/>
      <img src={Floor} alt="" className='absolute bottom-[-15%] w-screen z-[3]'/>
      <img src={BG} alt="" className='w-screen h-screen absolute z-[0] opacity-50'/>
      <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className='h-screen blur-[0px] absolute top-0 left-0 z-0' viewBox="0 0 1440 1024" fill="none" >
          <g filter="url(#filter0_f_783_470)">
            <path d="M545 141C545 716.481 263.163 1183 -84.5 1183C-432.163 1183 -714 716.481 -714 141C-714 -434.481 -432.163 -901 -84.5 -901C263.163 -901 545 -434.481 545 141Z" fill="#04385E" />
          </g>
          <defs>
            <filter id="filter0_f_783_470" x="-1714" y="-1901" width="3259" height="4084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_783_470" />
            </filter>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className='h-screen  absolute right-0 bottom-0 z-0' viewBox="0 0 1440 1024" fill="none">
          <g filter="url(#filter0_f_783_469)">
            <path d="M2067 1064C2067 1639.48 1785.16 2106 1437.5 2106C1089.84 2106 808 1639.48 808 1064C808 488.519 1089.84 22 1437.5 22C1785.16 22 2067 488.519 2067 1064Z" fill="#380855" />
          </g>
          <defs>
            <filter id="filter0_f_783_469" x="-192" y="-978" width="3259" height="4084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_783_469" />
            </filter>
          </defs>
        </svg>
    </div>
  );
};

export default Countdown;
