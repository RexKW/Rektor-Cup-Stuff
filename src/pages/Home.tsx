import  { LegacyRef } from 'react';
import '../styles/Home.css';
import HomeParallax from "../components/HomeParallax";
import HomeTitle from "../components/HomeTitle";
import mainBuildings1 from '../assets/mainbuildings1.svg';
import mainBuildings2 from '../assets/mainbuildings2.svg';
import mainPartRektor from '../assets/rektorPortal.webp';
import clouds1 from '../assets/clouds1.svg';
import hologramImage from '../assets/Hologram spin full.svg';

import TrailerBorder from '../assets/LP-BG-Trailer.svg';
import BlueSphere from '../assets/bgBlueBlur.svg';
import BlueWave from '../assets/LP-BG-Bottom-BlueWave.svg';
import Hologram from '../assets/LP-BG-Bottom-Hologram.svg';

import InfoText from '../assets/LP-BG-InfoText.svg';
import Poster from '../assets/Escape-Room-Poster.jpg';


import Intersection2 from '../assets/LP-BG-Bottom-ShadowIntersection.svg';
import Train from '../assets/LP-BG-Bottom-Train.svg';

import bottomCity from '../assets/LP-BG-Bottom-City.webp';
import Rail from '../assets/LP-BG-Bottom-Rail.svg';
import RailShadow from '../assets/LP-BG-Bottom-RailShadowIntersection.svg';

import RightParticle from '../assets/LP-BG-Bottom-RightParticle.svg';
import LeftParticle from '../assets/LP-BG-Bottom-LeftParticle.svg';

import Wave from '../assets/LP-BG-Bottom-Wave.svg';
import { useParallax } from 'react-scroll-parallax';


