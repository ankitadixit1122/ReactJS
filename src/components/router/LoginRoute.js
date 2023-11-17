import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, {createGlobalStyle, css} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
    height: 100%
    }
body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    height: 100%;
    margin: 0;
    color: #555;
}
`;
const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;
const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`;
const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles}
`;
const StyledButton = styled.button`
    display: block;
    background-color: #f7797d;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`;
const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;
`;

const userDetails ={
    username:"ankita",
    password:"12345"
};


function LoginRoute() {
    const [username, setUserName ] = useState("");
    const [password,setPassword] = useState("");
    const [validation,setValidation] = useState('welcomePage');

    const navigate = useNavigate();
    
    
    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(username,password);

        if(username == userDetails.username && password == userDetails.password){
            navigate('/Main');
           
        }
        else{
            navigate('/Error');
        }

    }

    return (
        <div>
        <GlobalStyle />
        <StyledFormWrapper>
        <StyledForm onSubmit ={handleSubmit}>
            <h2>User Information Form</h2>
            {/* <p>
                {validation}
            </p> */}
            <label htmlFor="name">Username</label>
            <StyledInput 
            type ="text" 
            value ={username} 
            placeholder ="enter username"
            onChange ={(event)=>setUserName(event.target.value)}/>
            
            <label htmlFor="password">Password</label>
            <StyledInput
            type ="password"
            value ={password} 
            placeholder ="enter password"
            onChange ={(event) => setPassword(event.target.value)}/>

            <StyledError>
            <p>username:ankita & password:12345</p>
            </StyledError>
            
            <StyledButton type ="submit">Login</StyledButton>
        </StyledForm>
        {/* <DynamicRender  validation = {validation} /> */}
        </StyledFormWrapper>
        </div>
    )

}

export default LoginRoute
