import React from 'react'
import Trainerbox from './Trainerbox'
import aboutimg from '../images/1t.png'
import aboutimg1 from '../images/2t.png'
import aboutimg2 from '../images/3t.png'


const Trainer = () => {
  return (
    <>
      <div className="trainer">
      <span id="ut">OUR TRAINERS</span>
      <div className="ab-container">

        <Trainerbox img={aboutimg} name="Jessica Mino" des="Woman Trainer"/>
        <Trainerbox img={aboutimg1} name="Aantone robert" des="Men Trainer"/>
        <Trainerbox img={aboutimg2} name="Paulo Rolac" des="Men Trainer"/>
        
        
      </div>
      </div>
    </>
  )
}

export default Trainer
