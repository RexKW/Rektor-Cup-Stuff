import clouds from '../assets/Clouds.png'
import track from '../assets/TrainTrack.svg'
import cityFront from '../assets/frontCity.png'
import cityBack from '../assets/backCity.png'
import train from '../assets/train.svg'
import mascot from '../assets/MascotWing.png'
import DayCard from '../components/dayCard'
import { useRef } from 'react';
import gsap from "gsap"
import { useEffect } from 'react'
import HologramSpin from '../assets/Hologram spin full.svg';
import TimelineBG from '../assets/TimelineBG.png'
import TimelineBottomBG from '../assets/TimelineBottomBG.png'
import BGFinal from "../assets/BGStripe.png"


function Timeline() {

    const trainRef = useRef(null);
    const cloudRef = useRef(null);
    const mascotRef = useRef(null);

    const Timeline = [
        { date: '3 Maret', name: 'Opening & Band' },
        { date: '4 Maret', name: 'COC & Badminton' },
        { date: '6 Maret', name: 'Catur & Futsal' },
        { date: '10-11 Maret', name: 'DEBAT & BASKET PUTRA & PUTRI' },
        { date: '13 Maret', name: 'Basket Putri' },
        { date: '14 Maret', name: 'Basket Putra & Dance' },
        { date: '17 Maret', name: 'PUBG' },
        { date: '18 Maret', name: 'Mobile Legends' },
    ]

    const TimelineFinal = [
        { date: '5 Maret', name: 'COC & Badminton' },
        { date: '7 Maret', name: 'Catur & Futsal' },
        { date: '12 Maret', name: 'DEBAT & BASKET PUTRA & PUTRI' },
        { date: '18 Maret', name: 'PUBG & Billiard Putri' },
        { date: '20 Maret', name: 'Mobile Legends & Billiard Putra' },
        { date: '21 Maret', name: 'Closing & Dance' },
    ]

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




    return (
        <div className='relative'>
            <div className="h-[40vh] lg:h-screen w-screen relative bg-gradient-to-t justify-center items-center from-[#ED197E] from-0% via-[#3B1A55] via-50% to-[#132B44]">
                <p className='batman text-4xl lg:text-8xl absolute top-20 text-white w-full'>Timeline</p>
                <div className='absolute bottom-0 z-20 flex flex-col'>
                    <img src={train} ref={trainRef} alt="" className='w-[60%] move ' />
                    <img src={track} alt="" className=' w-screen' />
                </div>
                <img src={mascot} ref={mascotRef} alt="" className='absolute z-[15] bottom-[-15%] px-[25%] w-[100%]' />
                <img src={clouds} ref={cloudRef} className='absolute bottom-[-20%] z-10 w-screen' alt="" />
                <img src={cityFront} alt="" className='absolute bottom-5 z-10 w-screen' />
                <img src={cityBack} alt="" className='absolute bottom-5 z-0 w-screen' />
            </div>
            <div className='h-full w-screen  bg-[#000919] flex justify-center pb-10 z-[100] relative'>
                <div className='flex flex-col gap-20 justify-center z-[50] relative items-center px-20'>
                    {Timeline.map((card) => (
                        <DayCard date={card.date} name={card.name} />
                    ))}
                    <div className=' mt-20'>
                        <p className='text-6xl text-white batman'>Final</p>
                    </div>
                    {TimelineFinal.map((card) => (
                        <DayCard date={card.date} name={card.name} />
                    ))}



                </div>
                <div className='h-full w-full absolute'>
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
                    <img src={HologramSpin} className='absolute w-[20vw] h-[20vw] top-30 left-[5%] opacity-10' alt="" />
                    <img src={HologramSpin} className='absolute w-[40vw] h-[40vw] top-0 right-[-15%] opacity-10' alt="" />
                    <img src={BGFinal} alt="" className='absolute top-[54%] left-0 w-screen opacity-50 rotate-[-15deg]'/>
                    <img src={TimelineBG} alt="" className='opacity-10 absolute left-0  w-screen h-auto' />
                    <img src={TimelineBottomBG} alt="" className=' absolute left-0 bottom-[-25%] opacity-30 w-full' />
                </div>
            </div>

        </div>
    )
}

export default Timeline
