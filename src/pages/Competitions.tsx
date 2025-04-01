
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/Admin.css';
import Wave from '../assets/BlueWave.svg';
import { getAllCompetitions } from '../apis/CompetitionCRUD';
import HologramSpin from '../assets/Hologram spin full.svg';
import dots from '../assets/dots.png'
import basketball from '../assets/rektor-img/basketball.svg';
import futsal from '../assets/rektor-img/futsal.svg';
import badminton from '../assets/rektor-img/badminton.svg';
import billiard from '../assets/rektor-img/billiard.svg';

function Competitions() {
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
      setBasketCompetitions(basketBall.data.sort())
      console.log(basketCompetitions)
      const badminton = await getAllCompetitions("badminton")
      setBadmintonCompetitions(badminton.data.sort())
      const soccer = await getAllCompetitions("soccer")
      setSoccerCompetitions(soccer.data.sort())
      const billiard = await getAllCompetitions("billiard")
      setBilliardCompetitions(billiard.data.sort())

      
      
      
      

    };


    fetchCompetitions()
  }, [])



  return (
    <div className=' min-h-screen bg-[#000919] adminBG relative'>
      <div className='relative  min-h-screen top-0 flex flex-col items-center z-10 w-full'>

        <div className='flex w-full flex-col px-5 lg:flex-row gap-5 justify-center mt-5'>

          <button onClick={selectSoccer} className='body items-center justify-center gap-5 flex text-white p-5 rounded-lg bg-gradient-to-t from-[#152C44] via-[#487F98] to-[#26E5D3] hover:scale-110 transition duration-200'>
            <img src={futsal} alt="" className='w-5 h-5'/>
            <p>Soccer</p>
          </button>
          <button onClick={selectBasket} className='body items-center justify-center gap-5 flex text-white p-5 rounded-lg bg-gradient-to-t from-[#811624] via-[#DC6E43] to-[#FBBC9A] hover:scale-110 transition duration-200'>
            <img src={basketball} alt="" className='w-5 h-5'/>
            <p>Basketball</p>
          </button>
          <button onClick={selectBadminton} className='body items-center justify-center gap-5 flex text-white p-5 rounded-lg bg-gradient-to-t  from-[#390855] via-[#79156A] to-[#EE227D] hover:scale-110 transition duration-200'>
            <img src={badminton} alt="" className='w-5 h-5'/>
            <p>Badminton</p>
          </button>
          <button onClick={selectBilliard} className='body items-center justify-center gap-5 flex text-white p-5 rounded-lg bg-gradient-to-t  from-[#2D460A] via-[#879033] to-[#C5DB5B] hover:scale-110 transition duration-200'>
            <img src={billiard} alt="" className='w-5 h-5'/>
            <p>Billiard</p>
          </button>
        </div>
        <div className='flex flex-col gap-5 h-full pb-10 w-full mt-5 px-5'>
          {soccerSelect && (<p className='header text-3xl text-white w-full text-start mt-5'>Soccer</p>)}
          {basketSelect && (<p className='header text-3xl text-white w-full text-start mt-5'>Basketball</p>)}
          {badmintonSelect && (<p className='header text-3xl text-white w-full text-start mt-5'>Badminton</p>)}
          {billiardSelect && (<p className='header text-3xl text-white w-full text-start mt-5'>Billiard</p>)}
          {soccerSelect && (
            <>

              {soccerCompetitions?.length > 0 ? (
                soccerCompetitions.map((competition) => (
                  <Link
                    to={`/competitions/${competition.id}`}
                    key={competition.id}
                    className="bg-[#487F99]/60 backdrop-blur-md border-white border-2 p-5 rounded-lg flex flex-row justify-center items-center"
                  >
                    <div className='flex  flex-row gap-5 w-full items-center justify-center'>
                      <div className='flex basis-[25%] flex-col lg:flex-row justify-center items-center'>
                        <p className='basis-[50%] text-xs lg:text-base text-white body'>{teamNames[competition.team_1_id]}</p>
                        <p className='basis-[50%] score text-xs lg:text-2xl text-white'>{competition.team_score_1}</p>
                      </div>
                      
                      <p className='text-white body'>VS</p>
                      <div className='flex basis-[25%] flex-col-reverse lg:flex-row justify-center items-center'>
                        <p className='basis-[50%] score text-xs lg:text-2xl text-white'>{competition.team_score_2}</p>
                        <p className='basis-[50%] text-xs lg:text-base text-white body'>{teamNames[competition.team_2_id]}</p>
                      </div>
                      
                      <div className='flex flex-col lg:flex-row gap-5 basis-[30%] w-full'>
                        <p className=' text-xs lg:text-base text-white basis-[50%] body rounded-lg flex-grow bg-black/50 border-2 border-black p-5'>{competition.name}</p>
                        <div
                          className={`basis-[20%] flex flex-grow basis-[50%] text-center flex justify-center text-xs lg:text-base text-white body p-5 rounded-lg ${competition.status === 'Upcoming'
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
                      </div>

                    </div>


                  </Link>
                ))
              ) : (
                <div className='bg-[#752C36]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center'>
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
                    to={`/competitions/${competition.id}`}
                    key={competition.id}
                    className="bg-[#487F99]/60 backdrop-blur-md border-white border-2 p-5 rounded-lg flex flex-row justify-center items-center"
                  >
                    <div className='flex  flex-row gap-5 w-full items-center justify-center'>
                      <div className='flex basis-[35%] flex-col lg:flex-row justify-center items-center'>
                        <p className='basis-[50%] text-xs lg:text-base text-white body'>{teamNames[competition.team_1_id]}</p>
                        <p className='basis-[50%] score text-xs lg:text-2xl text-white'>{competition.team_score_1}</p>
                      </div>
                      
                      <p className='text-white body'>VS</p>
                      <div className='flex basis-[35%] flex-col-reverse lg:flex-row justify-center items-center'>
                        <p className='basis-[50%] score text-xs lg:text-2xl text-white'>{competition.team_score_2}</p>
                        <p className='basis-[50%] text-xs lg:text-base text-white body'>{teamNames[competition.team_2_id]}</p>
                      </div>
                      
                      <div className='flex flex-col lg:flex-row gap-5 basis-[30%] w-full'>
                        <p className=' text-xs lg:text-base text-white basis-[50%] body rounded-lg flex-grow bg-black/50 border-2 border-black p-5'>{competition.name}</p>
                        <div
                          className={`basis-[20%] flex flex-grow basis-[50%] text-center flex justify-center text-xs lg:text-base text-white body p-5 rounded-lg ${competition.status === 'Upcoming'
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
                      </div>

                    </div>


                  </Link>
                ))
              ) : (
                <div className='bg-[#752C36]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center'>
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
                    to={`/competitions/${competition.id}`}
                    key={competition.id}
                    className="bg-[#487F99]/60 backdrop-blur-md border-white border-2 p-5 rounded-lg flex flex-row justify-center items-center"
                  >
                    <div className='flex  flex-row gap-5 w-full items-center justify-center'>
                      <div className='flex basis-[25%] flex-col lg:flex-row justify-center items-center'>
                        <p className='basis-[50%] text-xs lg:text-base text-white body'>{teamNames[competition.team_1_id]}</p>
                        <p className='basis-[50%] score text-xs lg:text-2xl text-white'>{competition.team_score_1}</p>
                      </div>
                      
                      <p className='text-white body'>VS</p>
                      <div className='flex basis-[25%] flex-col-reverse lg:flex-row justify-center items-center'>
                        <p className='basis-[50%] score text-xs lg:text-2xl text-white'>{competition.team_score_2}</p>
                        <p className='basis-[50%] text-xs lg:text-base text-white body'>{teamNames[competition.team_2_id]}</p>
                      </div>
                      
                      <div className='flex flex-col lg:flex-row gap-5 basis-[30%] w-full'>
                        <p className=' text-xs lg:text-base text-white basis-[50%] body rounded-lg flex-grow bg-black/50 border-2 border-black p-5'>{competition.name}</p>
                        <div
                          className={`basis-[20%] flex flex-grow basis-[50%] text-center flex justify-center text-xs lg:text-base text-white body p-5 rounded-lg ${competition.status === 'Upcoming'
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
                      </div>

                    </div>


                  </Link>




                ))
              ) : (
                <div className='bg-[#752C36]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center'>
                  <p className='text-white text-3xl header '>No badminton competitions available</p>
                </div>
              )}
            </>
          )}
          {billiardSelect &&(
          <>
            {billiardCompetitions?.length > 0 ? (
                billiardCompetitions.map((competition) => (
                  <Link
                    to={`/competitions/${competition.id}`}
                    key={competition.id}
                    className="bg-[#487F99]/60 backdrop-blur-md border-white border-2 p-5 rounded-lg flex flex-row justify-center items-center"
                  >
                    <div className='flex  flex-row gap-5 w-full items-center justify-center'>
                      <div className='flex basis-[25%] flex-col lg:flex-row justify-center items-center'>
                        <p className='basis-[50%] text-xs lg:text-base text-white body'>{teamNames[competition.team_1_id]}</p>
                        <p className='basis-[50%] score text-xs lg:text-2xl text-white'>{competition.team_score_1}</p>
                      </div>
                      
                      <p className='text-white body'>VS</p>
                      <div className='flex basis-[25%] flex-col-reverse lg:flex-row justify-center items-center'>
                        <p className='basis-[50%] score text-xs lg:text-2xl text-white'>{competition.team_score_2}</p>
                        <p className='basis-[50%] text-xs lg:text-base text-white body'>{teamNames[competition.team_2_id]}</p>
                      </div>
                      
                      <div className='flex flex-col lg:flex-row gap-5 basis-[30%] w-full'>
                        <p className=' text-xs lg:text-base text-white basis-[50%] body rounded-lg flex-grow bg-black/50 border-2 border-black p-5'>{competition.name}</p>
                        <div
                          className={`basis-[20%] flex flex-grow basis-[50%] text-center flex justify-center text-xs lg:text-base text-white body p-5 rounded-lg ${competition.status === 'Upcoming'
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
                      </div>

                    </div>


                  </Link>




                ))
              ) : (
                <div className='bg-[#752C36]/60 backdrop-blur-sm border-white border-2 p-5 rounded-lg flex justify-center items-center'>
                  <p className='text-white text-3xl header '>No billiard competitions available</p>
                </div>
              )}
          </>
        )}

        </div>
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
        <img src={dots} alt="" className='w-[30vw] h-[30vw] absolute top-0 left-0 rotate-180' />
        <img src={dots} alt="" className='w-[30vw] h-[30vw] absolute top-0 right-0 rotate-[-90deg]' />
        <img src={HologramSpin} className='parallax-image absolute w-[40vw] h-[40vw] top-0 left-[-15%] opacity-20' alt="" />
        <img src={HologramSpin} className='parallax-image absolute w-[25vw] h-[25vw] rotate-180  top-0 right-[-5%] opacity-20' alt="" />
        <img src={HologramSpin} className='parallax-image absolute w-[20vw] h-[20vw] bottom-[-20%] rotate-[235deg] right-[15%] opacity-20' alt="" />
        <img src={Wave} alt="Wave" className="absolute w-screen bottom-[-25%]" draggable="false" />
      </div>

    </div>
  )
}

export default Competitions
