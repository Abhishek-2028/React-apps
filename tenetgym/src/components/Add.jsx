import './Add.css';
import React from 'react'
import { FaFacebook,FaTwitter,FaGooglePlusG,FaYoutube,FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { AiFillGooglePlusCircle } from "react-icons/ai";
// import { SiYoutubemusic } from "react-icons/si";
// import { TiSocialLinkedinCircular } from "react-icons/ti";


const Add = () => {
  return (
    <>
       <div className="footer">
         
         <div className="foot">
         <span id='f'>Tenet Gym</span>
         <p> we are always exicted
            to help you achieve your health and fitness goals with our expert professional
            trainers.As a matter of fact,we can support you in your fitness journey.</p>
         </div>

         <div className="foot-links">
         <Link to="#"><FaFacebook style={{fontSize:"25px",marginRight:"20px",color:"blue"}}/></Link>

         <Link to="#"><FaTwitter style={{fontSize:"20px",marginRight:"20px",color:'skyblue'}}/></Link>

         <Link to="#"><FaGooglePlusG style={{fontSize:"25px",marginRight:"20px",color:'silver'}}/></Link>

         <Link to="#"><FaYoutube style={{fontSize:"25px",marginRight:"20px",color:'red'}}/></Link>

         <Link to="#"><FaLinkedinIn style={{fontSize:"25px",marginRight:"20px",color:'dodgerblue'}}/></Link>

         </div>
       </div>
         <div className="foo-btm">
            Copyright © Abhishek Kolaskar
          </div>



       
    </>
  )
}

export default Add
