import React from 'react'
import data from './data.js'

const SimpsonList = () => {
return (
    <div>
        <h2>SimpsonList</h2>
    
    <div>
        <h4>{data[0].name}</h4>
        <h6>{data[0].gender}</h6>
        <p><small>{data[0].normalized_name}</small></p>
        </div>
    </div>
)
}


export default SimpsonList