// import clouds from '../assets/Clouds.png'
// import track from '../assets/TrainTrack.svg'
import cityFront from '../assets/BGFrontCityRules.svg'
import cityBack from '../assets/BGBackCityRules.svg'
import floor from '../assets/RulesFloor.png'
import Page1 from '../helper/rules/Rektorcup2025/Page1';
import Page2 from '../helper/rules/Rektorcup2025/Page2';
import Page3 from '../helper/rules/Rektorcup2025/Page3';
import Page4 from '../helper/rules/Rektorcup2025/Page4';
import Page5 from '../helper/rules/Rektorcup2025/Page5';
import Page6 from '../helper/rules/Rektorcup2025/Page6';
import Page7 from '../helper/rules/Rektorcup2025/Page7';
import Page8 from '../helper/rules/Rektorcup2025/Page8';
import Page9 from '../helper/rules/Rektorcup2025/Page9';

import Page1UC from '../helper/rules/UCChampion/Page1';
import Page2UC from '../helper/rules/UCChampion/Page2';
import Page3UC from '../helper/rules/UCChampion/Page3';
import Page4UC from '../helper/rules/UCChampion/Page4';
import Page5UC from '../helper/rules/UCChampion/Page5';
import Page6UC from '../helper/rules/UCChampion/Page6';
import Page7UC from '../helper/rules/UCChampion/Page7';
import Page8UC from '../helper/rules/UCChampion/Page8';
import Page9UC from '../helper/rules/UCChampion/Page9';
// import mascot from '../assets/MascotWing.png'
// import DayCard from '../components/dayCard'
import { useRef, useState } from 'react';
import gsap from "gsap"
import { useEffect } from 'react'
import HologramSpin from '../assets/Hologram spin full.svg';
import RuleBG from '../assets/RuleContent.png'

import BarBG from "../assets/BarBG.svg"
import RuleBottomFloor from '../assets/RuleFloorBottom.svg'
// import Shapes from "../assets/SquareTriangle.svg"

