import React, { useContext } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { SiThemoviedatabase } from "react-icons/si";
import Logout from './Logout';
import { myContext } from './Context';

const Navbar = () => {
  const{setlogin }=useContext(myContext)
  const navigate=useNavigate()
  return (
    <div className='nav'>
        <div>
          <h2  className='left'><SiThemoviedatabase style={{fontSize:"60px",color:"rgb(1, 147, 147)"}}/></h2>          
        </div>
        <div className='right'>
            <ul>
                {/* <li><Link to='/home'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Profile'>Profile</Link></li>
                <li><Link to='/Services'>Services</Link></li> */}
                <li  style={{color:"white",border:"2px solid white",borderRadius:"50%"}}> <img style={{borderRadius:"50%"}} width={60} height={60} src="https://scontent.fdel27-3.fna.fbcdn.net/v/t39.30808-6/313399682_1839652096370218_7258087817723408521_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xwHwyCv2l38AX-3eB3m&_nc_ht=scontent.fdel27-3.fna&oh=00_AfC4t0Dm11rh019zI6qIIyLAVfz7fOugdDT9CByOhrigmw&oe=6455EDDB" alt="" />   </li>
                <li  ><Logout /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
