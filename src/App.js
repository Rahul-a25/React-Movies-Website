import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Home from './component/Home'
import { Routes,Route,Navigate} from 'react-router-dom';
import Allmovies from './component/movies/Allmovies';
import Comedy from './component/movies/Comedy'
import Drama from './component/movies/Drama'
import Action from './component/movies/Action'



function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        {/* <Login/> */}
        <Routes>
      
      {/* <Route path='/' element={loggedIn ? <Home/> : <Login/>}/> */}
      {/* <Route path='/home' element={<Protect> <Home/></Protect> }/> */}
      {/* <Route path='/Contact' element={ <Protect> <Contact/></Protect> }/> */}
      {/* <Route path='/About' element={<Protect> <About/></Protect> }/> */}
      <Route path='/' element={ <Home/> }>
       
      
      <Route path='' element={<Navigate to='allmovies'/>}/>
      <Route path='allmovies' element={ <Allmovies/> }/>

      <Route path='comedy' element={<> <Comedy/></> }/>
      <Route path='action' element={<> <Action/></> }/>
      <Route path='drama' element={<> <Drama/></> }/>
      {/* <Route path='react' element={<> <React/></> }/> */}
      </Route>
      {/* <Route path='/Profile' element={<Protect> <Profile/></Protect> }/> */}
      {/* <Route path='*' element={<Nopage/>}/> */}

    </Routes>

        {/* <Home/> */}
    </div>
  );
}

export default App;
