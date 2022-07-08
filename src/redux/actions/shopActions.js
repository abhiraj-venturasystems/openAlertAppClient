import * as shopTypes from "../types/shopTypes.js";
import { regApi } from "../services/shopServices";

//action creator is a function that dispatches an action

//create shop
export const shopRegAction = (payload)=>{ 
    //console.log(...payload);
    return async(dispatch)=>{
        const {data} = await regApi(payload);
        dispatch({
            type:shopTypes.SHOP_REGISTRATION,
            action: data
        });
    }
}

