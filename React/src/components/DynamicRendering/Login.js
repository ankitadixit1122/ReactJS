import React, { createContext, useState } from 'react';
import DynamicRender from './DynamicRender';
import HomePage from './HomePage';

const userDetails ={
    username:"ankita",
    password:"12345"
};

createContext()

function Login() {
    const [username, setUserName ] = useState("");
    const [password,setPassword] = useState("");
    const [validation,setValidation] = useState('welcomePage');
    

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(username,password);

        if(username == userDetails.username && password == userDetails.password){
            setValidation("loggedIn")
            //console.log('user logged in'+username)
            console.log(validation)
        }
        else{
            setValidation("invalidUser")
            console.log(validation)

        }

    }

    return (
        <div>
        <form onSubmit ={handleSubmit}>
            <h1>User Information Form</h1>
            {/* <p>
                {validation}
            </p> */}
            <label>UserName</label>
            <input 
            type ="text" 
            value ={username} 
            placeholder ="enter username"
            onChange ={(event)=>setUserName(event.target.value)}/><br></br>
            <br></br>
            
            <label>Password</label>
            <input
            type ="password"
            value ={password} 
            placeholder ="enter password"
            onChange ={(event) => setPassword(event.target.value)}/><br></br>
            <br></br>
            
            <button type ="submit">Login</button>
        </form>
        <DynamicRender  validation = {validation} />
        
    </div>
    )
}

export default Login
