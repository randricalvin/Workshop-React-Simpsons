import React from 'react'

const SimpsonCard = () => {
    const data = {
        gender: "",
        id: 1,
        name: "Children",
        normalized_name: "children"
    
    }
  return (
    <div>
        <h4>{data.name}</h4>
        <h6>{data.gender}</h6>
        <p><small>{data.normalized_name}</small></p>
        </div>
  )
}


export default SimpsonCard