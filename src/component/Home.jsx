import React, { useEffect, useState } from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { FcRating } from "react-icons/fc";
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext } from 'react';
import { myContext } from './Context';
// import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar';
// import Form from 'react-bootstrap/Form';
const Home = () => {

  return (
    <>
    <Navbar/>

    {/* // navbar section? */}
    <div className='mainHome'>

        {/* sidebarsection */}
        <div className="sidebar">
        {/* <Link to='/toprated'>Top Rated</Link> */}
            <Link to='/allmovies'>All Movies</Link>
            <Link to='/action'>Action</Link>
            <Link to='/comedy'>Comedy</Link>
            <Link to='/drama'>Drama</Link>
          
        </div >

        {/* bodysection */}
       
       <div className="body">
       <Outlet/>
       </div>
        
       
    </div>
    </>
    
  )
}

export default Home

