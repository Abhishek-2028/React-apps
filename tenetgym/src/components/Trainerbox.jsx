import React from 'react'



function Trainerbox(props) {
  return (
    <>
        <div className='card'>
          <div className='imgbox'>
            <img src={props.img} alt='' />
          </div>
          <div className='content'>
            <h2>{props.name}</h2>
            <p>{props.des}</p>
          </div>
        </div>
    </>
  )
}

export default Trainerbox
