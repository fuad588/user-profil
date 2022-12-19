import React from 'react'
import './Email.css'
export default function Email(props) {
  return (
    <div className='email'>
      <h3>{props.title}</h3>
      <p>{props.email}</p>
      </div>
  )
}
