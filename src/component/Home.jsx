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
          
            <Link to='allmovies'>All Movies</Link>
            <Link to='action'>Action</Link>
            <Link to='comedy'>Comedy</Link>
            <Link to='drama'>Drama</Link>
          
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


{/* <div className="body"> */}

{/* inputsection */}


{/* <div >
<InputGroup className="mb-3 mt-50">
<Form.Control
onChange={(e) => setSearch(e.target.value)}
placeholder="Search"
aria-label="Search"
aria-describedby="basic-addon1"
className="inputwala"
/>
</InputGroup>
</div>  */}

{/* cardsection */}

{/* <div className="cardwala">


{
   ApiData.map((e)=>(
        <div className="maincard">
        <Card  className='card' style={{  }}>
      <Card.Img variant="top" width={250} height={250} src={IMGPATH + e.poster_path} />
      <Card.Body>
        <Card.Title>{e.original_title}</Card.Title>
        
        <div className="part"><FcRating className='rating'/>
        <Card.Text>{e.vote_average}</Card.Text>  </div> 


      </Card.Body>
    </Card>   
        </div>
    ))
}
</div>

</div> */}