import React from 'react'
import simpsons from './simpsons.js'
import SimpsonCard from './SimpsonCard.jsx'

const SimpsonList = () => {
return (
    <div>
        <h2>SimpsonList</h2>
        <div className='container'>
            <div className='row'>
            {simpsons.map ((simpson, index) => {
    if (index < 10)
        return <SimpsonCard simpson={simpson} />
        return ""
    
})}
            </div>
        </div>
    </div>
)
}

export default SimpsonList;