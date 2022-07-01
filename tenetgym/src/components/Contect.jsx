import React, { useState } from 'react'
import Navbar from './Navbar'

function Contect() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let flag = true;

  function handelsubmit() {
    
    if(!name){
      document.getElementById("nameid").innerHTML="Enter Your Name*"
      flag=false;
    }else{
      document.getElementById("nameid").innerHTML="";
    }

    if(!email){
      document.getElementById("emailid").innerHTML="Enter Your Emailid*"
      flag=false;
    }else{
      document.getElementById("emailid").innerHTML="";
    }

    if(!message){
      document.getElementById("mesid").innerHTML="Enter Your Message*"
      flag=false;
    }else{
      document.getElementById("mesid").innerHTML="";
    }






    if (!flag) {
      return false; 
  }  


  let headersList = {
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify({
       Name:name,
       Email:email,
       Message:message
   });
   
   fetch("http://localhost:7000/add-contact", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   })
  }

  return (
  
    <>
    <Navbar/>
    <div id="contact" style={{marginTop:"70px"}}>
        <h1 style={{marginBottom:"20px"}}>Contact Us</h1>
        {/* <br/><small style={{ fontSize: "14px", color: "red" }} id="errorid"></small><br/> */}
        <form>
            <input type="text" placeholder="Enter your name..."  onChange={(e)=>{setName(e.target.value)}} required/>
            <br/><small style={{ fontSize: "14px", color: "red" }} id="nameid" ></small><br/>

            <input type="email" placeholder="Enter your email..." onChange={(e)=>{setEmail(e.target.value)}}   required/>
            <br/><small style={{ fontSize: "14px", color: "red" }} id="emailid"></small><br/>

            <textarea placeholder='Write here Your message...'  onChange={(e)=>{setMessage(e.target.value)}} ></textarea>
            <br/><small style={{ fontSize: "14px", color: "red" }} id="mesid"></small><br/>

            <input type='submit' value='send' onClick={handelsubmit}/>
        </form>
    </div>
      
    </>
  )
}

export default Contect
