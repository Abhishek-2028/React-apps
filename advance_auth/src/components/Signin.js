import React, { useState } from 'react'
import { FaUser,FaKey } from "react-icons/fa";
import { BsShieldLock} from "react-icons/bs";
import { useNavigate,Link } from 'react-router-dom';     
  


function Signin({user,login}) {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    let flag=true;

  let navigate=useNavigate();

//   useEffect(()=>{
    //   navigate('/signin')
//   })

    

    const handelsignin=()=>{
        

        const validateEmail = (email) => {
            const re= /^([a-zA-Z0-9_.+-])+@+(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return re.test(String(email).toLowerCase());
          };

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
        if(!flag){
            return false;
          }


          for(let userlist of user){

            if(userlist.Email !== email || userlist.Password !== pass){
                document.getElementById("epassid").innerHTML="<b>email or password invalid*</b>";
                flag=false
            } 
            else{
                document.getElementById("epassid").innerHTML="";
                localStorage.setItem("islogin",true)
                login();
                navigate("/dashboard")
                flag=true
                
               
                  
            }
        }

          
          
          
          
    }

    return (
        <>
             
        
            <div className=" card" style={{width:"32%" ,backgroundColor:'skyblue', boxShadow:"5px 10px 22px #888888",padding:"30px",marginTop:"70px",marginLeft:"35%",height:"420px"}}>
                <span><BsShieldLock className='container' style={{fontSize:"48px"}}/></span>
                <h1 style={{textAlign:'center'}} >Sign in</h1>
                <div className='container' style={{textAlign:'center'}}>
                <span style={{color:"red"}} id="epassid"><br/></span>
                </div>

                <div className="input-group mb-3" >
                    <span className="input-group-text" id="basic-addon1" ><FaUser/></span>
                    <input type="text" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                    <br/><span className='container' style={{color:"red"}} id="emailid"></span><br/>
                    
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" ><FaKey/></span>
                    <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                    <br/><span className='container' style={{color:"red"}} id="passid"></span><br/>
                </div>

                <button type="button" onClick={handelsignin} className="btn btn-primary">Submit</button>
                <div className="row g-2 my-4" >
                    <div className="col-md">
                        <Link to="/forgotp" style={{marginLeft:"0px",color:'blue',fontWeight:'bold',fontSize:'16px'}}>forgot password?</Link>
                    </div>
                    <div className="col-md ">
                       <Link to="/signup" style={{marginLeft:"60px",color:'blue',fontWeight:'bold',fontSize:'16px'}}>Create account?</Link> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin
