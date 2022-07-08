import * as shopTypes from '../types/shopTypes.js';

const initState = {
    loginDetails:{},
    tokenExpire: false,
    shopDetails:{},
}

//Reducers provide a way to update an application’s state using an action.
//Reducer has two parametes- inital state and action
//Reducers update store based on the value of the action.type

//Dispatching plain object actions to the store when something happens in the app.
//Pure reducer functions looking at those actions and returning immutably updated state

const shopReducer = (state=initState, action)=>{
    switch(action.type){
        case(shopTypes.AUTHENTICATE_USER):
         return {
            ...state,
            loginDetails: {...action.payload},
            tokenExpire:false
         }
         case(shopTypes.SHOP_REGISTRATION):
         return {
            ...state,
            shopDetails: {...action.payload}
         }
         default:
            return state;
    }

}

export default shopReducer;