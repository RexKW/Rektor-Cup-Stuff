import  {  useRef } from 'react';
import bg from '../assets/BGSponsor.svg';
import techno from '../assets/BG-Techno.png';
import wave from '../assets/WaveBG.png';
import hologram from '../assets/Hologram_spin_full.png.png';
import floor from '../assets/FloorTechno.png';
import '../styles/Sponsor.css';
import leftBars from '../assets/LeftBars.png';
import rightBars from '../assets/RightBars.png';
import mascotD from '../assets/MascotD.png';
import mascotW from '../assets/MascotWing.png'
import shapes from '../assets/shapes.png';
import dots from '../assets/dots.png';
import rektorCup from '../assets/LOGOREKTOR25.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useIntersection } from 'react-use';
import gsap from "gsap"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultipleItems from '../components/Carousel';


function Sponsor() {
  const sectionRef = useRef(null);

  const intersection= useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  });

  const fadeIn = (selector: string | HTMLElement) =>{
    gsap.to(selector,1,{
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    })
  }

  const fadeOut = (selector: string | HTMLElement) =>{
    gsap.to(selector,1,{
      opacity: 0,
      y: -20,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    })
  }

  const slideIn = (selector: string | HTMLElement) =>{
    gsap.to(selector,1,{
      opacity: 1,
      x: 0 ,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    })
  }

  const slideOut = (selector: string | HTMLElement) =>{
    gsap.to(selector,1,{
      opacity: 0,
      x: -10 ,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    })
  }


  intersection && intersection.intersectionRatio < 0.25 ? fadeOut('.fadeInG'):fadeIn('.fadeInG');

  const sectionRef2 = useRef(null);

  const intersection2= useIntersection(sectionRef2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.01
  });


  const flyIn = (selector: string | HTMLElement) =>{
    gsap.to(selector,1,{
      opacity: 1,
      y: -10,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    })
  }

  const flyOut = (selector: string | HTMLElement) =>{
    gsap.to(selector,1,{
      opacity: 0,
      y: 50,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    })
  }
  
  const sectionRef4 = useRef(null);
  const intersection4= useIntersection(sectionRef4, {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  });

  intersection4 && intersection4.intersectionRatio < 0.25 ? flyOut('.flyIn'):flyIn('.flyIn');
  



  intersection2 && intersection2.intersectionRatio < 0.01 ? fadeOut('.fadeInG2'):fadeIn('.fadeInG2');

  const sectionRef3 = useRef(null);

  const intersection3= useIntersection(sectionRef3, {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  });

  
  intersection3 && intersection3.intersectionRatio < 0.25 ? slideOut('.slideInG3'):slideIn('.slideInG3');

  
  return (
    <div className="sponsor relative flex flex-col bg-[#000919] pb-20">
      <div
        className="sponsorHeader relative z-1 h-[90vh] w-full flex"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPositionY: '70%',
        }}
      >
        <div className="rotated bg-[#000919]/60 lg:rotate-[-22.23deg] absolute lg:left-[-10vw] top-[-30vh] h-[150vh] w-screen lg:w-[50vw] z-1 backdrop-blur-sm">
          <img src={techno} className="opacity-20" alt=""  draggable="false"/>
          
        </div>
        <div className="w-full items-center justify-center lg:w-0">
          <div className="flex flex-col relative z-2 p-5 w-full justify-center items-center lg:left-[16vw] top-[20%] lg:top-[22vh]">
            <p className="text-[#26E5D3] text-5xl text-center batman">
              Welcome
              <br />
              to
              <img src={rektorCup} className='mt-5 lg:min-w-[30vw] h-auto' alt="RektorCup" />
            </p>
            
          </div>
        </div>
        <div className="gradientTransition"></div>
      </div>
      <div className="aboutSponsor pt-20 relative justify-center mt-32">
        <div className="hider absolute top-[-40%] z-2 bg-[#000919] h-[30vh] w-screen"></div>
        <img
          src={hologram}
          className="absolute opacity-30 w-[30%] left-[-10%] top-[-20%] z-3"
          alt=""  draggable="false"
        />
        <img
          src={wave}
          className="absolute bottom-[-100%] md:bottom-[-50%] min-w-[200vw] md:min-w-0 md:w-screen opacity-30 z-3"
          alt=""  draggable="false"
        />
        <div ref={sectionRef4} className="absolute flyIn top-[-30%] md:hidden z-2  md:contents flex justify-center">
            <img src={mascotW} className='' alt="" />
          </div>
        <div  className="z-2 relative  flex-col md:flex-row flex w-full justify-center">
          <div className="basis-[70%]  left-[55%] relative z-3 hidden md:contents flex justify-center">
            <img src={mascotD} className='w-[500px]' alt="" />
          </div>
          
          <div ref={sectionRef} className="flex flex-col justify-center w-full relative z-3 basis-[50%]">
            <p className="text-white text-5xl fadeInG batman lg:text-end">About</p>
            <p className="text-white mt-5 md:mt-10 fadeInG lg:pl-[35%] text-sm mx-10 lg:mx-0 lg:text-xl bodyText lg:text-end">
            RektorCup adalah sebuah kompetisi UC yang diadakan tiap tahun untuk menunjukkan bakat dan potensi mahasiswa di berbagai bidang, seperti olahraga, seni, pembelajaran, dan esports. Kompetisi ini memberi kesempatan bagi peserta untuk berkembang dan menunjukkan kemampuan terbaik mereka.
            </p>
          </div>
        </div>
      </div>
      <div  className="album  relative flex flex-col relative z-3 mt-20">
        <img src={leftBars} className='absolute invisible md:visible flex left-0  bottom-[0%]  z-10 h-[70%] lg:h-[100%]' alt=""  draggable="false"/>
        <img src={rightBars} className='absolute invisible md:visible flex right-[-1%] bottom-[-5%] lg:bottom-[-10%] z-10 h-[70%] lg:h-[100%]' alt=""  draggable="false"/>
    
        <p className="text-white text-5xl mb-5 batman">What We Do</p>
        <div
          className="w-full relative h-full flex py-5 px-2 "
        > 
          <MultipleItems/>
        </div> 
      </div>

      <div className="proposal relative flex flex-col lg:flex-row mt-32">
        <img src={shapes} className='absolute right-0 top-0 w-[30%] md:w-[15%]' alt="" />
        <img src="{}" className='absolute left-0' alt="" />
        <img src={floor} className="absolute bottom-[-520%] md:bottom-[-400%] z-0 w-screen" alt="" />
        <div ref={sectionRef3} className="basis-[40%] relative z-2 justify-center items-center flex flex-col lg:ml-32">
          <p className="text-white w-full slideInG3 lg:text-start text-3xl lg:text-5xl mb-5 batman">
            Interested?
          </p>
          <p className="text-white slideInG3 lg:text-start text-xl lg:text-3xl bodyText">
            Download proposal kami and kerja sama dengan kita
          </p>
        </div>
        <div className="basis-[60%] relative z-2">
          <button
            className="batman border-4 border-[#96D8E4] text-white text-xl mt-5 lg:text-3xl px-20 py-5 buttonColor"
            onClick={() => {
              const fileUrl =
                '/uploads/PROPOSAL Sponsorship Rektor Cup 2025 Universitas Ciputra.pdf'; // Replace with your actual file path
              const link = document.createElement('a');
              link.href = fileUrl;
              link.download =
                'PROPOSAL Sponsorship Rektor Cup 2025 Universitas Ciputra.pdf'; // Name the file as it will appear after download
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download
            <br />
            Proposal
          </button>
        </div>
        
      </div>
      
      <div className="contactSponsor relative z-2 flex w-full justify-center items-center lg:mx-0 mt-32  flex-col">
      <img src={dots} className='absolute right-0 top-0 w-[35%]' alt="" />
        <p className="mb-20 text-5xl text-white batman">Contact</p>
        <div ref={sectionRef2} className="flex flex-col w-[90%] justify-center  lg:flex-row gap-5">
          <div  className='flex justify-center items-center rounded-xl fadeInG2 flex-col bg-[#001B5A] p-5'>
          <svg fill="#ffffff" className="w-[50%] h-[50%]" version="1.1" id="Capa_1"  viewBox="0 0 45.532 45.532" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"></path> </g> </g></svg>
            <p  className='batman text-white mt-5'>Sebastyan Kurniawan</p>
            <div className='flex items-center'>
              <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 308 308" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
              <p className='bodyText text-white ml-2 text-sm lg:text-base'>085880075515</p>
            </div>
            <div className="flex items-center">
            <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
              <p className='bodyText text-white ml-2 text-xs lg:text-base'>skurniawan07@student.ciputra.ac.id</p>
            </div>
            
          </div>
          <div className='flex justify-center items-center rounded-xl fadeInG2 flex-col bg-[#001B5A] p-5'>
          <svg fill="#ffffff" className="w-[50%] h-[50%]" version="1.1" id="Capa_1"  viewBox="0 0 45.532 45.532" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"></path> </g> </g></svg>
            
            <p className='batman text-white mt-5'>Meishy Yosephani Elga Putri</p>
            <div className='flex items-center'>
              <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 308 308" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
              
              <p className='bodyText text-white ml-2 text-sm lg:text-base'>0822524771198</p>
            </div>
            <div className="flex items-center">
            <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></rect> </g></svg>

              <p className='bodyText text-white ml-2  text-xs lg:text-base'>myosephani@student.ciputra.ac.id</p>
            </div>
          </div>
          <div className='flex justify-center items-center rounded-xl fadeInG2 flex-col bg-[#001B5A] p-5'>
          <svg fill="#ffffff" className="w-[50%] h-[50%]" version="1.1" id="Capa_1"  viewBox="0 0 45.532 45.532" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"></path> </g> </g></svg>
            <p className='batman text-white mt-5'>Eugenia Shannon</p>
            <div className='flex items-center'>
               <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 308 308" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
              
              <p className='bodyText text-white ml-2 text-sm lg:text-base'>081294064383</p>
            </div>
            <div className="flex items-center">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></rect> </g></svg>

              <p className='bodyText text-white ml-2 text-xs lg:text-base'>eshannon@student.ciputra.ac.id</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
