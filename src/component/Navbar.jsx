import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
        <div>
          <h2 className='left'>Rahul Arora</h2>          
        </div>
        <div className='right'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Profile'>Profile</Link></li>
                <li><Link to='/Services'>Services</Link></li>
                <li><Link to='/Profile'>Profile</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
