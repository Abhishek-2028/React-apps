import { GET_USER_REQ,GET_USER_SUC,GET_USER_FAIL } from '../reducer/reducerfunction';
import axios from 'axios';

export const useraction = ()=> async (dispatch)=>{

    try{
         
        
        dispatch({type:GET_USER_REQ})
        const res=await axios.get("http://localhost:5555/showall")
        dispatch({type:GET_USER_SUC,payload:res.data})
        
    }
    catch(err){

        dispatch({
            type:GET_USER_FAIL,
            payload:err.data && err.response.data.message?
            err.responce.data.message :
            err.message,

            
        })
    }

}