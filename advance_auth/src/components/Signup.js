import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';         
import '../App.css';
import { FaUserCircle } from "react-icons/fa";



import { useDispatch } from 'react-redux';
// import postreducer from '../reducer/postreducer';

import { userLoginRequest } from '../action/postaction';




function Signup() {

  let navigate=useNavigate();

  const dispatch = useDispatch();

    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [cpass, setCpass] = useState("")
    const [phone, setPhone] = useState("")
    let flag=true;

    const handelsubmit = () => {
        

        
        
        const validateEmail = (email) => {
            const re= /^([a-zA-Z0-9_.+-])+@+(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return re.test(String(email).toLowerCase());
          };
           
         if(!fname){
              document.getElementById("fnameid").innerHTML="*FullName required";
              flag=false;
          }
          else if(fname.length>8){
              document.getElementById("fnameid").innerHTML="*Name should have 0 to 8 charecters";
              flag=false;
          }
          else if(fname.charAt(0)!==fname.charAt(0).toUpperCase()){
              document.getElementById("fnameid").innerHTML="*First latter of your Name should be in capital letter"
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
            document.getElementById("passid").innerHTML="password does't match*"
            flag=false
        }
        else{
            document.getElementById("cpassid").innerHTML="";
        }
              
          if(!flag){
              return false;
              
            }
            
            dispatch(userLoginRequest(fname,email,phone,pass))
            // toast("SIgnup successfull!!");
           
            navigate("/signin")
            flag=false;
            
        }

    return (
        <>

            


            <div className="card" id="card1" style={{ width: "50%", backgroundSize: "cover", boxShadow: "5px 10px 22px #888888", marginTop: "30px", marginLeft: "28%", height: "615px" }}>
                <span><FaUserCircle style={{ fontSize: "90px", marginLeft: "283px", marginTop: "5px" }} /></span>
                <h1 style={{ textAlign: 'center' }} >Sign up</h1>
                <div className='card' style={{ borderRadius: "18px 18px 7px 7px", height: "470px", marginTop: "1px", backgroundColor: "#edffe7" }}>


                        <div className="form-floating" style={{ marginTop: "25px", marginLeft: "30px", width: "90%" }}>
                            <input type="text" name="fname"  className="form-control" value={fname} onChange={(e) => setFname(e.target.value)} id="floatingInputGrid-name" placeholder="name@example.com" />
                            <label htmlFor="floatingInputGrid" style={{ color: "#8c8c8c" }}>Username</label>
                            <span className='container' style={{color:"red"}} id="fnameid"></span>
                        </div>
                        



                        <div className="form-floating" style={{ marginLeft: "30px", width: "90%" }}>
                            <input type="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInputGrid email" placeholder="name@example.com" />
                            <label htmlFor="floatingInputGrid" style={{ color: "#8c8c8c" }}>Email address</label>
                            <span className='container' style={{color:"red"}} id="emailid"></span>
                        </div>



                        <div className="row g-2" >
                            <div className="col-md">
                                <div className="form-floating" style={{ marginLeft: "30px" }}>
                                    <input type="password" name='pass' className="form-control" value={pass} onChange={(e) => setPass(e.target.value)} id="floatingInputGrid pass" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputGrid" style={{ color: "#8c8c8c" }}>Password</label>
                                    <span className='container' style={{color:"red"}} id="passid"></span>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="form-floating" style={{ marginRight: "34px" }}>
                                    <input type="password" name='cpass' value={cpass} onChange={(e) => setCpass(e.target.value)} className="form-control" id="floatingInputGrid cpass" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputGrid" style={{ color: "#8c8c8c" }}>confirm Password</label>
                                    <span className='container' style={{color:"red"}} id="cpassid"></span>
                                </div>
                            </div>
                        </div>

                        <div className="form-floating" style={{ marginLeft: "30px", width: "90%" }}>
                            <input type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="floatingInputGrid phone" placeholder="name@example.com" />
                            <label htmlFor="floatingInputGrid" style={{ color: "#8c8c8c" }}>Phone number</label>
                            <span className='container' style={{color:"red"}} id="phoneid"></span>
                        </div>

                        <button type="button" style={{  marginLeft: "30px",marginTop:'10px', fontSize: "20px", width: "90%" }} onClick={handelsubmit} className="btn btn-primary">Submit</button>
                        <div className='container mt-2 mx-4'><Link to="/signin" style={{color:'blue',fontWeight:'bold',fontSize:'16px'}}>Already sign up!! Click here</Link></div>

            </div>
        </div>
        </>
    )
}

export default Signup
