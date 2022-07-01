import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.js'
import { TiDelete } from "react-icons/ti";


function Contect() {
 
  const [user, setUser] = useState([]) 

  useEffect(() => {
    getallrecord()
  }, [])

  const getallrecord = async () => {
    let record = await fetch('http://localhost:7000/show-contact');
    let result = await record.json();
    setUser(result)
  }

  const handeldelete = async (id) => {
    let result = await fetch(`http://localhost:7000/contact/${id}`, {
      method: 'DELETE'
    })
    result = await result.json()
    if (result) {
      getallrecord()
    }

  }
  return (
    <div>
      <Navbar/>
      <>
        <div className='tablesty'>
              <h1>Contact User</h1>
          <table>
            <thead>
              <tr>
                <th>Serial no.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
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
                    <td>{userList.Message}</td>
                    <td>{<TiDelete style={{ fontSize: "25px" }} onClick={() => handeldelete(userList._id)} />}</td>
                  </tr>
                )
                )
              }

            </tbody>
          </table>

        </div>
      </>
    </div>
  )
}

export default Contect
