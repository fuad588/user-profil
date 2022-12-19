import React from 'react'
import './Address.css'
export default function Address(props) {
  return (
    <div className='address'>
      <h3>{props.title}</h3>
      <p>{props.address}</p>
    </div>
  )
}
