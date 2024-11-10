import React from 'react';
import '../styles/Home.css';
import HomeParallax from "../components/HomeParallax";
import HomeTitle from "../components/HomeTitle";
import mainBuildings1 from '../assets/mainbuildings1.svg';
import mainBuildings2 from '../assets/mainbuildings2.svg';
import mainPartRektor from '../assets/mainpartrektor.svg';
import clouds1 from '../assets/clouds1.svg';
import intersection from '../assets/LP-BG-Intersection.svg';
import hologramImage from '../assets/Hologram spin full.svg';

import TrailerBorder from '../assets/LP-BG-Trailer.svg';
import BlueSphere from '../assets/LP-BG-Bottom-BlueSphere.svg';
import BlueWave from '../assets/LP-BG-Bottom-BlueWave.svg';
import Hologram from '../assets/LP-BG-Bottom-Hologram.svg';

import InfoText from '../assets/LP-BG-InfoText.svg';
import Poster from '../assets/Escape-Room-Poster.jpg';

import bottomBG from '../assets/LP-BG-Bottom.svg';

import Intersection2 from '../assets/LP-BG-Bottom-ShadowIntersection.svg';
import Train from '../assets/LP-BG-Bottom-Train.svg';

import bottomCity from '../assets/LP-BG-Bottom-City.webp';
import Rail from '../assets/LP-BG-Bottom-Rail.svg';
import RailShadow from '../assets/LP-BG-Bottom-RailShadowIntersection.svg';

import RightParticle from '../assets/LP-BG-Bottom-RightParticle.svg';
import LeftParticle from '../assets/LP-BG-Bottom-LeftParticle.svg';
import JoinUsBG from '../assets/LP-BG-Bottom-JoinUS.svg';

import Wave from '../assets/LP-BG-Bottom-Wave.svg';





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
      <HomeTitle className='home-title' />
      {/* Spinny Thingy */}
      <HomeParallax className='H_Parallax' />
      <div className="main-buildings-container relative">
        <img src={mainBuildings1} alt="Main Buildings 1" className="main-buildings1" />
        <img src={mainBuildings2} alt="Main Buildings 2" className="main-buildings2" />
        <img src={mainPartRektor} alt="Main Part Rektor" className="main-part-rektor" />
        <img src={clouds1} alt="Clouds 1" className="clouds1" />
        <div className='floor'></div>
        <HomeTitle className='home-title' />
      </div>

      <div className='abtbackground'>
      <HomeTitle className='home-title' />
      <p>test</p>
    </div>

   <div className='bottomDesc'>

    <div className='about-section'>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
    </div>

    <br></br>

    <div className='trailer-section'>
      <h2>Trailer</h2>

      <img src={hologramImage} alt="Hologram" className="left-spinny" />

      <div className="holographic-effect">
          <img src={BlueSphere} alt="blue sphere" className="bsphere-bg" />
          <img src={BlueWave} alt="blue wave" className="bwave-bg" />
          <img src={Hologram} alt="hologram" className="hologram-bg" />
        </div>

      <div className='trailer-container'>
        <img src={TrailerBorder} alt="Trailer Background" className="trailer-bg" />
        <iframe className = "trailer-video"
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=-4tc3CZPE-g"
          title="Trailer Escape Room"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <br></br>


    <div className='png-outlines'>
      <h2>Info</h2>
      <div className="side-by-side">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
        <img src={InfoText} alt="Info Text" className="info-bg" />
        <img src={Poster} alt="Poster" className="poster-bg" />
      </div>
    </div>

   </div>

  <div className='bottom-backgrounds'>
    <img src={intersection} alt="Intersection Background" className="inter-bg" />
    <img src={bottomBG} alt="Bottom Background" className="bottom-bg" />
    <img src={Intersection2} alt="Shadow Intersection" className="shadow-intersection" />
    <img src={bottomCity} alt="Bottom City" className="bottom-city" />

    <img src={Train} alt="Train" className="train" />
    <img src={Rail} alt="Rail" className="rail" />
    <img src={RailShadow} alt="Rail Shadow Intersection" className="rail-shadow-intersection" />

    <div className="particle-container"> 
      <img src={RightParticle} alt="Left Particle" className="left-particle" />
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd8JsrvdZAiCeZDJqkCX-2xialyxwIlDHJbsEgJy0JGscBHug/viewform">
        <p>Join Now</p>
      </a>
      <img src={JoinUsBG} alt="Join Us Background" className="join-us-bg" />
      <img src={LeftParticle} alt="Right Particle" className="right-particle" />
      <img src={Wave} alt="Wave" className="wave" />
    </div>
  </div>

  </div>
  );
};

export default Home;






