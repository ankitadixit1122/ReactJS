import React, { useState } from 'react'

const initialUserInput ={
    'current-saving': 10000,
    'yearly-contribution':1200,
    'expected-return' : 7,
    duration: 10

}
    const calculateHandler =(userInput) =>{

        console.log("durat")
    }

function UserInput(props) {

    const [userInput,setUserInput] =useState(initialUserInput)
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("Submitted...")
    }

    const handleReset = () =>{
            setUserInput(initialUserInput)
    }
    const inputChangeHandler =(input,value) =>{
        // console.log('INPUT: '+input )
        // console.log('VALUE: '+value )
        setUserInput((prevInput) =>{
            return {
                ...prevInput,
                [input] :value 
            }
        })
    }

return (
    <div>
        <form onSubmit ={handleSubmit} className='form'>
        <div className="input-group">
        <p>
            <label htmlFor ="current-saving">Current Saving ($)</label>
            <input type ="number" id ="current-saving" 
            onChange={(event)=>{
            inputChangeHandler('current-saving',event.target.value)
            }}
            value={userInput['current-saving']}/>
        </p>
        <p>
            <label htmlFor ="yearly-contribution">Yearly Saving ($)</label>
            <input type ="number" id ="yearly-contribution" 
            onChange={(event)=>{
            inputChangeHandler('yearly-contribution',event.target.value)
            }} 
            value={userInput['yearly-contribution']}/>
        </p>
    </div>
    <div className='input-group'>
        <p>
            <label htmlFor ="expected-return">Expected Interest (%, per year)</label>
            <input type ="number" id ="expected-return"
            onChange={(event)=>{
            inputChangeHandler('expected-return',event.target.value)
            }}
            value={userInput['expected-return']}/>
        </p>
        <p>
            <label htmlFor ="duration">Investment Duration (years)</label>
            <input type ="number" id ="duration"
            onChange={(event)=>{
            inputChangeHandler('duration',event.target.value)
            }}
            value={userInput['duration']}/>
        </p>
        </div>
        <p className='action'>
            <button onClick= {handleReset} type ="reset">Reset</button>
            <button type ="calculate">Calculate</button>
        </p>
        </form>
    </div>
    )
}

export default UserInput
