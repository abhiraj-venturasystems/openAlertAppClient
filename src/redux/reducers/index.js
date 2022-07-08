import { combineReducers } from 'redux';
import shopReducer from './shopReducer';

//either we can write like key: value format or like this
const reducers = combineReducers({
    shopReducer
})

export default reducers;