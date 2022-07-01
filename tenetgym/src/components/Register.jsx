import './Register.css';
import React,{useState}from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';         





function Register() {

  let navigate=useNavigate();

    
    const[fname,setFname]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[pass,setPassword]=useState("");
    const[cpass,setCpass]=useState("");
    let flag=true;

    

   function handelsubmit(){

    const validateEmail = (email) => {
      const re= /^([a-zA-Z0-9_.+-])+@+(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return re.test(String(email).toLowerCase());
    };

    if(!fname){
      document.getElementById("fnameid").innerHTML="FullName required*";
      flag=false;
  }
  else if(fname.length>8){
      document.getElementById("fnameid").innerHTML="Name should have 0 to 8 charecters *";
      flag=false;
  }
  else if(fname.charAt(0)!==fname.charAt(0).toUpperCase()){
      document.getElementById("fnameid").innerHTML="first latter of your Name should be in capital letter*"
      flag=false;
  }
  else{
      document.getElementById("fnameid").innerHTML="";
      
  }

  if(!email){
      document.getElementById("emailid").innerHTML="Email required*";
      flag=false;
  }
  else if(!validateEmail(email)){
      document.getElementById("emailid").innerHTML="Email invalid*";
      flag=false;
  }
  else{
      document.getElementById("emailid").innerHTML="";
  }

  if(!pass){
      document.getElementById("passid").innerHTML="Password required*";
      flag=false;
  }
  else if(pass.length<6){
      document.getElementById("passid").innerHTML="Password should have 6 charecters long*";
      flag=false;
  }
  else{
      document.getElementById("passid").innerHTML="";
  }

  if(!phone){
      document.getElementById("phoneid").innerHTML="Phone number required*";
      flag=false;
  }
  else if(phone.length<10||phone.length>10){
      document.getElementById("phoneid").innerHTML="Phone number should have 10 characters*";
      flag=false;
  }
  else{
      document.getElementById("phoneid").innerHTML="";
  }

  if(!cpass){
      document.getElementById("cpassid").innerHTML="confirm password required*"
      flag=false
  }
  else if(cpass!==pass){
      document.getElementById("cpassid").innerHTML="password does't match*"
      flag=false
  }
  else{
      document.getElementById("cpassid").innerHTML="";
  }

  if(!flag){
      return false;
  }

  let headersList = {
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify({
       Name:fname,
       Email:email,
       Phone:phone,
       Password:pass
   });
   
   fetch("http://localhost:7000/add", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   })

   navigate("/signin")
   flag=true;
  
}

 




  return (
    <div className='div-con1'>
          <div className='register-con'>
                
                <h1>Sign Up</h1>
    
                <input type="text" name="fname" value={fname} placeholder='Name...' onChange={(e)=>{setFname(e.target.value)}}/>
                <br/><small style={{fontSize:"14px",color:"red"}} id="fnameid"></small><br/>

                <input type="email" name="email" value={email} placeholder='Email...' onChange={(e)=>{setEmail(e.target.value)}}/>
                <br/><small style={{fontSize:"14px",color:"red"}} id="emailid"></small><br />

                <input type="phone" name="phone" value={phone} placeholder='Phone no....' onChange={(e)=>{setPhone(e.target.value)}}/>
                <br /><small style={{fontSize:"14px",color:"red"}} id="phoneid"></small><br />

                <input type="password" name="password" value={pass} placeholder='Password...' onChange={(e)=>{setPassword(e.target.value)}}/>
                <br /><small style={{fontSize:"14px",color:"red"}} id="passid"></small><br />

                <input type="password" name="cpassword" value={cpass} placeholder='Confirm password...' onChange={(e)=>{setCpass(e.target.value)}}/>
                <br /><small style={{fontSize:"14px",color:"red"}} id="cpassid"></small><br />

                <button  className="btn1" type="submit" onClick={handelsubmit}><b>Submit</b></button>
                <br/><Link to="/signin" style={{color:"white"}}> Already Sign up!! click here</Link>    
    
            </div>
    </div>
  )
}

export default Register
