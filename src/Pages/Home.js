import React from 'react'
import TopicBox from '../components/TopicBox'


export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>
      <TopicBox food="pizza">
        <span>This is the description</span>
      </TopicBox>
      <TopicBox food="cake">
        <button>This is ia button</button>
      </TopicBox>
      <TopicBox food="burger">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic!</p>
      </TopicBox>
      
    </div>
  )
}
