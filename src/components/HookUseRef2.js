import React, { useEffect, useRef, useState } from 'react'

function HookUseRef2() {
    const [inputVal, setInputVal] = useState("");
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current +1;
    })

    return (
    <div>
        <label>Enter Name</label>
        <input type ="text"
        value ={inputVal}
        onChange ={(e) => setInputVal(e.target.value)} />
        <h2>Render Count :{count.current}</h2>
        <h3>Data: {inputVal}</h3>
        
    </div>
    )
}

export default HookUseRef2
