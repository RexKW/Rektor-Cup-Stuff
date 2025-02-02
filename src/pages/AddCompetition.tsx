import React, { useEffect, useState } from 'react'
import { getAllTeams } from '../apis/TeamCRUD';
import { createCompetition } from '../apis/CompetitionCRUD';
import { useNavigate } from 'react-router-dom'

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
    <div className='flex flex-col h-[100vh] justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-full'>
        <form onSubmit={createCompetittion} className='flex flex-col gap-5 px-10'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <select name="team_1_id" id="" value={team1} onChange={(e) => setTeam1(e.target.value)}>
                <option value="" disabled>Select Team</option>
                {teams.map( (team) =>(
                    <option value={team.id}>{team.name}</option>
                ))}
            </select>
            <select name="team_2_id" id="" value={team2} onChange={(e) => setTeam2(e.target.value)}>
                <option value="" disabled>Select Team</option>
                {teams.map( (team) =>(
                    <option value={team.id}>{team.name}</option>
                ))}
            </select>
            <select name="type" id="" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="" disabled>Select competition type</option>
                <option value="basketball">Basketball</option>
                <option value="badminton">Badminton</option>
                <option value="soccer">Soccer</option>
            </select>
            <button type='submit' className='bg-green-500'>Create Competition</button>
        </form>
        </div>
        
    </div>
    
  )
}

export default AddCompetition
