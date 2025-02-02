import axios from "axios"


const getCompetition = async (id: number) =>{
    try {
        const response = await axios.get(`/api/competition-list/${id}`, {
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching user:", error); 
        throw error; 
    }
}

const getAllCompetitions = async (type: string) =>{
    try {
        const response = await axios.post("/api/competition-list/all", {

                type: type,
            
        },{

        }
    );
        return response.data; 
    } catch (error) {
        console.error("Error fetching user:", error); 
        throw error; 
    }
}


const createCompetition = async (type: string, team1: number, team2:number, name: string, token:string) =>{
    
    try {
        const response = await axios.post("/api/competition-list", {
            name: name,
            team_1_id: team1,
            team_2_id: team2,
            type: type
        },
        {
            headers: { "Content-Type": "application/json", "X-API-TOKEN": token}
        }
    );
        return response.data; 
    } catch (error) {
        console.error("Error Creating Competition:", error); 
        throw error; 
    }
}

const updateCompetition = async (id:string, score1:number, score2:number, status:string, token:string) =>{
    try{
        await axios.put(`/api/competition-list/${id}`,{
            team_score_1: score1,
            team_score_2: score2,
            status: status
        },
        {
            headers: { "Content-Type": "application/json", "X-API-TOKEN": token}
        })
    }catch(error){
        console.error(error)
    }
    
}

const updatePasswordUser = async (email: string, password: string) =>{
    try{
        await axios.put("https://rektorcupuc.com/users/updatePass",{
            email,
            password
        })
    }catch(error){
        console.error(error)
    }
}

const deleteCompetition = async (id:string, token:string) =>{
    try{
        await axios.delete(`/api/competition-list/${id}`,
        {
            headers: { "Content-Type": "application/json", "X-API-TOKEN": token}
        })
    }catch(error){
        console.error(error)
    }
}


export {getCompetition,getAllCompetitions, createCompetition, updateCompetition, updatePasswordUser, deleteCompetition}