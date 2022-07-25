import { combineReducers } from 'redux';
import userReducer from './userReducer';
import shopReducer from './shopReducer';
import sidebarReducer from './sidebarReducer';

//either we can write like key: value format or like this
const reducers = combineReducers({
    userReducer,
    shopReducer,
    sidebarReducer
})

export default reducers;