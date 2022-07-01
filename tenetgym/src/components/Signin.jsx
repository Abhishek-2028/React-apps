import './Signin.css';
import React, { useEffect,useState } from 'react'

import { Link, useNavigate} from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [user, setUser] = useState([])
    let flag = true;

    // let userList = JSON.parse(localStorage.getItem('userList'));
    useEffect(() => {
        getallrecord()
      }, [])

      const getallrecord = async () => {
        let record = await fetch('http://localhost:7000/showall');
        let result = await record.json();
        setUser(result)
      }
      let navigate = useNavigate();
      
    //   console.log(user)
      

    function handelsignin() {

        const validateEmail = (email) => {
            const re= /^([a-zA-Z0-9_.+-])+@+(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return re.test(String(email).toLowerCase());
          };

        if (!email) {
            document.getElementById("emailid").innerHTML = "Email required*";
            flag = false;
        }
        else if (!validateEmail(email)) {
            document.getElementById("emailid").innerHTML = "Email invalid*";
            flag = false;
        }
        else {
            document.getElementById("emailid").innerHTML = "";
        }

        if (!pass) {
            document.getElementById("passid").innerHTML = "Password required*";
            flag = false;
        }
        else if (pass.length < 6) {
            document.getElementById("passid").innerHTML = "Password should have 6 charecters long*";
            flag = false;
        }
        else {
            document.getElementById("passid").innerHTML = "";
        }

        if(!flag){
            return false;
        }

        

        for(let userList of user){

            if(userList.Email !== email || userList.Password !== pass){
                document.getElementById("passid").innerHTML="<b>email or password invalid*<b>";
                flag=false
            } 
            else{
                document.getElementById("passid").innerHTML="";
                localStorage.setItem("islogin",true)
                navigate("/appoin")
                // navigate("/")
                  
            }
        }
    }

    return (
        <>
        <div className='sign-con'>

        <div className='signin'>
            <h1>Sign in</h1>
            <input type="email" name="email" value={email} placeholder='Email...' onChange={(e) => { setEmail(e.target.value) }} />
            <br /><small style={{ fontSize: "14px", color: "red" }} id="emailid"></small><br />

            <input type="password" name="password" value={pass} placeholder='Password...' onChange={(e) => { setPassword(e.target.value) }} />
            <br /><small style={{ fontSize: "14px", color: "red" }} id="passid"></small><br />

            <button  className="btn1" type="submit" onClick={handelsignin}><b>Submit</b></button>
            <br/><Link to="/register" style={{color:"white"}}>For Sign up!!Click here</Link>
          
    

        </div>
        </div>
        </>
    )
}

export default Signin

