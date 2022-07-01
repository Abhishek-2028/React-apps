import React from 'react'

const Featurebox = (props) => {
  return (
    <>
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''></img>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
      
    </>
  )
}

export default Featurebox