function Rules() {
  const trainRef = useRef(null);
    const cloudRef = useRef(null);
    const mascotRef = useRef(null);
    const [pasal, setPasal] = useState(1);
    const [page, setPage] = useState(1);


    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, defaults: {} });
        const cl = gsap.timeline({ repeat: -1, defaults: { ease: "power4.out", duration: 1 } });
        const ml = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } })

        tl.to(trainRef.current, { x: -1500, opacity: 1 }) // Train moves in
            .to(trainRef.current, { x: 2500, opacity: 1, duration: 5 }) // Train moves out
            .to(trainRef.current, { x: -1500, opacity: 1, duration: 5 }) // Reset position before entering again
            .to(trainRef.current, { x: 2500, opacity: 1, duration: 5 })
        cl.to(cloudRef.current, { y: 0, duration: 1, ease: "linear" })
            .to(cloudRef.current, { y: -5, duration: 2, ease: "linear" })
            .to(cloudRef.current, { y: 0, duration: 1, ease: "linear" })

        ml.from(mascotRef.current, { y: 250, duration: 0.5, scale: 0.8, ease: "linear" })
            .to(mascotRef.current, { y: 0, duration: 0.5, scale: 1, ease: "linear" })
        return () => {
            tl.kill();
            cl.kill();
            ml.kill();
        }
    }, []);

    const nextPasal = () =>{
        if(pasal != 2){
            setPasal(pasal+1)
        }
        
    }

    const prevPasal = () =>{
        if(pasal != 1){
            setPasal(pasal-1)
        }
    }

    const nextPage = () =>{
        switch(pasal){
            case 1:
                if(page!=9){
                    setPage(page+1)
                }
                break;
            case 2:
                if(page!=9){
                    setPage(page+1)
                }
                break;

        }
        
    }

    const prevPage = () =>{
        
        if(page!=1){
            setPage(page-1)
        }
    }

    useEffect(()=>{
        setPage(1)
    },[pasal])




    return (
        <div className='relative'>
            
            <div className="h-[40vh] overflow-hidden z-1 lg:h-screen w-screen relative bg-gradient-to-b justify-center items-center from-[#2C186C]  to-[#961854]">
                <p className='batman text-4xl lg:text-8xl absolute top-20 text-white w-full'>Rules</p>
                
                <img src={cityFront} alt="" className='absolute bottom-[-5%] z-10 w-screen' />
                <img src={cityBack} alt="" className='absolute bottom-[-3%] z-[2] w-screen' />
                <img src={HologramSpin} className='absolute w-[30vw] h-[30vw] top-20 left-[-10%] z-[1] opacity-50' alt="" />
                <img src={HologramSpin} className='absolute w-[30vw] h-[30vw] top-20 right-[-10%] z-[1] opacity-50' alt="" />
                <img src={BarBG} alt="" className='absolute w-screen bottom-[-25%] z-[0] mix-blend-color-dodge'/>
            </div>
            <img src={floor} alt="" className='absolute top-[30vh] lg:top-[50vh] w-screen z-20'/>
            <div className='h-full w-screen relative bg-[#000919]  flex justify-center pb-10  relative'>
            
                <div className='flex flex-col gap-20 z-[50] justify-center relative items-center px-20'>
                    <div className='gap-5 flex flex-row relative '>   
                        <button onClick={prevPasal} className='py-1 px-3 relative  rounded-xl body bg-[#11283D] text-white  border-2 border-sky-500'>&larr;</button>
                    <select name="pasal" value={pasal} id="" onChange={(e) => setPasal(+e.target.value)} className='w-[60vw] py-2 rounded-xl bg-[#11283D] text-white body text-center'>
                        <option value="1">RektorCup 2025</option>
                        <option value="2">UC Champions 2025</option>
                    </select>
                        <button onClick={nextPasal} className='py-1 px-3  rounded-xl body  bg-[#11283D] text-white border-2 border-sky-500'>&rarr;</button>
                    </div>
                    
                    <div className='relative w-[90vw] flex flex-col justify-center items-center'>
    
                      <p className='text-white body rounded-xl w-full  py-[15%] lg:py-[10%]  top-0 z-[20] ' style={{
                            backgroundImage: `url(${RuleBG})`,
                            backgroundSize: "100% 100%", 
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}>
                        {pasal == 1 && page==1 && <>
                            <Page1/>
                        </>}
                        {pasal == 1 && page==2 && <>
                            <Page2/>
                        </>}
                        {pasal == 1 && page==3 && <>
                            <Page3/>
                        </>}
                        {pasal == 1 && page==4 && <>
                            <Page4/>
                        </>}
                        {pasal == 1 && page==5 && <>
                            <Page5/>
                        </>}
                        {pasal == 1 && page==6 && <>
                            <Page6/>
                        </>}
                        {pasal == 1 && page==7 && <>
                            <Page7/>
                        </>}
                        {pasal == 1 && page==8 && <>
                            <Page8/>
                        </>}
                        {pasal == 1 && page==9 && <>
                            <Page9/>
                        </>}

                        {pasal == 2 && page==1 && <>
                            <Page1UC/>
                        </>}
                        {pasal == 2 && page==2 && <>
                            <Page2UC/>
                        </>}
                        {pasal == 2 && page==3 && <>
                            <Page3UC/>
                        </>}
                        {pasal == 2 && page==4 && <>
                            <Page4UC/>
                        </>}
                        {pasal == 2 && page==5 && <>
                            <Page5UC/>
                        </>}
                        {pasal == 2 && page==6 && <>
                            <Page6UC/>
                        </>}
                        {pasal == 2 && page==7 && <>
                            <Page7UC/>
                        </>}
                        {pasal == 2 && page==8 && <>
                            <Page8UC/>
                        </>}
                        {pasal == 2 && page==9 && <>
                            <Page9UC/>
                        </>}
                      </p>
                    </div>
                    <div className='flex gap-5'>
                    <button onClick={prevPage} className='py-1 px-3 rounded-xl body bg-[#11283D] text-white  border-2 border-sky-500'>&larr;</button>
                    <select name="" value={page} id="" onChange={(e) => setPage(+e.target.value)}  className='w-[60vw]  py-2 rounded-xl bg-[#11283D] text-white body text-center'>
                        {pasal == 1 && 
                        <>
                        <option value="1">Peraturan dan Ketentuan I</option>
                        <option value="2">Peraturan dan Ketentuan II</option>
                        <option value="3">Peraturan dan Ketentuan III</option>
                        <option value="4">Peraturan dan Ketentuan IV</option>
                        <option value="5">Tindakan dan Hak I</option>
                        <option value="6">Tindakan dan Hak II</option>
                        <option value="7">Tindakan dan Hak III</option>
                        <option value="8">Sanksi I</option>
                        <option value="9">Sanksi II</option>
                        </>}
                        {pasal == 2 && 
                        <>
                        <option value="1">Peraturan dan Ketentuan I</option>
                        <option value="2">Peraturan dan Ketentuan II</option>
                        <option value="3">Peraturan dan Ketentuan III</option>
                        <option value="4">Peraturan dan Ketentuan IV</option>
                        <option value="5">Tindakan dan Hak I</option>
                        <option value="6">Tindakan dan Hak II</option>
                        <option value="7">Tindakan dan Hak III</option>
                        <option value="8">Sanksi I</option>
                        <option value="9">Sanksi II</option>
                        </>}
                    </select>
                    <button onClick={nextPage} className='py-1 px-3  rounded-xl body  bg-[#11283D] text-white border-2 border-sky-500'>&rarr;</button>
                    </div>
                    {pasal == 1 &&
                    <>
                        <button
            className="batman border-4 border-[#96D8E4] text-white text-xl mt-5 lg:text-3xl px-20 py-5 buttonColor"
            onClick={() => {
              const fileUrl =
                '/uploads/Peraturan Rektor Cup 2025.pdf'; // Replace with your actual file path
              const link = document.createElement('a');
              link.href = fileUrl;
              link.download =
                'Peraturan Rektor Cup 2025.pdf'; // Name the file as it will appear after download
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download
            <br />
            Rulebook
          </button>
                    </>
                    }
                    {pasal == 2  &&
                    <>
                        <button
            className="batman border-4 border-[#96D8E4] text-white text-xl mt-5 lg:text-3xl px-20 py-5 buttonColor"
            onClick={() => {
              const fileUrl =
                '/uploads/Peraturan UC Champions 2025.pdf'; // Replace with your actual file path
              const link = document.createElement('a');
              link.href = fileUrl;
              link.download =
                'Peraturan UC Champions 2025.pdf'; // Name the file as it will appear after download
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download
            <br />
            Rulebook
          </button>
                    </>
                    }



                </div>
                
                <div className='h-full w-full  absolute'>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="1374" height="3085" viewBox="0 0 1374 3085" className='absolute left-0' fill="none">
                        <g filter="url(#filter0_f_809_1669)">
                            <path d="M374 1542.5C374 1842.11 126.413 2085 -179 2085C-484.413 2085 -732 1842.11 -732 1542.5C-732 1242.89 -484.413 1000 -179 1000C126.413 1000 374 1242.89 374 1542.5Z" fill="#07649D" />
                        </g>
                        <defs>
                            <filter id="filter0_f_809_1669" x="-1732" y="0" width="3106" height="3085" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                            <filter id="filter0_f_809_149" x="-222" y="0" width="3259" height="5217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_809_149" />
                            </filter>
                        </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="4817" viewBox="0 0 1440 4817" className='absolute left-0 top-[50%] w-screen' fill="none">
                        <g filter="url(#filter0_f_809_684)">
                            <path d="M1055 2519.5C1055 3358.7 741.375 4039 354.5 4039C-32.3755 4039 -346 3358.7 -346 2519.5C-346 1680.3 -32.3755 1000 354.5 1000C741.375 1000 1055 1680.3 1055 2519.5Z" fill="#07649D" fill-opacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_809_684" x="-1346" y="0" width="3401" height="5039" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_809_684" />
                            </filter>
                        </defs>
                    </svg>
                    <img src={RuleBottomFloor} alt="" className='absolute w-[100vw] bottom-[-15%]'/>
                    <img src={HologramSpin} className='absolute w-[20vw] h-[20vw] top-30 left-[5%] opacity-10' alt="" />
                    <img src={HologramSpin} className='absolute w-[40vw] h-[40vw] top-0 right-[-15%] opacity-10' alt="" />

                </div>
            </div>

        </div>
    )
}

export default Rules
