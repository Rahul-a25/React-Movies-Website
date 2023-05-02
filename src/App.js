import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Home from './component/Home'
import { Routes,Route,Navigate, useParams} from 'react-router-dom';
import Allmovies from './component/movies/Allmovies';
import Comedy from './component/movies/Comedy'
import Drama from './component/movies/Drama'
import Action from './component/movies/Action'
import Moviesdetails from './component/movies/Moviesdetails';



function App() {
 let {e}=useParams()
  return (

    <div className="App">
      {/* <Login/> */}
      
        <Routes>
      
        

      <Route path='/' element={ <Home/> }>
      <Route path='' element={<Navigate to='allmovies'/>}/>
      <Route path='allmovies' element={ <Allmovies/> }/>
      <Route path='comedy' element={<> <Comedy/></> }/>
      <Route path='action' element={<> <Action/></> }/>
      <Route path='drama' element={<> <Drama/></> }/>
      </Route>
      
      <Route path="/MoviedetailPage/:id" element={<> <Moviesdetails/></> }/>
    </Routes> 

      
    </div>
  );
}

export default App;

{/* <Route path='/' element={loggedIn ? <Home/> : <Login/>}/> */}
      {/* <Route path='/home' element={<Protect> <Home/></Protect> }/> */}
      {/* <Route path='/Contact' element={ <Protect> <Contact/></Protect> }/> */}
      {/* <Route path='/About' element={<Protect> <About/></Protect> }/> */}


       {/* <Route path='/Profile' element={<Protect> <Profile/></Protect> }/> */}
      {/* <Route path='*' element={<Nopage/>}/> */}