import {  legacy_createStore as createStore } from 'redux'
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Rootreducer from './reducer'

const persistconfig={
    key:"root",
    storage
}
const persistedReduser=persistReducer(persistconfig,Rootreducer)
const store = createStore(persistedReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persister=persistStore(store);

export default store;