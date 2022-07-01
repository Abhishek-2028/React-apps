import React from 'react'
import { useNavigate } from 'react-router'

function Navbar() {
let navigate=useNavigate();

const handelogout=()=>{
 
  navigate('/logout');

}



    return (
        <>

<nav className="navbar navbar-expand-lg bg-light" style={{boxShadow:"3px 0.5px 7px #888888"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/dashboard" aria-disabled>Dashboard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <button className="btn btn-outline-danger" onClick={handelogout} type="button">Log out</button>

  </div>
</nav>




        </>
    )
}

export default Navbar

