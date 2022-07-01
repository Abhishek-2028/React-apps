import './App.css';
import React from 'react';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
// import Offer from './components/Offer';
import Aboutus from './components/Aboutus';
// import Trainer from './components/Trainer';
import Contect from './components/Contect';
import Register from './components/Register';
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Signin from './components/Signin';
import Appointment from './components/Appointment';





function App() {
  let issignin = localStorage.getItem("islogin");
  console.log(issignin)
  

  return (
   <>
   
 
      {/* <Register/> */}

  <Router>
      <Routes>
      <Route index path="/" element={<Header/>}/>
      <Route path="/feature" element={<Feature/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contact" element={<Contect/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/appoin" element={<Appointment/>}/>

      <Route path="/appoin" element={issignin?<Appointment/>:<Signin/>}/>
      

  
      </Routes>
    </Router>

   </>
  );
}

export default App;
