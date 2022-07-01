
export const GET_USER_REQ="GET_USER_REQ";
export const GET_USER_SUC="GET_USER_SUC";
export const GET_USER_FAIL="GET_USER_FAIL";




export const userReducer = (state={user:[]},action)=>{
    switch(action.type){
        case GET_USER_REQ:
            return {
                user:[],
                loading:true,
            };

        case GET_USER_SUC:  
            return {
                user:action.payload,
                loading:false,
            };   
        
        case GET_USER_FAIL:
            return {
                loading:false,
                error:action.payload,  
            };
            

        default :
         return state;    
    }
}