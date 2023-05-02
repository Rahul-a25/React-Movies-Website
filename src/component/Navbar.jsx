import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { SiThemoviedatabase } from "react-icons/si";
const Navbar = () => {
  return (
    <div className='nav'>
        <div>
          <h2  className='left'><SiThemoviedatabase style={{fontSize:"60px",color:"#3b99fc"}}/></h2>          
        </div>
        <div className='right'>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Profile'>Profile</Link></li>
                <li><Link to='/Services'>Services</Link></li>
                <li  style={{color:"white",border:"2px solid white",borderRadius:"50%"}}> <img style={{borderRadius:"50%"}} width={70} height={70} src="https://scontent.fdel27-3.fna.fbcdn.net/v/t39.30808-6/313399682_1839652096370218_7258087817723408521_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xwHwyCv2l38AX-3eB3m&_nc_ht=scontent.fdel27-3.fna&oh=00_AfC4t0Dm11rh019zI6qIIyLAVfz7fOugdDT9CByOhrigmw&oe=6455EDDB" alt="" />   </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
