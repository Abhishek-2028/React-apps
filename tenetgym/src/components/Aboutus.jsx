import React from 'react'
// import Trainer from './components/Trainer';
import Trainerbox from './Trainerbox'
import aboutimg from '../images/1t.png'
import aboutimg1 from '../images/2t.png'
import aboutimg2 from '../images/3t.png'
import Navbar from './Navbar'



const Aboutus = () => {
  return (
    <>
    <Navbar/>
      <div id='ab'>

        <div className="ab-text">
          <h1>ABOUT US</h1>
          <p id="p-t"><i>Tenet gym</i>  is trusted name for fitness club in the city. we are always exicted
            to help you achieve your health and fitness goals with our expert professional
            trainers. As a matter of fact,we can support you in your fitness journey. furthermore
            we provide quality equipment to our members,personal training,diet charts,workout
            schedules,dietary supplements and much more.</p>
          <p style={{ fontSize: "20px" }}>Meet our team who help you to be stronger:</p>

          <div className="trainer">
            <span id="ut">OUR TRAINERS</span>
            <div className="ab-container">

              <Trainerbox img={aboutimg} name="Jessica Mino" des="Woman Trainer" />
              <Trainerbox img={aboutimg1} name="Aantone robert" des="Men Trainer" />
              <Trainerbox img={aboutimg2} name="Paulo Rolac" des="Men Trainer" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Aboutus
