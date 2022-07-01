import { ADD_USER, DELETE_USER,FORGOT_USER,UPDATE_USER } from "../reducer/postreducer";
import axios from 'axios'
import { useraction } from '../action';


export const userLoginRequest =  (Name,Email,Phone,Password) => dispatch => {
     axios.post(`http://localhost:5555/add`,{
        Name,
        Email,
        Phone,
        Password
    }
     )
    .then( (userdata)=>
        dispatch({
            type: ADD_USER,
            payload: userdata
        }),
        dispatch(useraction())
        
        )
        .catch( error => {
            console.log(error);
        });
};

export const userdelete=(id)=>async(dispatch)=>{
    axios.delete(`http://localhost:5555/${id}`)
    .then((userdata)=>
        dispatch({
            type: DELETE_USER,
            payload:userdata
           
        }),
        dispatch(useraction())

    )
    .catch( error => {
        console.log(error);
    });

}


export const forgotuser=(key)=>async(dispatch)=>{

    const res=await axios.get(`http://localhost:5555/search/${key}`)
    dispatch({type:FORGOT_USER,payload:res.data})
 
}

export const updateuser=(Password,id)=>async(dispatch)=>{
    const res=await axios.put(`http://localhost:5555/update/${id}`,{
        Password
    })

    dispatch({type:UPDATE_USER,payload:res.data})
    dispatch(useraction())



}