import React, { useEffect, useState } from 'react'

function UseEffectFunction() {
    const [counter,setCounter]=useState(0);
    const [name,setName]=useState('ankita');


    useEffect( () => {
        console.log("This is Effect =" +counter)  // doing mount work
    },[counter,name] ) // counter dependency // we can pass array of values in dependeny
    
    return (
    <div>
    <h1>{counter}</h1>
    <h1>{name}</h1>
    <button onClick={()=>setCounter(counter+1)}>SubmitCount</button>
    <button onClick={()=>setName("sumit")}>SubmitName</button>
    </div>
    )
}

export default UseEffectFunction

/* // DOING MOUNT AND RENDER ONE TIME

import React, { useEffect, useState } from 'react'

function UseEffectFunction() {
    const [counter,setCounter]=useState(0);

    useEffect( () => {
        console.log("This is Effect =" +counter)  // doing mount work
    },[] )
    return (
    <div>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Submit</button>
    </div>
    )
}

export default UseEffectFunction

*/
