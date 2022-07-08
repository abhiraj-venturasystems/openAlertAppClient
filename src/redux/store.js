//import { createStore } from 'redux'; is now Deprecated now using redux toolkit
//import thunk from 'redux-thunk'; not needed because The redux-thunk middleware was automatically added
//const middlewareEnhancer = applyMiddleware(thunk);
//const composedEnhancers = compose(middlewareEnhancer)
//const mystore = createStore(rootReducer, composedEnhancers);

//Note that @reduxjs/toolkit library's configureStore call automatically does all the usual setup work you'd have done manually:
//ie, process like adding middleware - thunk 
import rootReducer from './reducers/index.js';
import { configureStore } from '@reduxjs/toolkit';

const mystore= configureStore({
    reducer: rootReducer
});

export default mystore;
