import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { plus,minus } from './action/index'
import "./App.css"


const App = () => {

  const mystate=useSelector((state)=>state.AlternateNumber);
  const dispatch=useDispatch();

  return (
    <div className='App'>

          <button type="button" id="btn1" className="btn btn-dark" onClick={()=>dispatch(plus())}>+</button><br/>

          <input className='inp' value={mystate } disabled></input><br/>

          <button type="button" id="btn2" className="btn btn-dark" onClick={()=>dispatch(minus())} >-</button>
    </div>
  )
}

export default App
