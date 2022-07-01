import React from 'react'
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';
import Navbar from './Navbar';


function Feature() {
  return (
    <>
    <Navbar/>
     <div id='features'>
         <h1>FEATURE</h1>
         <div className='a-container'>
              <Featurebox image={fimage1} title="WeightLifting" description="You need to have great body awareness, mobility, strength."/> 
              <Featurebox image={fimage2} title="Specific Muscle" description="Muscles are essential for movement."/> 
              <Featurebox image={fimage3} title="Flex Your Muscle" description="Contract one's muscles, especially to demonstrate their size and strength"/> 
              <Featurebox image={fimage4} title="Cardio Exercise" description=" The large muscles of your body in movement over a sustained period of time"/> 
         </div>

     </div> 
    </>
  )
}

export default Feature 
