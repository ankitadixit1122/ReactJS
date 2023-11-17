import React from 'react'

function ResultTable() {
    return (
    <div>
        <table className= 'result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Saving</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((yearData)=>{
            <tr>
                <td>{yearData.}</td>
                <td>yearData.</td>
                <td>345</td>
                <td>677</td>
                <td>789</td>
            </tr>
            })}
        </tbody>
        </table>
    </div>
    )
}

export default ResultTable
