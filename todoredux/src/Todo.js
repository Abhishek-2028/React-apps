import React, { useState } from 'react';
import './App.css';
import { TiPlusOutline } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { additem, deleteitem,deleteall } from "./action/index"

function Todo() {

    const [notes, setNotes] = useState('')
    const [check,setCheck]=useState(false)
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoreducer.list)
    

    const handelcheck=(data,id)=>{
        
        // let check_id=document.getElementById("check_id")
       
                // if(check_id.checked){ 
                // setCheck(true)
                // }
                // else{
                //  setCheck(false)
                // }
                
                // localStorage.setItem("checked",check_id)
                // let ch=localStorage.getItem("checked")
                // console.log(check_id)
                console.log(data)
                setCheck(true)

                    // const newlist=()=>
                    // {
                    //     if(check_id.checked){ 
                    //         setCheck(true)
                    //         }
                    //         else{
                    //          setCheck(false)
                    //         }
                        
                    // }
                    

                    // console.log(newlist())
    }
    
    
    

    return (

        <div className="App ">

            <div className="con-ip">

                <h4>Add Your Notes Here...</h4>

                <div className="input-group flex-nowrap ">

                    <input type="text" className="form-control"
                        placeholder="Write your notes..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        aria-describedby="addon-wrapping" />

                    <button className="input-group-text"
                        id="addon-wrapping"
                        onClick={() => dispatch(additem(notes),
                            setNotes(''))
                        }>
                        <TiPlusOutline
                            style={{ color: " darkviolet" }} />
                    </button>

                </div>

            </div>


            <div className="note-show">
                {
                    list.map((elem) => {
                        return (
                            <div className="input-group flex-nowrap" id="gap-show" key={elem.id}>

                                  <span className="input-group-text" 
                                  id="basic-addon1" onClick={()=>handelcheck(elem,elem.id)}>
                                    <input  type="checkbox" 
                                    value="checked" 
                                    id="check_id" 
                                    unchecked="true" 
                                     >
                                    </input></span>

                                    <sapn>
                                       <li style={{textDecoration: check?"line-through":"none"}} >{elem.data}</li> 
                                    </sapn>

                                {/* <input type="text"
                                    className="form-control"
                                    id={check?"show":"showitem"}
                                    value={elem.data}
                                    aria-describedby="addon-wrapping"
                                    disabled /> */}

                                <button className="input-group-text"
                                    id="addon-wrapping"
                                    onClick={() => dispatch(deleteitem(elem.id))}>

                                        
                                    <MdDeleteOutline
                                        style={{ color: " darkviolet" }} />
                                </button>

                            </div>
                        )
                    })
                }
            </div>

            <div className="del-btn">
                <button className='btn btn-light'onClick={()=>dispatch(deleteall())}>Delete All</button>
            </div>





        </div>
    );
}

export default Todo;
