import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {


  

  return (
    <div>
      <div className="topicBox">
        <span className='text'>my favorite food is {props.food}</span>
        {props.children}
      </div>
    </div>
  )
}
