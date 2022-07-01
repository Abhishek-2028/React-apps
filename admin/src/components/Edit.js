import React,{useEffect, useState} from 'react'
import './Edit.css'

import {Link} from 'react-router-dom';
// import { isDisabled } from '@testing-library/user-event/dist/utils';



const Edit = () => {
    
    // let navigate= useNavigate();

    let userList = JSON.parse(localStorage.getItem('userList'));

    const[fname,setFname]=useState("");
    const[phone,setPhone]=useState("");
    
    localStorage.setItem("uname",fname)
    localStorage.setItem("uphone",phone)

    let uid=localStorage.getItem("id")
    let funame=localStorage.getItem("uname")
    // let name=localStorage.getItem("name")
    let uphone=localStorage.getItem("uphone")
    
    
    
    
    const handelsubmit=()=>{
        let flag=true;


        // if(!fname){
            
        //     document.getElementById("fnameid").innerHTML="error"
        // }
        
        let a= userList[uid]
        
        if(userList[uid]){
            
            a.fname=funame;
            a.phone=uphone;
            
        }
        
        if(!fname){
            document.getElementById("fnameid").innerHTML="name is required";
            flag=false;
            return funame;
        }else{
            document.getElementById("fnameid").innerHTML="";
        }


        if(!phone){
            document.getElementById("phoneid").innerHTML="phone number is required";
            flag=false;
            
        }else if(phone.length < 10)
        {
          document.getElementById("phoneid").innerHTML="phone number should have 10 number";
          flag=false;
        }else{
            document.getElementById("phoneid").innerHTML="";
        }

        if(!flag){
            return false;
        }

         localStorage.setItem("userList",JSON.stringify(userList))

         localStorage.removeItem("number")
         localStorage.removeItem("uname")
         localStorage.removeItem("name")
         localStorage.removeItem("id")
         localStorage.removeItem("uphone")

    }
    
    useEffect(()=>{
        setFname((localStorage.getItem("name")));
        setPhone((localStorage.getItem("number")));
    },[])

    
    
    
    
    
    return (
        <>
    <div className='container'>
        <h1>UPDATE</h1>
    <input type="text" name="fname" minLength={3}  value={fname} placeholder='Enter your Full Name...'   onChange={(e)=>{setFname(e.target.value);}}/>
                <br/>
                <small id="fnameid" style={{color:"red",fontWeight:"bold"}}></small>
                <br/>
    <input type="phone" name="phone" value={phone} placeholder='Enter your Phone no....' onChange={(e)=>{setPhone(e.target.value)}}/>
                <br/>
                <small id="phoneid" style={{color:"red",fontWeight:"bold"}}></small>
                <br/>
                        
    <Link to={!fname||!phone?"/edit":"/home"}>
            <button type="submit"  onClick={handelsubmit} ><b>Update</b></button>
    </Link>
            {/* <button type="button" onClick={()=>navigate(!funame||!uphone?"/edit":"/home")}>Home</button> */}
    </div>
    </>
  )
}

export default Edit

