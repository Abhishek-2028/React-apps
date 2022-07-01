import React, { useEffect, useState } from 'react'
import "./Home.css";
import Navbar from './Navbar.js'
import { TiDelete } from "react-icons/ti";
// import {FaEdit} from "react-icons/fa"
// import {useNavigate } from 'react-router-dom';



function Home() {

  // let navigate=useNavigate();

  const [user, setUser] = useState([])


  useEffect(() => {
    getallrecord()
  }, [])

  const getallrecord = async () => {
    let record = await fetch('http://localhost:7000/showall');
    let result = await record.json();
    setUser(result)
  }

  // const handelmail = async () => {
  //   await fetch('http://localhost:2200/mail', {
  //     method: 'POST'
  //   })
  // }

  // const handelmailreject = async () => {
  //   await fetch('http://localhost:2200/mailreject', {
  //     method: 'POST'
  //   })


  // }

  const handeldelete = async (id) => {
    let result = await fetch(`http://localhost:7000/${id}`, {
      method: 'DELETE'
    })
    //  navigate('/')
    result = await result.json()
    if (result) {
      getallrecord()
    }

  }

//  let numseq=()=>{
//    const sequence = [...user.keys()]
//    for(let asd of sequence){
     
//      console.log(asd);
//   }

//  }
                        




  return (
    <>
      <Navbar />

      <>
        <div className='tablesty'>
              <h1>Register User</h1>
          <table>
            <thead>
              <tr>
                <th>Serial no.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                {/* <th>Accept</th>
                <th>Reject</th> */}
                <th>Delete</th>


              </tr>
            </thead>
            <tbody>

              {
                user.map((userList,index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td >{userList.Name}</td>
                    <td>{userList.Email}</td>
                    <td>{userList.Phone}</td>
                    {/* <td><button type="button" onClick={handelmail}>Accept</button></td>
                    <td><button type="button" onClick={handelmailreject}>Reject</button></td> */}
                    <td>{<TiDelete style={{ fontSize: "25px" }} onClick={() => handeldelete(userList._id)} />}</td>
                  </tr>
                )
                )
              }

            </tbody>
          </table>

        </div>
      </>
    </>
  )
}

export default Home
