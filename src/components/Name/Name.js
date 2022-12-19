import React from 'react'
import './Name.css'
export default function Name(props) {
  return (
    <div className='name'>
      <h3>{props.title}</h3>
      <p>{props.name}</p>
      </div>
  )
}
