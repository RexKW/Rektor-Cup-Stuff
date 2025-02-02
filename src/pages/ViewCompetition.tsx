import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCompetition } from '../apis/CompetitionCRUD';
import { useNavigate } from 'react-router-dom'
import { getTeam } from '../apis/TeamCRUD';
import Wave from '../assets/BlueWave.svg';
import '../styles/Admin.css'
import HologramSpin from '../assets/Hologram spin full.svg';
import IMT from '../assets/IMT.png'
import ISB from '../assets/ISB.png'
import VCD from '../assets/VCD.png'
import PSY from '../assets/PSY.png'
import FIKOM from '../assets/FIKOM.png'
import ACC from '../assets/ACC.png'
import INA from '../assets/INA.png'
import BMI from '../assets/BMI.png'
import IBM from '../assets/IBM.png'
import CB from '../assets/CB.png'
import MED from '../assets/MED.png'
import HTB from '../assets/HTB.png'
import FTP from '../assets/FTP.png'
import FPD from '../assets/FPD.png'
import dots from '../assets/dots.png'




function ViewCompetition() {
    const { id } = useParams();
    console.log('Competition ID:', id);
    const [name, setName] = useState('');
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const teamLogos: { [key: string]: string } = {
        IMT: IMT,
        ISB: ISB,
        VCD: VCD,
        PSY: PSY,
        FIKOM: FIKOM,
        ACC: ACC,
        INA: INA,
        BMI: BMI,
        IBM: IBM,
        CB: CB,
        MED: MED,
        HTB: HTB,
        FTP: FTP,
        FPD: FPD

    };


    useEffect(() => {
        const fetchCompetition = async () => {
            const competition = await getCompetition(Number(id))
            console.log(competition.data)
            const team1Data = await getTeam(competition.data.team_1_id)

            setTeam1(team1Data.name)
            const team2Data = await getTeam(competition.data.team_2_id)
            setTeam2(team2Data.name)
            setName(competition.data.name)
            setScore1(competition.data.team_score_1)
            setScore2(competition.data.team_score_2)
            setStatus(competition.data.status)
        }
        fetchCompetition()

        const interval = setInterval(() => {
            fetchCompetition()
        }, 10000)

        return () => clearInterval(interval)

    }, [id])

    const trail = (score: number) =>{
        if(score<10){
            return '0' + score
        }else{
            return score
        }
    }






    return (
        <div className='min-h-screen w-screen relative bg-[#000919]'>
            <div className='flex flex-col lg:flex-row relative z-10 justify-center  lg:pt-32 w-full h-full items-center'>
                <p
                    className='text-white body text-2xl absolute top-5 left-5'
                    onClick={() => navigate(-1)}
                    style={{ cursor: 'pointer' }}
                >
                    &larr; Back
                </p>

                <img src={teamLogos[team1] || 'default-logo.png'} alt="" className='invisible lg:visible w-32 lg:w-64 h-32 lg:h-64 lg:mr-10' />
                <div className='flex flex-col bg-[#2E546B]/50 backdrop-blur-[5px] shadow-md rounded-xl px-3 lg:px-10 h-content mt-5 mb-5 py-5 lg:py-10 justify-center items-center'>
                    <div className='flex flex-row gap-5 basis-[20%]'>
                        <p className='text-3xl lg:text-5xl text-white header mb-5'>{name}</p>
                    </div>
                    <div className='flex basis-[33%] flex-row w-full h-full justify-center items-center lg:gap-10 '>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <div className=' bg-white/20 items-center backdrop-blur-sm justify-center rounded-xl flex w-[21vh] h-[20vh] lg:w-[35vh] lg:h-[30vh]'>
                                <p className='score text-white text-4xl lg:text-8xl'>{trail(score1)}</p>
                            </div>
                            <p className='text-white text-3xl py-5 lg:text-6xl body'>{team1}</p>
                        </div>
                        <p className='text-white text-xl lg:text-4xl body mt-32'>VS</p>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <div className=' bg-white/20 items-center justify-center rounded-xl flex  w-[21vh] h-[20vh] lg:w-[35vh] lg:h-[30vh]'>
                                <p className='score text-white text-4xl lg:text-8xl'>{trail(score2)}</p>
                            </div>
                            <p className='text-white text-3xl py-5 lg:text-6xl body'>{team2}</p>

                        </div>
                    </div>
                    <div
                        className={`basis-[20%] text-xs lg:text-base text-white body p-2 px-10 rounded-lg ${status === 'Upcoming'
                                ? 'bg-blue-500'
                                : status === 'Done'
                                    ? 'bg-green-500'
                                    : status === 'Ongoing'
                                        ? 'bg-yellow-500'
                                        : 'bg-gray-500'
                            }`}
                    >
                        {status}
                    </div>
                </div>
                <img src={teamLogos[team2] || 'default-logo.png'} alt="" className='invisible lg:visible w-32 lg:w-64 h-32 lg:h-64 lg:ml-10' />
            </div>
            <div className='absolute w-full h-full top-0 z-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className='h-screen blur-[0px]' viewBox="0 0 1440 1024" fill="none" >
                    <g filter="url(#filter0_f_783_470)">
                        <path d="M545 141C545 716.481 263.163 1183 -84.5 1183C-432.163 1183 -714 716.481 -714 141C-714 -434.481 -432.163 -901 -84.5 -901C263.163 -901 545 -434.481 545 141Z" fill="#04385E" />
                    </g>
                    <defs>
                        <filter id="filter0_f_783_470" x="-1714" y="-1901" width="3259" height="4084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_783_470" />
                        </filter>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className='h-screen  absolute right-0 bottom-0' viewBox="0 0 1440 1024" fill="none">
                    <g filter="url(#filter0_f_783_469)">
                        <path d="M2067 1064C2067 1639.48 1785.16 2106 1437.5 2106C1089.84 2106 808 1639.48 808 1064C808 488.519 1089.84 22 1437.5 22C1785.16 22 2067 488.519 2067 1064Z" fill="#380855" />
                    </g>
                    <defs>
                        <filter id="filter0_f_783_469" x="-192" y="-978" width="3259" height="4084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_783_469" />
                        </filter>
                    </defs>
                </svg>
                <img src={dots} alt="" className='w-[30vw] h-[30vw] absolute top-0 left-0 rotate-180'/>
                <img src={dots} alt="" className='w-[30vw] h-[30vw] absolute top-0 right-0 rotate-[-90deg]'/>
                <img src={HologramSpin} className='absolute w-[40vw] h-[40vw] top-0 left-[-15%] opacity-20' alt="" />
                <img src={HologramSpin} className='absolute w-[25vw] h-[25vw] rotate-180  top-0 right-[-5%] opacity-20' alt="" />
                <img src={HologramSpin} className='absolute w-[20vw] h-[20vw] bottom-[-20%] rotate-[235deg] right-[15%] opacity-20' alt="" />
                <img src={Wave} alt="Wave" className="absolute w-screen top-[75%] lg:top-20" draggable="false" />
            </div>
        </div>
    )
}

export default ViewCompetition
