import { createStore, combineReducers } from "redux";
import { calciReducer } from './reducers/calciReducer';


const store = createStore(combineReducers({ root: calciReducer }));

export default store;