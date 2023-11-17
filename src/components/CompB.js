import React, { useCallback, useContext } from 'react'
import CompC from './CompC'
import { Lastname } from '../App'

function CompB() {
    const lname = useContext(Lastname)
    return (
    <div>
    <CompC/>
    <h1>{lname}</h1>
    </div>
    )
}

export default CompB
