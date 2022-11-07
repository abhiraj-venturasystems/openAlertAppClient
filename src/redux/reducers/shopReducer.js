import * as shopTypes from '../types/shopTypes.js';

const initState = {
    loginDetails:{},
    tokenExpire: false,
    shoplist:{items:[], count:0},
}

//Reducers provide a way to update an application’s state using an action.
//Reducer has two parametes- inital state and action
//Reducers update store based on the value of the action.type

//Dispatching plain object actions to the store when something happens in the app.
//Pure reducer functions looking at those actions and returning immutably updated state

const shopReducer = (state=initState, action)=>{
    switch(action.type){
       
         case(shopTypes.SHOP_REGISTRATION):
            return {
                ...state,
                shoplist: { 
                    items: [...action.payload],
                    count: action.shopCount
                }
            }
        case shopTypes.GET_SHOPS:
            return {
                 ...state,
                shoplist: { 
                        items: [...action.payload],
                        count: action.shopCount
                    }
                };
        case shopTypes.GET_SHOP_DETAILS:
             return {
                        ...state,
                        shopDetail: { ...action.payload }
                    }
        case shopTypes.EMPTY_SHOP_DETAILS:
             return {
                        ...state,
                        shopDetail: {}
                    }
         default:
            return state;
    }

}

export default shopReducer;