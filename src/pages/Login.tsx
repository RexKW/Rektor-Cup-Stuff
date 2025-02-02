import React, { useState } from 'react'
import { login } from '../apis/UserCRUD'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'

function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
    
const fetchAUser = async () =>{
    try{
        const response = await login(username, password)
        console.log('API Response:', response);
          if(!response.data.token){
            alert("User not found")
          }else{
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('token', response.data.token);
            navigate("/admin/dashboard");
            
          }
      
    }catch(error){
        console.log(error)
    }
    

}

const handleLogin = (e: React.FormEvent) => {
  e.preventDefault(); 
  fetchAUser();
};




  return (
    
    <div className='flex flex-col w-full h-[100vh] justify-center items-center content-center bg-gradient-to-tr  from-[#04385E] from-10% via-[#000919] to-[#380855] to-90%'>
      <p className='batman text-3xl text-white text-center mb-5'>Admin Login</p>
      <div className='bg-blue-900/40 w-[90vw]  backdrop-blur-sm p-5 md:w-[30vw] rounded-[20px]'>
      <p className='w-full text-center text-xl batman text-white font-bold'>Login</p>
      <form onSubmit={handleLogin}>
        <div className='flex flex-col'>
          <label className='text-white'>Username</label>
          <input name="email" className=' rounded-[10px] p-2 focus:bg-pink-200 transition duration-200' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className='flex flex-col mt-4'>
          <label className='text-white'>Password</label>
          <input name="password" type='password' className='rounded-[10px] p-2 focus:bg-pink-200 transition duration-200'value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='flex mt-2 flex-col'>
        <button type="submit" className='bg-teal-300 p-2 justify-center text-white text-center mt-5 rounded-[10px] hover:bg-pink-400 transition duration-300 batman'>Login</button>
        
  
        
        </div>
        </form>
        
      </div>
      
    </div>
  )
}

export default Login
