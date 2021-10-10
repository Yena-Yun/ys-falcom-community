import { combineReducers } from 'redux';
import filter from './modules/filter';
import post from './modules/post';

let rootReducer = combineReducers({ filter, post });

export default rootReducer;
