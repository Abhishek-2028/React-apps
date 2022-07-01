import React from 'react'
import { useNavigate } from 'react-router'


const Pagenf = ({logout}) => {

  let navigate=useNavigate();


const signout=()=>{
  logout();
  localStorage.removeItem("islogin")
  navigate('/signin');

  

}

  return (
    <div className=" card" style={{width:"32%" , border:'1px solid red',boxShadow:"5px 10px 22px #888888",padding:"30px",marginTop:"80px",marginLeft:"35%",height:"220px"}}>

      <h1>Are you sure to log out?</h1>
      <div className="container">
      <button type='button' className='btn btn-success' style={{width:"85px"}} onClick={()=>navigate('/dashboard')}>Back</button>
      <button type='button' className='btn btn-danger' style={{marginLeft:"120px"}} onClick={signout}>Log out</button>

      </div>
      
    </div>
  )
}

export default Pagenf
