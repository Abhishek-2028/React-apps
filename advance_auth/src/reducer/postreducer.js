export const ADD_USER="ADD_USER";
export const UPDATE_USER="UPDATE_USER";
export const DELETE_USER="DELETE_USER";
export const FORGOT_USER='FORGOT_USER';

// const initialState = {
//     Name: '',
//     Email: '',
//     Phone:'',
//     Password: ''
   
// }


 const postreducer=(state = {items:[]}, action) =>{
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                items: action.payload
            };
        case DELETE_USER:
            return {
                ...state,
                items:action.payload
            };
        case FORGOT_USER:
            return {
                ...state,
                items:action.payload
            }    

        default:
            return state;
    }
}

export default postreducer
