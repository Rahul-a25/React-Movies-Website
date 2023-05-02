import React, { useContext, useEffect } from 'react'
import './login.css'
import  { useRef } from "react";
import  Home from "./Home"
import { useNavigate } from 'react-router-dom';
import { myContext } from './Context';

const Login = () => {
  const navigate=useNavigate();
  const {SetEmail,SetPassword}=useContext(myContext)
  const email=useRef()
const password=useRef()
const getEmail=localStorage.getItem("emailData")
const getPassword=localStorage.getItem("passwordData")
const handleLogin=()=>{
    if(email.current.value==="rahularora@gmail.com"&&password.current.value==="12345678"){
        localStorage.setItem("emailData","rahularora@gmail.com")
        localStorage.setItem("passwordData","12345678")
    }
    else{
      alert("Wrong Email & Password")
    }
}
  return (
    <>
    { 
      getEmail&&getPassword?
        navigate(<Home/>)  :
    <div className="main">
    <div className='loginmain'>
       <div className='leftlogin'>

       </div>
       <div className='rightlogin' >
            <div className="rightwala">
                 <h1 style={{marginRight:"220px",color:"white"}}>Welcome Back,</h1>
                 <p style={{marginRight:"300px",color:"white"}}>Sign to Your Account</p>
                 <label htmlFor="" style={{color:"white",marginLeft:"110px"}}>Email</label>
                 <input ref={email}  type="text" />
                 <br />
                 <label style={{color:"white",marginLeft:"150px"}} htmlFor="">Password</label>
                 <input ref={password} type="password" />
                <p style={{marginLeft:"300px",color:"white"}}>Forget Password ?</p>
                <button onClick={handleLogin} >Sign In</button>
                <p style={{color:"white"}}>Don't have an Account?&nbsp;&nbsp;<span style={{color:"#ff4757"}}>Sign up</span></p>
            </div>
       </div>
    </div>
    </div>
    }
    </>
  )
}

export default Login
