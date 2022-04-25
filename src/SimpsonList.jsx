import React from 'react'
import simpsons from './simpsons.js'
import SimpsonCard from './SimpsonCard.jsx'

const SimpsonList = () => {
return (
    <div>
        <h2>SimpsonList</h2>
        <SimpsonCard simpson={simpsons[0]}/>
    </div>
)
}


export default SimpsonList