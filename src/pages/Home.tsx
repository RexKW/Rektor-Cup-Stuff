import  { LegacyRef } from 'react';
import '../styles/Home.css';
import HomeParallax from "../components/HomeParallax";
import HomeTitle from "../components/HomeTitle";
import mainBuildings1 from '../assets/mainbuildings1.svg';
import mainBuildings2 from '../assets/mainbuildings2.svg';
import mainPartRektor from '../assets/rektorPortal.webp';
import clouds1 from '../assets/clouds1.svg';
import hologramImage from '../assets/Hologram spin full.svg';

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
import EsportsCategory from '../assets/EsportsCategory.png';
import SportsCategory from '../assets/SportsCategory.png';
import ArtCategory from '../assets/ArtCategory.png';
import LearningCategory from '../assets/LearningCategory.png';
import GGroup from '../assets/GGroup.svg';

import { useParallax } from 'react-scroll-parallax';

import CompetitionPanel from '../components/CompetitionPanel'; 

import basketball from '../assets/rektor-img/basketball.svg';
import futsal from '../assets/rektor-img/futsal.svg';
import billiard3 from '../assets/rektor-img/billiard3.svg';
import badminton from '../assets/rektor-img/badminton.svg';
import ml from '../assets/rektor-img/ml.svg';
import pubg from '../assets/rektor-img/pubg.svg';
import dance from '../assets/rektor-img/dance.svg';
import band from '../assets/rektor-img/band.svg';
import coc from '../assets/rektor-img/coc.svg';
import debat from '../assets/rektor-img/debat.svg';
import catur from '../assets/rektor-img/catur.svg';


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

// const {ref: bottomWave} = useParallax<HTMLImageElement>({
//   translateY: [0, -20],
//   easing:'easeOut'
// })

// const {ref: leftBottom} = useParallax<HTMLImageElement>({
//   translateX: [50, 0],
//   easing:'easeOut'
// })

// const {ref: rightBottom} = useParallax<HTMLImageElement>({
//   translateX: [-50, 0],
//   easing:'easeOut'
// })



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

      
      
      <div className='bottomDesc'>
      
        <div className='about-section' ref={aboutText as LegacyRef<HTMLDivElement>}>
          <h2>About</h2>
          <p id='contentAbout'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        

        <img src={hologramImage} alt="Hologram" className="left-spinny" />
        <div className='trailer-section' ref={trailer as LegacyRef<HTMLDivElement>}>
          <div className="holographic-effect">

        <div className="competition-category-container">
          <h2>Competition Categories</h2>
          <div className="competition-images1">
            <div className="competition-item">
              <img src={SportsCategory} alt="Cat 1" className="category-image1" />
              <img src={GGroup} alt="Hologram Sports" className="g-group" />
            </div>
            <div className="competition-item">
              <img src={EsportsCategory} alt="Cat 2" className="category-image1" />
              <img src={GGroup} alt="Hologram Esports" className="g-group" />
            </div>
            <div className="competition-item">
              <img src={ArtCategory} alt="Cat 3" className="category-image1" />
              <img src={GGroup} alt="Hologram Art" className="g-group" />
            </div>
            <div className="competition-item">
              <img src={LearningCategory} alt="Cat 4" className="category-image1" />
              <img src={GGroup} alt="Hologram Learning" className="g-group" />
            </div>
          </div>
        </div>
          
          <div className="Panel-Container">
            <CompetitionPanel />
          </div>

          <img src={BlueSphere} alt="blue sphere" className="bsphere-bg1" />
          <img src={BlueWave} alt="blue wave" ref={waveHolo as LegacyRef<HTMLImageElement>} className="bwave-bg" />
        </div>

          
        </div>

        <br></br>


        <div className='bottom-background'>
          <img src={Intersection2} alt="Shadow Intersection" className="shadow-intersection" />
          <div className='citySection'>
          <img src={bottomCity} alt="Bottom City" ref={bottomBuilding as LegacyRef<HTMLImageElement>} className="bottom-city1" />
              <img src={Train} alt="Train" ref={train as LegacyRef<HTMLImageElement>} className="train1" />
              <img src={Rail} alt="Rail" ref={railWay as LegacyRef<HTMLImageElement>} className="rail" />
            <img src={RailShadow} alt="Rail Shadow Intersection" className="rail-shadow-intersection" />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;






