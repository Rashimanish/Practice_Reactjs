import React from 'react'
import './topicbox.css'

export default function TopicBox() {

  const topic = "My favorite food is burger"
  const item = " and pizza"

  return (
    <div>
      <div className="topicBox">
        <span className='text'>{topic}{item}</span>
      </div>
    </div>
  )
}
