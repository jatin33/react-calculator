import { createStore, applyMiddleware } from "redux";
import calciReducer from './reducers/calciReducer';
import logger from 'redux-logger';

const store = createStore(calciReducer, applyMiddleware(logger));

export default store;