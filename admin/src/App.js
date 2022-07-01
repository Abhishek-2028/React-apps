import { Route,BrowserRouter as Router,Routes,Navigate} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
// import Navbar from './components/Navbar';
// import Register from './components/Register';
import Home from './components/Home'; 
import Contect from './components/Contect';
import Service from './components/Service';
// import Pagenotfound from './components/Pagenotfound';
import { useState,useEffect } from 'react';
import Logout from './components/Logout';
// import Edit from './components/Edit';



export default function App() {

  const [user,setUser]=useState(null);
 
  useEffect(()=>{
    let is_login = localStorage.getItem('islogin');
    is_login ?setUser(true):setUser(false);
  },[])




    
    

  
  return (


    <div className="App">
      
      <Router>
      {/* <Navbar/> */}
        <Routes>
  {user&&(
    <>
          <Route path="/home" element={<Home/>}/>

          <Route path="/reg-appoin" element={<Service/>}/>

          <Route path="/contact" element={<Contect/>}/>
          
          <Route path="/logout" element={<Logout logout={()=>setUser(false)}/>}/>
          </>
  )}
  {!user&&(
    <>
    
          {/* <Route path="/register" element={<Register user={user}/>}/> */}
          <Route path="/login" element={<Login Login={()=>setUser(true)}/>}/>
    </>
  )} 
          
          <Route path='*' element={<Navigate to={user?"/home":"/login"}/>}/>

        </Routes>
      </Router>
      
    </div>
  
  );
}



