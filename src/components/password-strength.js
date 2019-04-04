import React from 'react'

export default function Strength (props) {
    const { score } = props.password
    let security = 'red'
    if (score === 4 || score === 3) {
        security = 'green'
    }

    return <div style={{color:security, display:'inline'}}>{score}</div>

}

