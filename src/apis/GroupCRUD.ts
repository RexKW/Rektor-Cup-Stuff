import axios from "axios"
import { Team } from "../models/Team";



const getTeam = async (id: string) =>{
    try {
        const response = await axios.get(`/api/teams/${id}`,
            {
            });

        console.log(response.data);
        return response.data.data; 
    } catch (error) {
        console.error("Error fetching user:", error); 
        throw error; 
    }
}

const getAllTeams = async ():  Promise<Team[]> =>{
    try {
        const response = await axios.get("/api/teams",
            {
            });

        console.log(response.data);
        return response.data.data; 
    } catch (error) {
        console.error("Error fetching user:", error); 
        throw error; 
    }
}

const logout = async (username:string) =>{
    try {
        const response = await axios.get("https://rektorcupuc.com/api/logout", {
            params: {username : username } 
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching user:", error); 
        throw error; 
    }
}


const register = async (username:string, password:string) =>{
    try {
        const response = await axios.post("https://rektorcupuc.com/api/register", {
            username: username,
            password: password
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching user:", error); 
        throw error; 
    }
}

const updateNameUser = async (email:string, username:string) =>{
    try{
        await axios.put("https://rektorcupuc.com/users/updateUser",{
            email,
            username
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

const deleteAUser = async (id:number) =>{
    try{
        await axios.delete("/users/",{
            data:{
                id
            }
        })
    }catch(error){
        console.error(error)
    }
}


export {getAllTeams, getTeam, register, logout, updateNameUser, updatePasswordUser, deleteAUser}