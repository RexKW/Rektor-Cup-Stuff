import { getAllCompetitions } from '../apis/CompetitionCRUD';
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import '../styles/Admin.css';
import Wave from '../assets/BlueWave.svg';
import HologramSpin from '../assets/Hologram spin full.svg';

function Admin() {
  const [basketCompetitions, setBasketCompetitions] = useState<any[]>([]);
  const [soccerCompetitions, setSoccerCompetitions] = useState<any[]>([]);
  const [badmintonCompetitions, setBadmintonCompetitions] = useState<any[]>([]);
  const [billiardCompetitions,setBilliardCompetitions] = useState<any[]>([]);
  const teamNames = [
    'None',
    'IMT',
    'ISB',
    'IBM',
    'BMI',
    'VCD',
    'INA',
    'MED',
    'ACC',
    'PSY',
    'HTB',
    'FTP',
    'CB',
    'FIKOM',
    'FDB'
  ]


  const [soccerSelect, setSoccerSelect] = useState(true);
  const [basketSelect, setBasketSelect] = useState(false);
  const [badmintonSelect, setBadmintonSelect] = useState(false);
  const [billiardSelect, setBilliardnSelect] = useState(false);

  const selectSoccer = () => {
    setSoccerSelect(true)
    setBasketSelect(false)
    setBadmintonSelect(false)
    setBilliardnSelect(false)
  }

  const selectBasket = () => {
    setSoccerSelect(false)
    setBasketSelect(true)
    setBadmintonSelect(false)
    setBilliardnSelect(false)
  }

  const selectBadminton = () => {
    setSoccerSelect(false)
    setBasketSelect(false)
    setBilliardnSelect(false)
    setBadmintonSelect(true)
  }

  const selectBilliard = () => {
    setSoccerSelect(false)
    setBasketSelect(false)
    setBilliardnSelect(true)
    setBadmintonSelect(false)
  }


  useEffect(() => {
    const fetchCompetitions = async () => {
      const basketBall = await getAllCompetitions("basketball")
      console.log(basketBall)
      setBasketCompetitions(basketBall.data)
      console.log(basketCompetitions)
      const badminton = await getAllCompetitions("badminton")
      setBadmintonCompetitions(badminton.data)
      const soccer = await getAllCompetitions("soccer")
      setSoccerCompetitions(soccer.data)
      const billiard = await getAllCompetitions("billiard")
      setBilliardCompetitions(billiard.data)
    };


    fetchCompetitions()
  }, [])



  return (
    <div className=' min-h-screen bg-[#000919] adminBG relative'>
      <div className='absolute mt-10 h-full top-0 flex flex-col items-center z-10 w-full'>
      {soccerSelect && (<p className='header text-3xl text-white mt-5'>Soccer</p>)}
      {basketSelect && (<p className='header text-3xl text-white mt-5'>Basketball</p>)}
      {badmintonSelect && (<p className='header text-3xl text-white mt-5'>Badminton</p>)}
      {billiardSelect && (<p className='header text-3xl text-white mt-5'>Billiard</p>)}
        <div className='flex w-full flex-col px-5 lg:flex-row gap-5 justify-center mt-5'>
          
          <button onClick={selectSoccer} className='body text-white p-5 rounded-lg bg-gradient-to-t from-[#8B0001] via-[#B12E21] to-[#D65D42] hover:scale-110 transition duration-200'>
            <p>Soccer</p>
          </button>
          <button onClick={selectBasket} className='body text-white p-5 rounded-lg bg-gradient-to-t from-[#1F1E1E] via-[#5D5959] to-[#B1B1B1] hover:scale-110 transition duration-200'>
            <p>Basketball</p>
          </button>
          <button onClick={selectBadminton} className='body text-white p-5 rounded-lg bg-gradient-to-t from-[#00224A] via-[#02386E] to-[#0052A2] hover:scale-110 transition duration-200'>
            <p>Badminton</p>
          </button>
          <button onClick={selectBilliard} className='body items-center justify-center gap-5 flex text-white p-5 rounded-lg bg-gradient-to-t  from-[#2D460A] via-[#879033] to-[#C5DB5B] hover:scale-110 transition duration-200'>
            <p>Billiard</p>
          </button>
        </div>  
        <div className='flex flex-col gap-5 w-full mt-5 px-5'>
        {soccerSelect && (
    <>
      {soccerCompetitions?.length > 0 ? (
        soccerCompetitions.map((competition) => (
          <Link
              to={`/admin/updateCompetition/${competition.id}`}
              key={competition.id}
              className="bg-[#487F99]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center"
            >
            <div className='flex flex-row gap-5 w-full items-center justify-center'>
            <div
                className={`basis-[20%] text-xs lg:text-base text-white body p-2 rounded-lg ${
                  competition.status === 'Upcoming'
                    ? 'bg-blue-500'
                    : competition.status === 'Done'
                    ? 'bg-green-500'
                    : competition.status === 'Ongoing'
                    ? 'bg-yellow-500'
                    : 'bg-gray-500'
                }`}
              >
                {competition.status}
              </div>
                <p className='basis-[15%] text-xs lg:text-base text-white body'>{teamNames[competition.team_1_id]}</p>
                <p className='basis-[10%] text-xs lg:text-base text-white body'>{competition.team_score_1}</p>
                <p className='text-white body'>VS</p>
                <p className='basis-[15%] text-xs lg:text-base text-white body'>{competition.team_score_2}</p>
                <p className='basis-[10%] text-xs lg:text-base text-white body'>{teamNames[competition.team_2_id]}</p>
                <p className='basis-[20%] text-xs lg:text-base text-white body'>{competition.name}</p>
              </div>
          </Link>
        ))
      ) : (
        <div className='bg-[#487F99]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center'>
          <p className='text-white text-3xl header '>No soccer competitions available</p>
        </div>
      )}
    </>
  )}

  {basketSelect && (
    <>
      {basketCompetitions?.length > 0 ? (
        basketCompetitions.map((competition) => (
          <Link
              to={`/admin/updateCompetition/${competition.id}`}
              key={competition.id}
              className="bg-[#487F99]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center"
            >
            <div className='flex flex-row gap-5 w-full items-center justify-center'>
            <div
                className={`basis-[20%] text-xs lg:text-base text-white body p-2 rounded-lg ${
                  competition.status === 'Upcoming'
                    ? 'bg-blue-500'
                    : competition.status === 'Done'
                    ? 'bg-green-500'
                    : competition.status === 'Ongoing'
                    ? 'bg-yellow-500'
                    : 'bg-gray-500'
                }`}
              >
                {competition.status}
              </div>
                <p className='basis-[15%] text-xs lg:text-base text-white body'>{teamNames[competition.team_1_id]}</p>
                <p className='basis-[10%] text-xs lg:text-base text-white body'>{competition.team_score_1}</p>
                <p className='text-white body'>VS</p>
                <p className='basis-[10%] text-xs lg:text-base text-white body'>{competition.team_score_2}</p>
                <p className='basis-[15%] text-xs lg:text-base text-white body'>{teamNames[competition.team_2_id]}</p>
                <p className='basis-[20%] text-xs lg:text-base text-white body'>{competition.name}</p>
              </div>
          </Link>
        ))
      ) : (
        <div className='bg-[#487F99]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center'>
          <p className='text-white text-3xl header '>No basketball competitions available</p>
        </div>
      )}
    </>
  )}

  {badmintonSelect && (
    <>
      {badmintonCompetitions?.length > 0 ? (
        badmintonCompetitions.map((competition) => (
          <Link
              to={`/admin/updateCompetition/${competition.id}`}
              key={competition.id}
              className="bg-[#487F99]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center"
            >
              <div className='flex flex-row gap-5 w-full items-center justify-center'>
              <div
                className={`basis-[20%] text-xs lg:text-base text-white body p-2 rounded-lg ${
                  competition.status === 'Upcoming'
                    ? 'bg-blue-500'
                    : competition.status === 'Done'
                    ? 'bg-green-500'
                    : competition.status === 'Ongoing'
                    ? 'bg-yellow-500'
                    : 'bg-gray-500'
                }`}
              >
                {competition.status}
              </div>
                
                <p className='basis-[15%] text-xs lg:text-base text-white body'>{teamNames[competition.team_1_id]}</p>
                <p className='basis-[10%] text-xs lg:text-base text-white body'>{competition.team_score_1}</p>
                <p className='text-white body'>VS</p>
                <p className='basis-[10%] text-xs lg:text-base text-white body'>{competition.team_score_2}</p>
                <p className='basis-[15%] text-xs lg:text-base text-white body'>{teamNames[competition.team_2_id]}</p>
                <p className='basis-[20%] text-xs lg:text-base text-white body'>{competition.name}</p>
              </div>
              
            
          </Link>
          
          

          
        ))
      ) : (
        <div className='bg-[#487F99]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center'>
          <p className='text-white text-3xl header '>No badminton competitions available</p>
        </div>
        
      )}
    </>
  )}

{billiardSelect && (
    <>
      {billiardCompetitions?.length > 0 ? (
        billiardCompetitions.map((competition) => (
          <Link
              to={`/admin/updateCompetition/${competition.id}`}
              key={competition.id}
              className="bg-[#487F99]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center"
            >
              <div className='flex flex-row gap-5 w-full items-center justify-center'>
              <div
                className={`basis-[20%] text-xs lg:text-base text-white body p-2 rounded-lg ${
                  competition.status === 'Upcoming'
                    ? 'bg-blue-500'
                    : competition.status === 'Done'
                    ? 'bg-green-500'
                    : competition.status === 'Ongoing'
                    ? 'bg-yellow-500'
                    : 'bg-gray-500'
                }`}
              >
                {competition.status}
              </div>
                
                <p className='basis-[15%] text-xs lg:text-base text-white body'>{teamNames[competition.team_1_id]}</p>
                <p className='basis-[10%] text-xs lg:text-base text-white body'>{competition.team_score_1}</p>
                <p className='text-white body'>VS</p>
                <p className='basis-[10%] text-xs lg:text-base text-white body'>{competition.team_score_2}</p>
                <p className='basis-[15%] text-xs lg:text-base text-white body'>{teamNames[competition.team_2_id]}</p>
                <p className='basis-[20%] text-xs lg:text-base text-white body'>{competition.name}</p>
              </div>
              
            
          </Link>
          
          

          
        ))
      ) : (
        <div className='bg-[#487F99]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center'>
          <p className='text-white text-3xl header '>No billiard competitions available</p>
        </div>
        
      )}
    </>
  )}

          <a href="/admin/createCompetition" className='bg-green-500/60 backdrop-blur-sm p-5 rounded-lg'>
            <p className='text-white body'>Add Competition</p>
          </a>
        </div>
      </div>

    <div className='absolute w-full z-1'>
    <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className='h-screen blur-[0px]' viewBox="0 0 1440 1024" fill="none" >
        <g filter="url(#filter0_f_783_470)">
        <path d="M545 141C545 716.481 263.163 1183 -84.5 1183C-432.163 1183 -714 716.481 -714 141C-714 -434.481 -432.163 -901 -84.5 -901C263.163 -901 545 -434.481 545 141Z" fill="#04385E"/>
        </g>
        <defs>
        <filter id="filter0_f_783_470" x="-1714" y="-1901" width="3259" height="4084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_783_470"/>
        </filter>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className='h-screen  absolute right-0 bottom-0' viewBox="0 0 1440 1024" fill="none">
                <g filter="url(#filter0_f_783_469)">
                <path d="M2067 1064C2067 1639.48 1785.16 2106 1437.5 2106C1089.84 2106 808 1639.48 808 1064C808 488.519 1089.84 22 1437.5 22C1785.16 22 2067 488.519 2067 1064Z" fill="#380855"/>
                </g>
                <defs>
                <filter id="filter0_f_783_469" x="-192" y="-978" width="3259" height="4084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_783_469"/>
                </filter>
                </defs>
            </svg>
      <img src={HologramSpin} className='absolute w-[40vw] h-[40vw] top-0 left-[-15%] opacity-20' alt="" />
      <img src={HologramSpin} className='absolute w-[25vw] h-[25vw] rotate-180  top-0 right-[-5%] opacity-20' alt="" />
      <img src={HologramSpin} className='absolute w-[20vw] h-[20vw] bottom-[-20%] rotate-[235deg] right-[15%] opacity-20' alt="" />
      <img src={Wave} alt="Wave" className="wave bottom-0" draggable="false"/>
    </div>
     
    </div>
  )
}

export default Admin
