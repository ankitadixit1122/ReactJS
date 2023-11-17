import React, { useEffect, useState } from 'react'

function useCounterHooks(intializer,componentName) {
    const[counter,setCounter] = useState(intializer,componentName);

    function resetCounter(){
        setCounter(counter +1)
    }

    useEffect(()=>{
        console.log("The button of :" +componentName+ "is Clicked " +counter+ " times")
    },[counter,componentName])

    return resetCounter;
}

export default useCounterHooks
