import React from 'react';
import '../styles/Home.css';
import { useParallax } from 'react-scroll-parallax';
import RektorLogo from '../assets/RektorLogo.png';
import leftC from '../assets/leftCurtainwLight.svg';
import leftCM from '../assets/leftCurtainsM.svg';
import rightC from '../assets/rightCurtainwLight.svg';
import rightCM from '../assets/rightCurtainsM.svg';
import topC from '../assets/topCurtain_3.png';
import topCM from '../assets/topCurtainMCut.png';
import acqLogo from '../assets/acqLogo.svg';
import BEEGTENT from '../assets/BEEGTENT.svg';
import smolTent from '../assets/carnivalPhoneLong.png';
import BANNER from '../assets/tent banner-01.svg';
import ACQUIREWITHBG from '../assets/homeSign.png';
import ticket from '../assets/tickets dekstop 4.png';
import ticketM from '../assets/tickets with mascot phone.png';
import cannonL from '../assets/cannonL.svg';
import cannonR from '../assets/cannonR.svg';
import lights from '../assets/lights.svg';

const Home: React.FC = () => {
  // const { ref: parallaxRef1 } = useParallax<HTMLImageElement>({
  //   translateX: [35, -50],
  //   speed: 5,
  //   easing: 'easeOut', // Replace "linear" with "easeOut"
  // });

  // const { ref: parallaxRef2 } = useParallax<HTMLImageElement>({
  //   translateX: [-25, 35],
  //   speed: 5,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef5 } = useParallax<HTMLImageElement>({
  //   speed: 20,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef8 } = useParallax<HTMLImageElement>({
  //   speed: 15,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef9 } = useParallax<HTMLImageElement>({
  //   speed: 20,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef10 } = useParallax<HTMLImageElement>({
  //   translateX: [50, -25],
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef11 } = useParallax<HTMLImageElement>({
  //   translateX: [-30, 10],
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef12 } = useParallax<HTMLImageElement>({
  //   speed: 10,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef13 } = useParallax<HTMLImageElement>({
  //   translateX: [45, -50],
  //   speed: 5,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef14 } = useParallax<HTMLImageElement>({
  //   translateX: [-25, 25],
  //   speed: 5,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef15 } = useParallax<HTMLImageElement>({
  //   speed: 2,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef16 } = useParallax<HTMLImageElement>({
  //   speed: 20,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef17 } = useParallax<HTMLImageElement>({
  //   speed: 15,
  //   easing: 'easeOut',
  // });

  // const { ref: parallaxRef18 } = useParallax<HTMLImageElement>({
  //   speed: 20,
  //   easing: 'easeOut',
  // });

  return (
    <div className='home'>
      {/* <img src={topC} className='topCurtain' ref={parallaxRef12} loading="lazy" alt="Top Curtain" />
      <img src={leftC} className='leftCurtain' ref={parallaxRef1} loading="lazy" alt="Left Curtain" />
      <img src={leftCM} className='leftCurtainM' ref={parallaxRef13} loading="lazy" alt="Left Curtain Mobile" />
      <img src={rightC} className='rightCurtain' ref={parallaxRef2} loading="lazy" alt="Right Curtain" />
      <img src={rightCM} className='rightCurtainM' ref={parallaxRef14} loading="lazy" alt="Right Curtain Mobile" />
      <img src={topCM} className='topCurtainM' ref={parallaxRef15} loading="lazy" alt="Top Curtain Mobile" />
      <img src={acqLogo} className='acqLogo' loading="lazy" alt="Acquisition Logo" />
      <div className='acqGlow'></div>
      <div id='container' className='flex relative m-[8%]'>
        <div className='contentLeft z-0 mt-[-50%] mx-auto'>
          <div className='boxContent mt-5'>
            <img src={ACQUIREWITHBG} className='SIGN' loading="lazy" alt="Acquire with Background" />
          </div>
        </div>
      </div>
      <img src={BEEGTENT} className='tent' ref={parallaxRef5} loading="lazy" alt="Big Tent" />
      <img src={smolTent} className='tentM' ref={parallaxRef16} loading="lazy" alt="Small Tent" />
      <img src={lights} className='spotLight' loading="lazy" ref={parallaxRef18} alt="Spotlight" />
      <img src={cannonL} className='leftCannon' ref={parallaxRef11} loading="lazy" alt="Left Cannon" />
      <img src={cannonR} className='rightCannons' ref={parallaxRef10} loading="lazy" alt="Right Cannon" />
      <img src={BANNER} className='BANNER' ref={parallaxRef8} loading="lazy" alt="Banner" />
      <img src={ticket} className='tickets' ref={parallaxRef9} loading="lazy" alt="Tickets" />
      <img src={ticketM} className='ticketsM' ref={parallaxRef17} loading="lazy" alt="Tickets Mobile" /> */}

      <img src={RektorLogo} className="rektorLogo anim" alt="Rektor Logo" loading="lazy" />
    </div>
  );
};

export default Home;
