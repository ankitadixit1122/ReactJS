import React, { useMemo, useState } from 'react'

function UseMemo() {
    const[counterOne, setCounterOne]= useState(0);
    const[counterTwo, setCounterTwo]= useState(0);

    const incrementOne = () =>{
        setCounterOne(counterOne+1)
    }

    const incrementTwo = () =>{
        setCounterTwo(counterTwo+1)
    }

    const isEven =useMemo(()=>{
        console.warn("-----------")
        let i =0;
        while(i<200000000) i++
        return counterOne%2===0
    },[counterOne])

    return (
    <div>
        <button onClick ={incrementOne}>Counter One :{counterOne}</button> 
        <h1> {isEven()?"Even":"Odd"}</h1>
        <button onClick={incrementTwo}>counter two :{counterTwo}</button>
    </div>
    )
}

export default UseMemo
