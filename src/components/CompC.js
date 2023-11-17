import React, { useContext } from 'react'
import { NameContext } from '../App'

function CompC() {
    const myName = useContext(NameContext)
    return (
    <div>
    <h1>I am Component C</h1>
    <h1>{myName}</h1>
    </div>
    )
}

export default CompC
