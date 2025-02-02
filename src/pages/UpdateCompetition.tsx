import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { getCompetition, updateCompetition,deleteCompetition } from '../apis/CompetitionCRUD';
import { getTeam } from '../apis/TeamCRUD';
import Wave from '../assets/BlueWave.svg';

function UpdateCompetition() {
    const { id } = useParams();
    console.log('Competition ID:', id);
    const token = localStorage.getItem('token');
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchCompetition = async() =>{
                const competition = await getCompetition(Number(id))
                console.log(competition.data)
                const team1Data = await getTeam(competition.data.team_1_id)
                
                setTeam1(team1Data.name)
                const team2Data = await getTeam(competition.data.team_2_id)
                setTeam2(team2Data.name)
                setScore1(competition.data.team_score_1)
                setScore2(competition.data.team_score_2)
                setStatus(competition.data.status)
        }
        fetchCompetition()
    },[id])

    const handleStatusChange = async (newStatus: string) => {
        setStatus(newStatus);
        try {
            if(id && token){
                await updateCompetition(id,score1, score2, newStatus, token);
                console.log('Status updated successfully');
            }else{
                console.log("No changes yet?")
            }
            
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const handleScore1Add = async () =>{
        try{
            if(id && token){
                const score1Add = score1 + 1;
                setScore1(score1Add)
                await updateCompetition(id,score1Add, score2, status, token);
                console.log('Score updated successfully');
            }else{
                console.log("No changes yet?")
            }
        }catch(error){
            console.error('Failed to update status:', error)
        }
    }

    const handleScore1Min = async () =>{
        try{
            if(id && token){
                const score1Min = score1 - 1;
                if(score1Min >= 0){
                    setScore1(score1Min)
                    await updateCompetition(id,score1Min, score2, status, token);
                    console.log('Score updated successfully');
                }
                
            }else{
                console.log("No changes yet?")
            }
        }catch(error){
            console.error('Failed to update status:', error)
        }
    }


    const handleScore2Add = async () =>{
        try{
            if(id && token){
                const score2Add = score2 + 1;
                setScore2(score2Add)
                await updateCompetition(id,score1, score2Add, status, token);
                console.log('Score updated successfully');
            }else{
                console.log("No changes yet?")
            }
        }catch(error){
            console.error('Failed to update status:', error)
        }
    }

    const handleScore2Min = async () =>{
        try{
            if(id && token){
                const score2Min = score2 - 1;
                if(score2Min >= 0){
                    setScore2(score2Min)
                    await updateCompetition(id,score1, score2Min, status, token);
                    console.log('Score updated successfully');
                }
                
            }else{
                console.log("No changes yet?")
            }
        }catch(error){
            console.error('Failed to update status:', error)
        }
    }

    const handleDeleteCompetition = async()=>{
        try{
            if(id && token){
                await deleteCompetition(id, token)
                navigate(-1)

            }
        }catch(error){
            console.error('Failed to delete status', error)
        }
    }


  return (
    <div className='min-h-screen w-screen relative bg-[#000919]'>
        <div className='flex flex-row absolute z-10 justify-center w-full h-full items-center'>
        <p
                    className='text-white body text-2xl absolute top-5 left-5'
                    onClick={() => navigate(-1)}
                    style={{ cursor: 'pointer' }}
                >
                    &larr; Back
                </p>
            <img src="" alt="" />
            <div className='flex flex-col bg-[#2E546B]/70 rounded-xl w-[65vw] h-content mt-5 py-5 lg:py-20 justify-center items-center'>
                <div className='flex flex-row gap-5 basis-[20%]'>
                    <img src="" alt="1" />
                    <img src="" alt="2" />
                    <img src="" alt="3" />
                </div>
                <div className='flex basis-[33%] flex-col lg:flex-row w-full h-full justify-center items-center px-10 gap-5 lg:gap-20'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <div className=' bg-white/20 items-center backdrop-blur-sm justify-center rounded-xl flex px-10 h-24 lg:px-36 lg:h-60'>
                            <p className='text-white text-4xl lg:text-6xl'>{score1}</p>
                        </div>
                        <p className='text-white text-3xl py-5 lg:text-6xl body'>{team1}</p>
                        <div className='flex justify-between w-full'>
                            <button onClick={handleScore1Min} className='text-6xl text-white w-10  h-10 lg:w-20 lg:h-20 pb-3 items-center flex justify-center rounded-xl bg-blue-400'>
                                -
                            </button>
                            <button onClick={handleScore1Add} className='text-6xl text-white w-10  h-10 lg:w-20 lg:h-20 rounded-xl pb-3 items-center flex justify-center bg-blue-400'>
                                +
                            </button>
                        </div>
                    </div>
                    <p className='text-white text-4xl lg:text-6xl body'>VS</p>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <div className=' bg-white/20 items-center justify-center rounded-xl flex px-10 h-24  lg:px-36 lg:h-60'>
                            <p className='text-white text-4xl lg:text-6xl'>{score2}</p>
                        </div>
                        <p className='text-white text-3xl py-5 lg:text-6xl body'>{team2}</p>
                        <div className='flex justify-between w-full'>
                            <button onClick={handleScore2Min} className='text-6xl text-white w-10  h-10 lg:w-20 lg:h-20 pb-3 items-center flex justify-center rounded-xl bg-blue-400'>
                                -
                            </button>
                            <button onClick={handleScore2Add} className='text-6xl text-white w-10  h-10 lg:w-20 lg:h-20 pb-3 items-center flex justify-center rounded-xl bg-blue-400'>
                                <p>+</p>
                            </button>
                        </div>
                    </div>
                </div>
                <select name="type" id="" className='mt-5 px-5 py-2 rounded-xl body' value={status} onChange={(e) => handleStatusChange(e.target.value)}>
                    <option value="Done">Done</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Upcoming">Upcoming</option>
                </select>
                <button onClick={handleDeleteCompetition}  className='mt-5 px-5 py-2 rounded-xl body bg-red-500 text-white'>
                    Delete
                </button>
            </div>
            <img src="" alt="" />
        </div>
        <div className='relative z-1 h-screen'>
                <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className='h-screen  absolute left-0 top-0' viewBox="0 0 1440 1024" fill="none" >
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
            <img src={Wave} alt="Wave" className="wave absolute bottom-[-200%]" draggable="false"/>
        </div>
    </div>
  )
}

export default UpdateCompetition
