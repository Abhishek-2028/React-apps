import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux';
import { forgotuser } from '../action/postaction';
import { useNavigate} from 'react-router-dom';  




const Forgotp = ({user}) => {

  const [email, setEmail] = useState("")
  const dispatch = useDispatch();
  let navigate=useNavigate();

  let flag=true;
  
  const handelsubmit=()=>{
      
      
      const validateEmail = (email) => {
          const re= /^([a-zA-Z0-9_.+-])+@+(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return re.test(String(email).toLowerCase());
          };

        if(!email){
              document.getElementById("emailid").innerHTML="<b>Email required*</b>";
              flag=false;
        }




        else if(!validateEmail(email)){
            document.getElementById("emailid").innerHTML="<b>Email invalid*</b>";
            flag=false;
        }
        else{
            document.getElementById("emailid").innerHTML="";
        }
        
        if(!flag){
            return false;
        }

        for(let userlist of user){

            if(userlist.Email !== email ){
                document.getElementById("emailid").innerHTML="<b>No Recode found!!!!*</b>";
                flag=false
            } 
            else{
                document.getElementById("emailid").innerHTML="";
                // localStorage.setItem("islogin",true)
                dispatch(forgotuser(email))
                navigate('/update')
                flag=true
                
               
                  
            }
        }

       
        
        
        
    }
    return (
        <>

        <div className='card ' style={{ width:'30%',backgroundColor:'skyblue', boxShadow:"5px 10px 22px #888888",padding:"30px",marginTop:"70px",marginLeft:"35%",height:"310px"}}>

            <div className="container mt-4">
                <h1>Forgot Password</h1>
            </div>

            {/* <div className="container">
                <h6>Type Your Email Address ,<br/>To Change Your Password </h6>
            </div> */}

            <div className='container inputfiled mt-2'>
                <div className="form-floating" >
                    <input type="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInputGrid email" placeholder="name@example.com" />
                    <label htmlFor="floatingInputGrid" style={{ color: "#8c8c8c" }}>Email address</label>
                    <span className='container' style={{ color: "red" }} id="emailid"></span>
                </div>
            </div>

          

            <div className="container mt-3">
            <button type="button"  onClick={handelsubmit} className="btn btn-primary">Submit</button>
            </div>
        </div>



        </>
    )
}

export default Forgotp
