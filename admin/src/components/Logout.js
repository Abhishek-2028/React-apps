import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Logout({logout}) {

    let navigate=useNavigate();

    const handellogout=()=>{
        localStorage.removeItem("islogin")
        logout();
        navigate("/login");
    }

  return (
      <>
      <Navbar/>
    <div>
        <p style={{color:"black",fontSize:"150%",fontWeight:"bold",marginTop:"8rem"}}>If u want to logged out,then clicked here!!</p>
      <button type="button" style={{height:"3rem",width:"7.5rem",fontWeight:"bold",fontSize:"140%",fontFamily:"fort"}} onClick={handellogout}>Log-out</button>
    </div>
    </>
  )
}

export default Logout
