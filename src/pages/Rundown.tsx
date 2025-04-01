import clouds from '../assets/Clouds.png'
import track from '../assets/TrainTrack.svg'
import cityFront from '../assets/frontCity.png'
import cityBack from '../assets/backCity.png'
import train from '../assets/train.svg'
import mascot from '../assets/MascotWing.png'
import { useRef, useState, useEffect } from 'react';
import gsap from "gsap"
import HologramSpin from '../assets/Hologram spin full.svg';
import TimelineBG from '../assets/TimelineBG.png'
import TimelineBottomBG from '../assets/TimelineBottomBG.png'
import BGFinal from "../assets/BGStripe.png"

// Import the single-page components for each date
import Maret3 from '../helper/rundown/Maret3';
import Maret4CC from '../helper/rundown/Maret4CC'
import Maret4Badminton from '../helper/rundown/Maret4Badminton';
import Maret5CC from '../helper/rundown/Maret5CC';
import Maret5Badminton from '../helper/rundown/Maret5Badminton';
import Maret6Catur from '../helper/rundown/Maret6Catur';
import Maret6Futsal from '../helper/rundown/Maret6Futsal';
import Maret7Catur from '../helper/rundown/Maret7Catur'
import Maret7Futsal from '../helper/rundown/Maret7Futsal'
import Maret10Basket from '../helper/rundown/Maret10Basket'
import Maret10Debate from '../helper/rundown/Maret10Debate'
import Maret11Basket from '../helper/rundown/Maret11Basket'
import Maret11Debate from '../helper/rundown/Maret11Debate'
import Maret12Basket from '../helper/rundown/Maret12Basket'
import Maret12Debate from '../helper/rundown/Maret12Debate'
import Maret13Basket from '../helper/rundown/Maret13Basket'
import Maret14Basket from '../helper/rundown/Maret14Basket'
import Maret14Dance from '../helper/rundown/Maret14Dance'
import Maret17PUBG from '../helper/rundown/Maret17PUBG'
import Maret18Billiard from '../helper/rundown/Maret18Billiard'
import Maret18PUBG from '../helper/rundown/Maret18PUBG'
import Maret19Billiard from '../helper/rundown/Maret19Billiard'
import Maret19ML from '../helper/rundown/Maret19ML'
import Maret20Billiard from '../helper/rundown/Maret20Billiard'
import Maret20ML from '../helper/rundown/Maret20ML'
import Maret21Art from '../helper/rundown/Maret21Art'
import Maret21Closing from '../helper/rundown/Maret21Closing'


