import React from 'react'
import TopicBox from '../components/TopicBox'

import { Link, useNavigate } from 'react-router-dom'



export default function Home() {
  const Navigate = useNavigate();
  return (
    <div>
        <h1>Home Page</h1>
        <Link to='/About'>Go to About Page</Link><br/>
        <Link to='/Contact'>Go to Contact Page</Link><br/>
        <button onClick={()=> Navigate('/About')}>
            About Page
        </button>

    </div>
  )
}
