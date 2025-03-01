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
import Rundown5Mar from '../helper/rundown/5Mar';
import Rundown4Mar from '../helper/rundown/4Mar'
import Rundown3Mar from '../helper/rundown/3Mar';
import Closing from '../helper/rundown/Closing';
import Rundown21Mar from '../helper/rundown/21Mar';
import Rundown18Mar from '../helper/rundown/18Mar';
import Rundown17Mar from '../helper/rundown/17Mar';

function Rundown() {
  const trainRef = useRef<HTMLImageElement>(null);
  const cloudRef = useRef<HTMLImageElement>(null);
  const mascotRef = useRef<HTMLImageElement>(null);
  const [selectedDate, setSelectedDate] = useState('Opening'); //default
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dates = ['Opening', '4 Maret', '5 Maret', '17 Maret', '18 Maret', '21 Maret', 'Closing']; //change names here, either date/name of day

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
    pageComponent = <Rundown3Mar />;
  } else if (selectedDate === '5 Maret') {
    pageComponent = <Rundown5Mar />;
  } else if (selectedDate === '4 Maret') {
    pageComponent = <Rundown4Mar />;
  } else if (selectedDate === '17 Maret') {
    pageComponent = <Rundown17Mar />;
  } else if (selectedDate === '18 Maret') {
    pageComponent = <Rundown18Mar />;
  } else if (selectedDate === '21 Maret') {
    pageComponent = <Rundown21Mar />;
  } else if (selectedDate === 'Closing') {
    pageComponent = <Closing />;
  }

  return (
    <div className='relative'>
      <div className='h-[40vh] lg:h-screen w-screen relative bg-gradient-to-t justify-center items-center from-[#ED197E] from-0% via-[#3B1A55] via-50% to-[#132B44]'>
        <p className='batman text-4xl lg:text-8xl absolute top-20 text-white w-full'>Rundown</p>
        <div className='absolute bottom-0 z-20 flex flex-col'>
          <img src={train} ref={trainRef} alt="" className='w-[60%] move' />
          <img src={track} alt="" className='w-screen' />
        </div>
        <img src={mascot} ref={mascotRef} alt="" className='absolute z-[15] bottom-[-15%] px-[25%] w-[100%]' />
        <img src={clouds} ref={cloudRef} className='absolute bottom-[-20%] z-10 w-screen' alt="" />
        <img src={cityFront} alt="" className='absolute bottom-5 z-10 w-screen' />
        <img src={cityBack} alt="" className='absolute bottom-5 z-0 w-screen' />
      </div>
      <div className='h-full w-screen bg-[#000919] flex justify-center pb-10 z-[100] relative'>
        {/* Dropdown for date selection */}
        <div className="w-full px-20 absolute top-[-25px] z-[60]">
          <div
            className="relative w-80% h-[130px] tracking-wide focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="batman text-white text-xl lg:text-3xl">
                {selectedDate}
              </button>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-[75%] lg:top-[110%] left-1/2 -translate-x-1/2 w-[90%] lg:w-[100%] xl:w-[60%] 2xl:w-[50%] mt-1 lg:mt-2 bg-[#000919] border border-white/20 rounded-lg shadow-xl z-[70]">
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
          <img src={HologramSpin} className='absolute w-[20vw] h-[20vw] top-30 left-[5%] opacity-10' alt="" />
          <img src={HologramSpin} className='absolute w-[40vw] h-[40vw] top-0 right-[-15%] opacity-10' alt="" />
          <img src={BGFinal} alt="" className='absolute top-[54%] left-0 w-screen opacity-50 rotate-[-15deg]'/>
          <img src={TimelineBG} alt="" className='opacity-10 absolute left-0 w-screen h-auto' />
          <img src={TimelineBottomBG} alt="" className='absolute left-0 bottom-[-25%] opacity-30 w-full' />
        </div>
      </div>
    </div>
  );
}

export default Rundown;