function Rundown() {
  const trainRef = useRef<HTMLImageElement>(null);
  const cloudRef = useRef<HTMLImageElement>(null);
  const mascotRef = useRef<HTMLImageElement>(null);
  const [selectedDate, setSelectedDate] = useState('Opening'); //default
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dates = [
    'Opening',
    '4 Maret COC',
    '4 Maret Badminton',
    '5 Maret COC',
    '5 Maret Badminton',
    '6 Maret Catur',
    '6 Maret Futsal',
    '7 Maret Catur',
    '7 Maret Futsal',
    '10 Maret Basket',
    '10 Maret Debat',
    '11 Maret Basket',
    '11 Maret Debat',
    '12 Maret Basket',
    '12 Maret Debat',
    '13 Maret Basket',
    '14 Maret Basket',
    '14 Maret Dance',
    '17 Maret PUBG',
    '18 Maret Billiard',
    '18 Maret PUBG',
    '19 Maret Billiard',
    '19 Maret Mobile Legends',
    '20 Maret Billiard',
    '20 Maret Mobile Legends',
    '21 Maret Art',
    'Closing',
  ];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const cl = gsap.timeline({ repeat: -1, defaults: { ease: "power4.out", duration: 1 } });
    const ml = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    if (trainRef.current) {
      tl.to(trainRef.current, { x: -1500, opacity: 1 })
        .to(trainRef.current, { x: 2500, opacity: 1, duration: 5 })
        .to(trainRef.current, { x: -1500, opacity: 1, duration: 5 })
        .to(trainRef.current, { x: 2500, opacity: 1, duration: 5 });
    }

    if (cloudRef.current) {
      cl.to(cloudRef.current, { y: 0, duration: 1, ease: "linear" })
        .to(cloudRef.current, { y: -5, duration: 2, ease: "linear" })
        .to(cloudRef.current, { y: 0, duration: 1, ease: "linear" });
    }

    if (mascotRef.current) {
      ml.from(mascotRef.current, { y: 250, duration: 0.5, scale: 0.8, ease: "linear" })
        .to(mascotRef.current, { y: 0, duration: 0.5, scale: 1, ease: "linear" });
    }

    return () => {
      tl.kill();
      cl.kill();
      ml.kill();
    };
  }, []);

  //which page to which date here, connect with corresponding on top
  let pageComponent;
  if (selectedDate === 'Opening') {
    pageComponent = <Maret3 />;
  } else if (selectedDate === '4 Maret COC') {
    pageComponent = <Maret4CC />;
  } else if (selectedDate === '4 Maret Badminton') {
    pageComponent = <Maret4Badminton />;
  } else if (selectedDate === '5 Maret COC') {
    pageComponent = <Maret5CC />;
  } else if (selectedDate === '5 Maret Badminton') {
    pageComponent = <Maret5Badminton />;
  } else if (selectedDate === '6 Maret Catur') {
    pageComponent = <Maret6Catur />;
  } else if (selectedDate === '6 Maret Futsal') {
    pageComponent = <Maret6Futsal />;
  } else if (selectedDate === '7 Maret Catur') {
    pageComponent = <Maret7Catur />;
  } else if (selectedDate === '7 Maret Futsal') {
    pageComponent = <Maret7Futsal />;
  } else if (selectedDate === '10 Maret Basket') {
    pageComponent = <Maret10Basket />;
  } else if (selectedDate === '10 Maret Debat') {
    pageComponent = <Maret10Debate />;
  } else if (selectedDate === '11 Maret Basket') {
    pageComponent = <Maret11Basket />;
  } else if (selectedDate === '11 Maret Debat') {
    pageComponent = <Maret11Debate />;
  } else if (selectedDate === '12 Maret Basket') {
    pageComponent = <Maret12Basket />;
  } else if (selectedDate === '12 Maret Debat') {
    pageComponent = <Maret12Debate />;
  } else if (selectedDate === '13 Maret Basket') {
    pageComponent = <Maret13Basket />;
  } else if (selectedDate === '14 Maret Basket') {
    pageComponent = <Maret14Basket />;
  } else if (selectedDate === '14 Maret Dance') {
    pageComponent = <Maret14Dance />;
  } else if (selectedDate === '17 Maret PUBG') {
    pageComponent = <Maret17PUBG />;
  } else if (selectedDate === '18 Maret Billiard') {
    pageComponent = <Maret18Billiard />;
  } else if (selectedDate === '18 Maret PUBG') {
    pageComponent = <Maret18PUBG />;
  } else if (selectedDate === '19 Maret Billiard') {
    pageComponent = <Maret19Billiard />;
  } else if (selectedDate === '19 Maret Mobile Legends') {
    pageComponent = <Maret19ML />;
  } else if (selectedDate === '20 Maret Billiard') {
    pageComponent = <Maret20Billiard />;
  } else if (selectedDate === '20 Maret Mobile Legends') {
    pageComponent = <Maret20ML />;
  } else if (selectedDate === '21 Maret Art') {
    pageComponent = <Maret21Art />;
  } else if (selectedDate === 'Closing') {
    pageComponent = <Maret21Closing />;
  }


  return (
    <div className='relative'>
      <div className='h-[40vh] lg:h-screen w-screen relative bg-gradient-to-t justify-center items-center from-[#ED197E] from-0% via-[#3B1A55] via-50% to-[#132B44]'>
        <p className='batman text-4xl lg:text-8xl absolute top-20 text-white w-full'>Rundown</p>
        <div className='absolute bottom-0 z-20 flex flex-col'>
          <img src={train} ref={trainRef} alt="" className='w-[60%] move' draggable="false"/>
          <img src={track} alt="" className='w-screen' draggable="false"/>
        </div>
        <img src={mascot} ref={mascotRef} alt="" className='absolute z-[15] bottom-[-15%] px-[25%] w-[100%]' draggable="false"/>
        <img src={clouds} ref={cloudRef} className='absolute bottom-[-20%] z-10 w-screen' alt="" draggable="false"/>
        <img src={cityFront} alt="" className='absolute bottom-5 z-10 w-screen' draggable="false"/>
        <img src={cityBack} alt="" className='absolute bottom-5 z-0 w-screen' draggable="false"/>
      </div>
      <div className='h-full w-screen bg-[#000919] flex justify-center pb-10 z-[20] relative'>
        {/* Dropdown for date selection */}
        {/* Dropdown for date selection */}
        <div className="w-full lg:px-20 absolute justify-center flex top-[-25px] z-[60]">
          <div
            className="relative w-[80vw] lg:w-[60vw] border-4 border-gray-500 py-10 rounded-xl bg-[#11283D] tracking-wide focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="batman relative w-full justify-center items-center flex text-white text-base lg:text-3xl">
                {selectedDate}
                <p className="rotate-[180deg] absolute right-5">^</p>
              </button>
            </div>
            
            {isDropdownOpen && (
              <div 
                className="absolute top-[55%] lg:top-[110%] left-1/2 -translate-x-1/2 w-[90%] lg:w-[100%] xl:w-[60%] 2xl:w-[50%] mt-1 lg:mt-2 bg-[#000919] border border-white/20 rounded-lg shadow-xl z-[70] overflow-y-auto"
                style={{ maxHeight: '270px' }} // Limit dropdown height (5-6 items)
                onWheel={(e) => {
                  e.currentTarget.scrollBy({
                    top: e.deltaY * 0.5, // Smooth scrolling
                    behavior: 'smooth'
                  });
                }}
              >
                {dates.map((date) => (
                  <div
                    key={date}
                    className="p-3 lg:p-4 batman text-white text-lg lg:text-2xl hover:bg-white/10 cursor-pointer transition-colors text-center"
                    onClick={() => {
                      setSelectedDate(date);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {date}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-20 justify-center z-[50] relative items-center px-20 mt-48'>
          {pageComponent}
        </div>

        {/* Background decorations */}
        <div className='h-full w-full absolute'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1374" height="3085" viewBox="0 0 1374 3085" className='absolute left-0' fill="none">
            <g filter="url(#filter0_f_809_1669)">
              <path d="M374 1542.5C374 1842.11 126.413 2085 -179 2085C-484.413 2085 -732 1842.11 -732 1542.5C-732 1242.89 -484.413 1000 -179 1000C126.413 1000 374 1242.89 374 1542.5Z" fill="#07649D" />
            </g>
            <defs>
              <filter id="filter0_f_809_1669" x="-1732" y="0" width="3106" height="3085" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_809_1669" />
              </filter>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="5217" viewBox="0 0 1440 5217" className='absolute right-0 top-20' fill="none">
            <g filter="url(#filter0_f_809_149)">
              <path d="M2037 2608.5C2037 3496.85 1755.16 4217 1407.5 4217C1059.84 4217 778 3496.85 778 2608.5C778 1720.15 1059.84 1000 1407.5 1000C1755.16 1000 2037 1720.15 2037 2608.5Z" fill="#380855" />
            </g>
            <defs>
              <filter id="filter0_f_809_149" x="-222" y="0" width="3259" height="5217" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_809_149" />
              </filter>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="4817" viewBox="0 0 1440 4817" className='absolute left-0 top-[50%] w-screen' fill="none">
            <g filter="url(#filter0_f_809_684)">
              <path d="M1055 2519.5C1055 3358.7 741.375 4039 354.5 4039C-32.3755 4039 -346 3358.7 -346 2519.5C-346 1680.3 -32.3755 1000 354.5 1000C741.375 1000 1055 1680.3 1055 2519.5Z" fill="#07649D" fillOpacity="0.5" />
            </g>
            <defs>
              <filter id="filter0_f_809_684" x="-1346" y="0" width="3401" height="5039" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_809_684" />
              </filter>
            </defs>
          </svg>
          <img src={HologramSpin} className='absolute w-[20vw] h-[20vw] top-30 left-[5%] opacity-10' alt="" draggable="false"/>
          <img src={HologramSpin} className='absolute w-[40vw] h-[40vw] top-0 right-[-15%] opacity-10' alt="" draggable="false"/>
          <img src={BGFinal} alt="" className='absolute top-[54%] left-0 w-screen opacity-50 rotate-[-15deg]' draggable="false"/>
          <img src={TimelineBG} alt="" className='opacity-10 absolute left-0 w-screen h-auto' />
          <img src={TimelineBottomBG} alt="" className='absolute left-0 bottom-[-25%] opacity-30 w-full' draggable="false"/>
        </div>
      </div>
    </div>
  );
}

export default Rundown;