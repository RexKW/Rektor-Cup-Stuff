import React, { useEffect, useState } from 'react'
import { getAllTeams } from '../apis/TeamCRUD';
import { createCompetition } from '../apis/CompetitionCRUD';
import { useNavigate } from 'react-router-dom'
import Wave from '../assets/BlueWave.svg';

function AddCompetition() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [teams, setTeams] = useState<any[]>([]);
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();


    const createCompetittion = async(e: React.FormEvent) =>{
        e.preventDefault();
        try{
            console.log("name: " + name)
            console.log("Team1: " + team1)
            console.log("Team2: " + team2)
            console.log("type: " + type)
            if(!team1 || !team2 || !type || !name){
                alert('Fill All the Inputs first')
            }else{
                if(team1 == team2){
                    alert('Same Team cannot compete')
                }else{
                    if(token){
                        const response = await createCompetition(type, Number(team1), Number(team2), name, token);
                    console.log(response)
                    navigate('/admin/dashboard')
                    }
                    
                }
            }
        }catch(error){
            console.log("Creating Competition Error" + error)
        }
    }

    useEffect(()=>{
        
        const fetchTeams = async () =>{
            if(token){
                const teamData = await getAllTeams()
                setTeams(teamData)
            }
            
        };

        fetchTeams()
    }, [token])

    

  return (
    <div className='min-h-screen w-screen relative bg-[#000919]'>
        <div className='flex flex-col absolute z-10 justify-center items-center w-full'>
            <form onSubmit={createCompetittion} className='flex flex-col bg-[#2E546B]/70 rounded-xl w-[65vw] h-content mt-5 py-5 lg:py-20 justify-center items-center'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <select name="team_1_id" id="" className='mt-5 px-5 py-2 rounded-xl body' value={team1} onChange={(e) => setTeam1(e.target.value)}>
                    <option value="" disabled>Select Team</option>
                    {teams.map( (team) =>(
                        <option value={team.id}>{team.name}</option>
                    ))}
                </select>
                <select name="team_2_id" id="" className='mt-5 px-5 py-2 rounded-xl body' value={team2} onChange={(e) => setTeam2(e.target.value)}>
                    <option value="" disabled>Select Team</option>
                    {teams.map( (team) =>(
                        <option value={team.id}>{team.name}</option>
                    ))}
                </select>
                <select name="type" id="" className='mt-5 px-5 py-2 rounded-xl body' value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="" disabled>Select competition type</option>
                    <option value="basketball">Basketball</option>
                    <option value="badminton">Badminton</option>
                    <option value="soccer">Soccer</option>
                    <option value="billiard">Billiard</option>
                </select>
                <button type='submit' className='bg-green-500 mt-5 px-5 py-2 rounded-xl body text-white'>Create Competition</button>
            </form>
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

export default AddCompetition
