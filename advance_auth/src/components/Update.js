import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';     
import { updateuser } from '../action/postaction';




const Update = () => {

    // const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    let flag = true;
  const data= useSelector(state=>state.data.items[0]||[])

    let navigate=useNavigate();

    const dispatch = useDispatch()
    
    
    const handelupdate = () => {
        console.log(data)



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

          dispatch(updateuser(pass,data._id))
    }

    return (
        <>
            <div className="card" style={{ width: "32%", backgroundColor: 'skyblue', boxShadow: "5px 10px 22px #888888", padding: "30px", marginTop: "70px", marginLeft: "35%", height: "350px" }}>

                    <h1>Update</h1>
                    {/* {
                        data.map((data)=>(

                        ))

                    } */}
                <div className="form-floating" style={{ marginTop:'10px', width: "90%" }}>
                    <input type="email" name="email" className="form-control" value={data.Email||""}  id="floatingInputGrid email" placeholder="name@example.com" disabled/>
                    <label htmlFor="floatingInputGrid" style={{ color: "#8c8c8c" }}>Email address</label><br/>
                    {/* <span className='container' style={{ color: "red" }} id="emailid"></span> */}
                </div>


                
                    <div className="form-floating" style={{ marginTop:'10px',width: "90%" }}>
                        <input type="text" name='pass' className="form-control" value={pass} onChange={(e) => setPass(e.target.value)} id="floatingInputGrid pass" placeholder="name@example.com" />
                        <label htmlFor="floatingInputGrid" style={{ color: "#8c8c8c" }}>Password</label>
                        <span className='container' style={{ color: "red" }} id="passid"></span>
                    
                </div>

                <div className="col-md">
                <button type="button"  style={{ marginTop:'10px'}} onClick={handelupdate} className="btn btn-primary">Update</button>
                <button type="button"  style={{ marginLeft:'30px',marginTop:'10px'}} onClick={()=>navigate('/signin')} className="btn btn-primary">Home</button>
                </div>

            </div>
        </>
    )
}

export default Update

// onChange={(e) => setEmail(e.target.value)}