import React, { useEffect, useRef } from 'react'

function HookUseRef() {
    //const newRef = useRef();
    const fname = useRef();
    const lname = useRef();

    useEffect( () =>{ 
        console.log(fname.current.value); // object
        //console.log(newRef.current.innerHTML);
        console.log(lname.current.value);
        
    }
    )

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("first name"+ " "+fname.current.value+" "+"last name"+" "+lname.current.value)
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter first name</label>
            <input type="text" ref={fname} placeholder ="enter your name" />
            <br></br>
            <label>Enter last Name</label>
            <input type ="text" ref ={lname}placeholder ="enter last name"/>
            <br></br>
            <input type ="submit" value ="submit"/>
            
        </form>

       
    </div>
    )
}
export default HookUseRef
