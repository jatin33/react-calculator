import { createStore, applyMiddleware, combineReducers } from "redux";
import { calciReducer } from './reducers/calciReducer';
import logger from 'redux-logger';

const store = createStore(combineReducers({ root: calciReducer }), applyMiddleware(logger));

export default store;