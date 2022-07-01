import React from 'react'
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { userdelete } from '../action/postaction';
// import { useNavigate } from 'react-router';
// import { useraction } from '../action';



function Dashboard({user}) {
  const dispatch = useDispatch()
//   let navigate=useNavigate();
  
   
  

    return (
        <>
        <Navbar/>
            <div className=" card container" style={{ marginTop: "80px",backgroundColor:'aliceblue' ,marginRight: "140px", marginLeft: "140px" }}>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                        {
                            user.map((user,index)=>(
                                    <tbody key={user._id}>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Password}</td>
                                    <td>{user.Phone}</td>
            
                                    <td>{<button type='button' className="btn btn-outline-danger" 
                                    onClick={()=>dispatch(userdelete(user._id))}
                                    >Delete</button>}</td>
                                </tr>
                                    </tbody>
                              )  
                            )

                        }
                        
                       
                </table>
            </div>
        </>
    )
}

export default Dashboard
