import  { LegacyRef } from 'react';
import '../styles/Home.css';
import HomeParallax from "../components/HomeParallax";

import mainBuildings1 from '../assets/mainbuildings1.svg';
import mainBuildings2 from '../assets/mainbuildings2.svg';
import mainPartRektor from '../assets/rektorPortal.webp';
import clouds1 from '../assets/clouds1.svg';
import hologramImage from '../assets/Hologram spin full.svg';
import dots from '../assets/dots.svg'
import props from '../assets/Props_1.svg'

import BlueSphere from '../assets/bgBlueBlur.svg';
import BlueWave from '../assets/LP-BG-Bottom-BlueWave.svg';

import Train from '../assets/LP-BG-Bottom-Train.svg';

import bottomCity from '../assets/LP-BG-Bottom-City.webp';
import Rail from '../assets/LP-BG-Bottom-Rail.svg';
import RailShadow from '../assets/LP-BG-Bottom-RailShadowIntersection.svg';
// import EsportsCategory from '../assets/EsportsCategory.png';
// import SportsCategory from '../assets/SportsCategory.png';
// import ArtCategory from '../assets/ArtCategory.png';
// import LearningCategory from '../assets/LearningCategory.png';

import { useParallax } from 'react-scroll-parallax';

import CompetitionPanel from '../components/CompetitionPanel'; 



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

const {ref: techno} = useParallax<HTMLImageElement>({
  translateX:[20,0],
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
      <HomeParallax className='H_Parallax bg-gradient-to-tr  from-[#7D626C] from-10% via-[#02485A] to-[#5C3A67] to-90%' />
      <div className="main-buildings-containerH relative ">
        <img src={mainBuildings1} alt="Main Buildings 1"  ref={backBuilding as LegacyRef<HTMLImageElement>}   className="main-buildings1H absolute" />
        <img src={mainBuildings2} alt="Main Buildings 2" ref={middleBuilding as LegacyRef<HTMLImageElement>}  className="main-buildings2H absolute" />
        <div className='central relative' ref={mainRektor as LegacyRef<HTMLImageElement>}>
          <img src={mainPartRektor} alt="Main Part Rektor" className="main-part-rektorH absolute" />
          <img src={clouds1} alt="Clouds 1" className="clouds1" />
          <div className='floor absolute'></div>
        </div>
      </div>

      <img src={BlueSphere} alt="blue sphere" className="bsphere-bgH" />
      
      <div className='bottomSection'>
    
        <div className='about-sectionH' ref={aboutText as LegacyRef<HTMLDivElement>}>
          <h2>About</h2>
          <p id='contentAboutH'>RektorCup is Competition held by Ciputra University every year to show the talents and potential of students from all majors in various activities like sports, art, learning and E-Sports. The Competition gives participants the opportunity to grow and show their skills.</p>
        </div>
        

        <img src={hologramImage} alt="Hologram" className="left-spinny" />
        <img src={dots} className='absolute dots'/>


          

          <div className="competition-category-container" ref={trailer as LegacyRef<HTMLDivElement>}>
            <h2 className=''>Competition <br className='lg:hidden'/>Re-registration</h2>
              <div className="Panel-Container">
                <CompetitionPanel />
              </div>

          </div>
          
          
          {/* <img src={BlueSphere} alt="blue sphere" className="bsphere-bg" /> */}
          <img src={BlueWave} alt="blue wave" ref={waveHolo as LegacyRef<HTMLImageElement>} className="bwave-bgH" />
          <img src={props} alt="blue wave" ref={techno as LegacyRef<HTMLImageElement>}  className="bwave-bgH2" />

        <br></br>


        <div className='bottom-backgrounds '>
          <div className='citySection'>
              <img src={bottomCity} alt="Bottom City" ref={bottomBuilding as LegacyRef<HTMLImageElement>} className="bottom-cityH" />
              <img src={Train} alt="Train" ref={train as LegacyRef<HTMLImageElement>} className="trainH" />
              <img src={Rail} alt="Rail" ref={railWay as LegacyRef<HTMLImageElement>} className="railH" />
              <img src={RailShadow} alt="Rail Shadow Intersection" className="rail-shadow-intersectionH" />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;






