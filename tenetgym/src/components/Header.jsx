import React from 'react'
import Add from './Add';
import Navbar from './Navbar';
import Offer from './Offer';

const Header = () => {
  return (
      <>
      <Navbar/>
    <div id="main">
    <div className='home-con'>
      <div className='text-con'>
        <span id='sp1'>BUILD UP YOUR</span>
        <span id='sp2'><span id='sp21'>BODY</span> SHAPE</span>
        <span id='sp3'>Build Your Body And Fitness With Professinal Touch</span>
      </div>

    </div>
    </div>
    <Offer/>
    <Add/>
    </>
  )
}

export default Header