const Home = () => {

  const {ref: backBuilding} = useParallax<HTMLImageElement>({
      speed: 10,
      easing: 'easeOut'

  });

  const {ref: middleBuilding} = useParallax<HTMLImageElement>({
    speed: 4,
    easing: 'easeOut'

});

const {ref: mainRektor} = useParallax<HTMLImageElement>({
  speed: -3,
  easing: 'easeOut'

});


const {ref: aboutText} = useParallax<HTMLImageElement>({
  speed: -1,
  easing: 'easeOut'

});

const{ref: trailer} = useParallax<HTMLDivElement>({
  speed:2,
  easing:'easeOut'
})

const {ref: train} = useParallax<HTMLImageElement>({
  translateY:[-15,0],
  translateX:[15,-15],
  easing: 'easeOut'
})

const{ref: railWay} =useParallax<HTMLImageElement>({
  translateY:[-15,0]
})

const {ref: waveHolo} = useParallax<HTMLImageElement>({
  translateX:[-50,0],
  easing: 'easeOut'
})

const {ref: bottomBuilding} = useParallax<HTMLImageElement>({
  speed: 20,
  easing: 'easeOut'

});

const {ref: bottomWave} = useParallax<HTMLImageElement>({
  translateY: [0, -20],
  easing:'easeOut'
})

const {ref: leftBottom} = useParallax<HTMLImageElement>({
  translateX: [50, 0],
  easing:'easeOut'
})

const {ref: rightBottom} = useParallax<HTMLImageElement>({
  translateX: [-50, 0],
  easing:'easeOut'
})



  return (
    <div className='home relative'>
      {/* Spinny Thingy */}
      <HomeParallax className='H_Parallax' />
      <div className="main-buildings-container relative">
        <img src={mainBuildings1} alt="Main Buildings 1"  ref={backBuilding as LegacyRef<HTMLImageElement>}   className="main-buildings1 absolute" />
        <img src={mainBuildings2} alt="Main Buildings 2" ref={middleBuilding as LegacyRef<HTMLImageElement>}  className="main-buildings2 absolute" />
        <div className='central relative' ref={mainRektor as LegacyRef<HTMLImageElement>}>
          <HomeTitle className='home-title' />
          <img src={mainPartRektor} alt="Main Part Rektor" className="main-part-rektor absolute" />
          <img src={clouds1} alt="Clouds 1" className="clouds1" />
          <div className='floor absolute'></div>
        </div>
      </div>


      <img src={BlueSphere} alt="blue sphere" className="bsphere-bg" />
      <div className='bottomDesc'>
      
        <div className='about-section' ref={aboutText as LegacyRef<HTMLDivElement>}>
          <h2>About</h2>
          <p id='contentAbout'>Step into the darkness at Entation, a horror-themed escape room where fear and suspense await at every turn. As you and your team navigate through chilling settings, solve eerie puzzles, and uncover terrifying secrets, the clock is your only ally. Can you escape before the horrors close in? Only the bravest will make it out alive. Are you ready to face your fears?</p>
        </div>

        <img src={hologramImage} alt="Hologram" className="left-spinny" />
        <div className='trailer-section' ref={trailer as LegacyRef<HTMLDivElement>}>
          <h2>Trailer</h2>

          

          <div className="holographic-effect">
              
              <img src={BlueWave} alt="blue wave" ref={waveHolo as LegacyRef<HTMLImageElement>} className="bwave-bg" />
              <img src={Hologram} alt="hologram" className="hologram-bg" />
            </div>

          <div className='trailer-container' >
            <img src={TrailerBorder} alt="Trailer Background" className="trailer-bg" />
            <iframe className = "trailer-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pZDMzIh3gyQ"
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
            <p className="hideText"><span className='text-xl lg:text-5xl entation text-red-800'>Entation</span><br className='py-5'/><br/>Special Price<br/> (11 Nov - 13 Nov 2024)💸💰<br/>
            Early Bird Price :<br/> Rp 40.000/orang,<br/> Rp 200.000/team<br/><br/>

            Normal Price <br/>(14 Nov - 23 Nov 2024)💸💰<br/>
            Normal Price :<br/> Rp 45.000/orang,<br/> Rp 225.000/team<br/><br/>

            CP Registrasi <br/>Escape Room :<br/> 
            082252477198 / Meishy<br/> 
            081294064383 / Eugene</p>
            <img src={InfoText} alt="Info Text" className="info-bg" />
            <img src={Poster} alt="Poster" className="poster-bg" />
          </div>
        </div>
        <div className='bottom-backgrounds'>
          <img src={Intersection2} alt="Shadow Intersection" className="shadow-intersection" />
          <div className='citySection'>
          <img src={bottomCity} alt="Bottom City" ref={bottomBuilding as LegacyRef<HTMLImageElement>} className="bottom-city" />
              <img src={Train} alt="Train" ref={train as LegacyRef<HTMLImageElement>} className="train" />
              <img src={Rail} alt="Rail" ref={railWay as LegacyRef<HTMLImageElement>} className="rail" />
            <img src={RailShadow} alt="Rail Shadow Intersection" className="rail-shadow-intersection" />
          </div>
        </div>
      </div>
      <div className="particle-container relative z-1"> 
          <img src={RightParticle} alt="Left Particle" ref={rightBottom as LegacyRef<HTMLImageElement>} className="left-particle" />
            <p className='what absolute z-7 text-xl md:text-6xl text-white top-[10%] text-center w-screen'>What are you<br/>waiting for?</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd8JsrvdZAiCeZDJqkCX-2xialyxwIlDHJbsEgJy0JGscBHug/viewform">
            <button className='buttonJoin'>
            <p>Join Now</p>
            </button>
          </a>

          <img src={LeftParticle} alt="Right Particle" ref={leftBottom as LegacyRef<HTMLImageElement>} className="right-particle" />
          <img src={Wave} alt="Wave" className="wave" ref={bottomWave as LegacyRef<HTMLImageElement>} />
        </div>
      </div>
  );
};

export default Home;






