import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";

const Nav = () => {
  return (
    <div className='nav_container'> 
    <nav>
    <Link to="/data"><button className='btn-d'>Data</button></Link>
    <h1 className='title'>Survey Form</h1>
    <Link to="/form"> <button className='btn-f'>Form</button></Link>
      </nav>
      </div>
  )
}

export default Nav