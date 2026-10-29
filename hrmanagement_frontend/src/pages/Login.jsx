import {useState} from 'react';

import { useNavigate } from 'react-router-dom';

function Login()
{
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let navigate=useNavigate();
    let handleLogin=async(event)=>{
      event.preventDefault();
      console.log(email);
      console.log(password);
      if(email=="admin@gmail.com" && password=="admin"){
        navigate("/adminhome");
      }else{
        
      }
    }
    return(
        <div>
         <form onSubmit={handleLogin}>
    <input type="email" value={email} 
      onChange={(event)=>setEmail(event.target.value)}
    placeholder="Enter your emailid"></input><br/>
    
    <input type="password" value={password}
     onChange={(event)=>setPassword(event.target.value)}
     placeholder="Enter your password"></input><br/>
    <button type="submit">Login</button>
         </form>
        </div>
    )
}
export default Login
