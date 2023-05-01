import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className="main">
    <div className='loginmain'>
       <div className='leftlogin'>

       </div>
       <div className='rightlogin' >
            <div className="rightwala">
                 <h1 style={{marginRight:"220px",color:"white"}}>Welcome Back,</h1>
                 <p style={{marginRight:"300px",color:"white"}}>Sign to Your Account</p>
                 <label htmlFor="" style={{color:"white",marginLeft:"110px"}}>Email</label>
                 <input type="text" />
                 <br />
                 <label style={{color:"white",marginLeft:"150px"}} htmlFor="">Password</label>
                 <input type="text" />
                <p style={{marginLeft:"300px",color:"white"}}>Forget Password ?</p>
                <button>Sign In</button>
                <p style={{color:"white"}}>Don't have an Account?&nbsp;&nbsp;<span style={{color:"#ff4757"}}>Sign up</span></p>
            </div>
       </div>
    </div>
    </div>
  )
}

export default Login
