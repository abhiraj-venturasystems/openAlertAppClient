import * as shopTypes from "../types/shopTypes.js";
import * as shopServices from "../services/shopServices";


//action creator is a function that dispatches an action

//create shop
export const addShopAction = (payload)=>{ 
    //console.log(...payload);
    return async(dispatch)=>{
        const {data} = await shopServices.addShopApi(payload);
        dispatch({
            type:shopTypes.SHOP_REGISTRATION,
            action: data
        });
    }
}

export const updateShopAction = body => async dispatch => {
	let id = body.shopId;
	await shopServices.updateShopApi(body, id);
	getShops()(dispatch);
};

export const getShops = (limit = 10, skip = 0, query = '', pagination=true) => async dispatch => {
	try{  
		 const { data } = await shopServices.getShopsApi(limit, skip, query, pagination);
		 dispatch({
			type: shopTypes.GET_SHOPS,
			payload: data.data.items,
			shopCount: data.data.total
		});

	}
	catch (error) {
		if( (error.responseCode === 400 || error.responseCode === 401)	&&
		error.message === "Token Expired"){
			localStorage.removeItem('token');
			//navigate("/");
		}
		throw error;
	}

};

//search shop
export const searchShops = (query) => async dispatch => {
    getShops(10, 0, query)(dispatch);
}

//get shop details
export const getShopDetail = (id) => async dispatch => {
	try {
		
			const {data} = await shopServices.getShopDetailApi(id);
			dispatch({
				type: shopTypes.GET_SHOP_DETAILS,
				payload: data.data
			})
	}
	catch (err) {
			throw err;
	}
};

export const emptyShopDetails = () => async dispatch => {
	dispatch({
		type: shopTypes.EMPTY_SHOP_DETAILS
	});
}

export const shopEnableDisable = (id, status) => async dispatch => {
	try {
		await shopServices.shopEnableDisableApi(id, status);
		getShops()(dispatch);
	}
	catch (err) {
			throw err;
	}
};

