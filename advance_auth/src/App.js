import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Forgotp from './components/Forgotp';
import Update from './components/Update';
import { useraction } from './action';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import Pagenf from './components/Pagenf';




function App() {

  const dispatch = useDispatch()
  const userList= useSelector(state=>state.userList)
  const {user,error,loading}= userList || {};

 
  useEffect(()=>{
    dispatch(useraction())
  },[dispatch])
  
  const [auth,setAuth]=useState(null);
 
  useEffect(()=>{
    let is_login = localStorage.getItem('islogin');
    is_login ?setAuth(true):setAuth(false);
  },[])

  
  // logout={()=>setUsers(false)}
 
  return (
    <>

<Router>
  <Routes>
   
  {/* <Route path='/navbar' element={<Navbar />}/>
  <Route path="/dashboard" element={<Dashboard  user={user} loading={loading} error={error}/>}/>
  <Route path="/signin" element={<Signin user={user}/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path='/forgotp' element={<Forgotp user={user}/>}/>
  <Route path='/update' element={<Update/>}/> */}



    {

   auth&&(
   <>
      <Route path='/navbar' element={<Navbar />}/>
      <Route path="/dashboard" element={<Dashboard  user={user} loading={loading} error={error}/>}/>
      <Route path='/logout' element={<Pagenf logout={()=>setAuth(false)} />}/>
   </> 
   )}
      
  {
    !auth&&(
    <>
    
    <Route path="/signin" element={<Signin user={user} login={()=>setAuth(true)} />}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/forgotp' element={<Forgotp user={user}/>}/>
    <Route path='/update' element={<Update/>}/>

     
     </>
  )}  

    
     

    <Route path='*' element={<Navigate to={!auth?"/signin":"/dashboard"}/>}/>
    


  

  </Routes>
</Router>


    </>
  );
}


export default App;
