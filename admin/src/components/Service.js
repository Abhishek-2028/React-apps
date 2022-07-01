import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.js'
import "./Service.css"
import { TiDelete } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";




function Service() {
  const [user, setUser] = useState([])


  useEffect(() => {
    getallrecord()
  }, [])

  const getallrecord = async () => {
    let record = await fetch('http://localhost:7000/show-appoin');
    let result = await record.json();
    setUser(result)
  }

  const handelmail = async () => {
    await fetch('http://localhost:2200/mail', {
      method: 'POST'
    })
  }
  const handelmailreject = async () => {
    await fetch('http://localhost:2200/mailreject', {
      method: 'POST'
    })


  }

  const handeldelete = async (id) => {
    let result = await fetch(`http://localhost:7000/appoin/${id}`, {
      method: 'DELETE'
    })
    //  navigate('/')
    result = await result.json()
    if (result) {
      getallrecord()
    }


  }
  return (
    <>
       <Navbar/>
       <>
        <div className='tablesty'>
              <h1>Appointment Users</h1>
          <table>
            <thead>
              <tr>
                <th>Serial no.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Time</th>
                <th>Accept</th>
                <th>Reject</th>
                <th>Delete</th>


              </tr>
            </thead>
            <tbody>

              {
                user.map((appoinList,index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td >{appoinList.Name}</td>
                    <td>{appoinList.Email}</td>
                    <td>{appoinList.Phone}</td>
                    <td>{appoinList.Gender}</td>
                    <td>{appoinList.Date}</td>
                    <td>{appoinList.Time}</td>
                    <td><TiTick style={{ fontSize: "23px" }}onClick={handelmail}/></td>
                    <td><TiDelete  style={{ fontSize: "23px" }} onClick={handelmailreject}/></td>
                    <td>{<AiFillDelete  style={{ fontSize: "26px" }} onClick={() => handeldelete(appoinList._id)} />}</td>
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

export default Service
