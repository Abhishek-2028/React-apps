import { userReducer } from "./reducerfunction";
import postreducer from "./postreducer";
import { combineReducers } from "redux";

const rootReducers=combineReducers({
    userList:userReducer,
    data:postreducer
})

export default rootReducers
