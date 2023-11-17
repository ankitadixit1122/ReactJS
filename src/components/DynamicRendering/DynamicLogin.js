import React,{useReducer} from 'react'
import LoginRender from './LoginRender';
import styled from 'styled-components';

const initialState ={
    username:"",
    password :"",
    validation:"error"
} 

const reducefn =(state,action) =>{
    console.log(state,action);
    switch(action.type){
        case'SUCCESS':
            return{
                ...state,
                username:"",
                password:"",
                validation:'loggedIn'
            };
            case'ERROR':
            return{
                ...state,
                username:"",
                password:"",
                validation:'error'
            };
            case'USERNAME':
            return{
                ...state,
                username:action.value,
            };
            case'PASSWORD':
            return{
                ...state,
                password:action.value,
            };
            default:
                return state;
    }
}

// STYLE COMPONENTS
const StyleButton = styled.button`
background-color: green;
color: white;
font-size :30px
`;

function DynamicLogin() {
    const[updateState, dispatch] = useReducer(reducefn ,initialState);

    const handleSubmit =(event) =>{
        event.preventDefault();
        if(updateState.username == "ankita" && updateState.password == '12345'){
            //console.log(updateState.)
            dispatch({type:'SUCCESS'})
        }
        else{
            
            dispatch({type:'ERROR'})
            
        }

    }
    return(
    <div>
        <form onSubmit ={handleSubmit}>
            <h1 style={{backgroundColor:'yellow'}}>User Information Form</h1>
            <p>
                {updateState.validation}
            </p> 
            <label>UserName</label>
            <input 
            type ="text" 
            value ={updateState.username} 
            placeholder ="enter username"
            onChange ={(event)=>dispatch({type:'USERNAME',value:event.target.value})}/><br></br>
            <br></br>
            
            <label>Password</label>
            <input
            type ="password"
            value ={updateState.password} 
            placeholder ="enter password"
            onChange ={(event) => dispatch({type:'PASSWORD',value:event.target.value})}/><br></br>
            <br></br>
            
            <StyleButton type ="submit">Login</StyleButton>
        </form>
        <LoginRender validation = {updateState.validation} />
    </div>
    )
}

export default DynamicLogin
