import './Login.css'
import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';

const Login = ({Login}) => {
    
    
    const navigate=useNavigate();

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    let flag=true;

    

    const handelsubmit=()=>{
        

        if(!email){
            document.getElementById("emailerr").innerHTML="Email can't be empty*";
            flag=false
        }
        else{
            document.getElementById("emailerr").innerHTML="";
        }
    
        if(!pass){
            document.getElementById("passerr").innerHTML="password can't be empty*";
            flag=false
        }
        else{
            document.getElementById("passerr").innerHTML="";
        }

        if(!flag){
            return false;
        }

        
            
            if(email !== "admin@gmail.com" || pass !== 'admin1234'){

                document.getElementById("notmatch").innerHTML="<b>email or password invalid*<b>";
                flag=false

            } 
            else{
                document.getElementById("notmatch").innerHTML="";
                localStorage.setItem("islogin",true)
                Login();
                navigate("/home")
                return false;
                
            }
        
}

    return (
        <>
        
        <div className='container'>
        
                <h1 className='h1log'>Log In</h1>

                    <div className="emailcon">
                    <input type="email" name="email" value={email} placeholder='Enter your Email...'onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <br/>
                    <small id="emailerr" style={{color:"red",fontWeight:"bold",fontSize:"15px"}}></small>
                    <br/>
                    </div>
                    <div className="passcon">
                    <input type="password" name="password" value={pass} placeholder='Enter your password...'onChange={(e)=>{setPass(e.target.value)}} required/>
                    <br/>
                    <small id="passerr" style={{color:"red",fontWeight:"bold",fontSize:"15px"}}></small>
                    <br/>
                    </div>
                    <button type="submit" onClick={handelsubmit}><b>Log In</b></button>
                    <br/>
                    <small id="notmatch" style={{color:"red",fontWeight:"bold",fontSize:"15px"}}></small>
                    <br/>
                    <br/>
                    
            
        </div>
        </>
    )
}
export default Login
