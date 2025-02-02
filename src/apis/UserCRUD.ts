import axios from "axios"


const login = async (username :string, password :string) =>{
    try {
        const response = await axios.post("/api/login", {
             username: username, password: password
        },
        {
            headers: { "Content-Type": "application/json" }
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching user:", error); 
        throw error; 
    }
}

const logout = async (username:string, token:string) =>{
    try {
        const response = await axios.post("/api/logout", {
            username: username
       },
       {
           headers: { "Content-Type": "application/json", "X-API-TOKEN": token}
       });
        return response.data; 
    } catch (error) {
        console.error("Error fetching user:", error); 
        throw error; 
    }
}


const register = async (username:string, password:string) =>{
    try {
        const response = await axios.post("/api/register", {
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
        await axios.put("/users/updateUser",{
            email,
            username
        })
    }catch(error){
        console.error(error)
    }
    
}

const updatePasswordUser = async (email: string, password: string) =>{
    try{
        await axios.put("/users/updatePass",{
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


export {login, register, logout, updateNameUser, updatePasswordUser, deleteAUser}