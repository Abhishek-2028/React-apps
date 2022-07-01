export const additem=(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteitem=(id)=>{
    return{
        type:"DELETE_TODO",
        id 
    }
}

export const deleteall=()=>{
    return{
        type:"DELETE_ALL"
    }
}