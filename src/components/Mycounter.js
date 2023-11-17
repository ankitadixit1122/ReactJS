import React from 'react'
import { useState } from 'react';

function Mycounter() {
    const [count,setCount] = useState(0);

    function increaseCount(){
        setCount(count+1)
    }
    function decreaseCount(){
        setCount(count-1)
    }
    return (
    <div>
    <h3>My Counter coponenent</h3>
    <h3>count : {count}</h3>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick ={decreaseCount}>Decrease Count</button>
    </div>
    )
}

export default Mycounter
