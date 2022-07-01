const initialData={

    list:[]
}

const todoreducer=(state=initialData,action)=>{
    switch(action.type){

        case "ADD_TODO":

        const{ id, data }=action.payload

        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }

            ]
            

        }
        case "DELETE_TODO":

        const newlist = state.list.filter((e)=> e.id !== action.id) 
        

        return{
                ...state,
               list: newlist
        }

        case "DELETE_ALL":

        return{
            list:[]
        }

        default: return state;

    }
}

export default todoreducer;