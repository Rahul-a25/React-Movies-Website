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
// import Form from 'react-bootstrap/Form';
const Home = () => {
//     const {SetApiData} =useContext(myContext)
// //    const[ApiData,SetApiData]= useState([])
//    const [search, setSearch] = useState("");
//     useEffect(()=>{
//         if (search === "") {
//             getAllMovies();
//           } else {
//             getSearchedMovies();
//           }
//         }, [search]);
    
//     const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

//     const url='https://api.themoviedb.org/3/movie/popular?api_key=242efbc4712f4c03c1e8c51afa2afe05&language=en-US&page=1';
//     const getAllMovies = async () => {
//         try {
//           const response = await axios.get(url);
    
//           console.log(response.results);
    
//           SetApiData(response.results);
//         } catch (err) {
//           console.log(err.message);
//         }
//       };
//       const getSearchedMovies = async () => {
//         try {
//           const response = await axios.get(SEARCHAPI + search);
//           SetApiData(response.data.results);
//         } catch (err) {
//           console.log(err.message);
//         }
//       };
//       const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
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