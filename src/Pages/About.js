import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function About() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>This is About Page</h1>
      <button onClick={()=> Navigate(-1)}>
            Back
        </button>
    </div>
  )
}
