import React from 'react'
import useCounterHooks from './useCounterHooks'

function FirstComp() {
    const clickedBtnCounter = useCounterHooks(0,"FirstComp")
  return (
    <div>
    <h1>This is my FirstComp</h1>
    <button onClick ={clickedBtnCounter}>Click Here</button>
    </div>
  )
}

export default FirstComp
