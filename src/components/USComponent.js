// updating the exixting array

import React, { useState } from 'react'

function USComponent() {
    let num =[11,22,33,44];
    const[numbers,setNumbers]= useState(num);
    const changeArr = ()=>{
        setNumbers(previousState =>{
            return[
                ...previousState,//77,88,99,100

            ]
        })
    }
  return (
    <div>
      <ul>
        {numbers.map((n,i)=><li key={i}>{n}</li>)}
      </ul>
      <button onClick={changeArr}>change array</button>
    </div>
  )
}

export default USComponent




/* useState with Array

import React, { useState } from 'react'

function USComponent() {
    let num =[11,22,33,44];
    const[numbers,setNumbers]= useState(num);
    const changeArr = ()=>{
        setNumbers([55,66,77,88])
    }
  return (
    <div>
      <ul>
        {numbers.map((n,i)=><li key={i}>{n}</li>)}
      </ul>
      <button onClick={changeArr}>change array</button>
    </div>
  )
}

export default USComponent

*/



//UPDATING SINGLE VALUE OF AN OBJECT
/*
import React, { useState } from 'react'

function USComponent() {
    const obj ={
        name:"ankita",
        age:32,
        isYoung:true
    }
    const[person,setPerson]=useState(obj);
    const handleChange = ()=>{
        setPerson(previousState =>{
            return{
                ...previousState,
                name:'nia'
            }
        }
        );
}
    return (
    <div>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        //<h1>{person.isYoung}</h1>   //to display this data on page convert it intostring using .tostring
        <h1>{person.isYoung.toString()}</h1>
        <button onClick={handleChange}>submit</button>
    </div>
   )
}

export default USComponent

*/