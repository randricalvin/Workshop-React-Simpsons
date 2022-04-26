import React from 'react'
import simpsons from './simpsons.js'

const SimpsonCard = ({simpson}) => {
  return (
    <div>
        <h4>{simpson.name}</h4>
        <h6>{simpson.id}</h6>
        <p><small>{simpson.normalized_name}</small></p>
        </div>
  )
}


export default SimpsonCard