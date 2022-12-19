import React from 'react'
import './PersonalInfo.css'
export default function PersonalInfo(props) {
  return (
    <div className='personalInfo'>
      <h3>{props.title}</h3>
      <p>{props.info}</p>
    </div>
  )
}
