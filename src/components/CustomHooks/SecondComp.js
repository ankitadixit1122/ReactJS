import React from 'react';
import useCounterHooks from './useCounterHooks'

function SecondComp() {
    const clickedBtnCounter = useCounterHooks(0,"SecoundComp")
    return (
      <div>
      <h1>This is my SecondComp</h1>
      <button onClick ={clickedBtnCounter}>Click Here</button>
      </div>
    )
}

export default SecondComp
