import './Register.css'
import React,{useState} from 'react'
// import Navbar from './Navbar'
import { Link,useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom';

function Register() {
    const[fname,setFname]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[pass,setPassword]=useState("");
    const[cpass,setCpass]=useState("");
    let flag=true;

    const navigate=useNavigate();


    const handelsubmit=()=>{
        
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
       

        const user={
            id:new Date().getTime().toString().slice(9,13),
            fname:fname,
            email:email,
            phone:phone,
            password:pass
        }

    
        let userList = JSON.parse(localStorage.getItem('userList'));
        if (userList && userList.length > 0) {
            userList.push(user)
            localStorage.setItem('userList', JSON.stringify(userList));
        } 
        else {        
            localStorage.setItem('userList', JSON.stringify([user]));
        }

        navigate("/login");
        flag=false;
    }


    const validateEmail = (email) => {
        const re= /^([a-zA-Z0-9_.+-])+@+(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return re.test(String(email).toLowerCase());
      };


    return (
        
        <>
        {/* <Navbar/> */}
        <div className='register'>
                
                <h1>Registeration</h1>
                <input type="text" name="fname" value={fname} placeholder='Enter your Full Name...' onChange={(e)=>{setFname(e.target.value)}}/>
                <br/>
                <small id="fnameid" style={{color:"red",fontWeight:"bold"}}></small>
                <br/>
                <input type="email" name="email" value={email} placeholder='Enter your Email...' onChange={(e)=>{setEmail(e.target.value)}}/>
                <br/>
                <small id="emailid" style={{color:"red",fontWeight:"bold"}}></small>
                <br/>
                <input type="phone" name="phone" value={phone} placeholder='Enter your Phone no....' onChange={(e)=>{setPhone(e.target.value)}}/>
                <br/>
                <small id="phoneid" style={{color:"red",fontWeight:"bold"}}></small>
                <br/>
                <input type="password" name="password" value={pass} placeholder='Enter the Password...' onChange={(e)=>{setPassword(e.target.value)}}/>
                <br/>
                <small id="passid" style={{color:"red",fontWeight:"bold"}}></small>
                <br/>
                <input type="password" name="cpassword" value={cpass} placeholder='Confirm password...' onChange={(e)=>{setCpass(e.target.value)}}/>
                <br/>
                <small id="cpassid" style={{color:"red",fontWeight:"bold"}}></small>
                <br/>
                
                <button type="submit" onClick={handelsubmit} ><b>Submit</b></button><br></br><br></br>
                <Link to="/Login" style={{color:"white"}}> are you already register? log in</Link>
        </div>
        </>
    )
}

export default Register
