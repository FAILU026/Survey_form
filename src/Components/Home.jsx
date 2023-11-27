import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
      <h1 >Welcome To Survey Form</h1>
      <Link to="/form"><button className='btn'>Click</button></Link>
    </div>
  )
}

export default Home