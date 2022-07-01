import rootReducers from "./reducer";
import { legacy_createStore as createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialstate={};

const store=createStore(rootReducers,initialstate,composeEnhancers(applyMiddleware(thunk)))

export default store;