import * as tokenTypes from "../types/tokenTypes.js";
import * as tokenServices from "../services/tokenServices";


//action creator is a function that dispatches an action


export const getTokens = (limit = 10, skip = 0, query = '', pagination=true) => async dispatch => {
	const shopId=0; //to get tokens for all shops - only for admin
	try{  
		 const { data } = await tokenServices.getTokensApi(limit, skip, shopId, query, pagination);
		 dispatch({
			type: tokenTypes.GET_TOKENS,
			payload: data.data.items,
			tokenCount: data.data.total,
			activeCount: data.data.total,
			pendingCount: data.data.total
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

//search token
export const searchTokens = (query) => async dispatch => {
    getTokens(10, 0, query)(dispatch);
}

//get token details
export const getTokenDetail = (id) => async dispatch => {
	try {
			const {data} = await tokenServices.getTokenDetailApi(id);
			dispatch({
				type: tokenTypes.GET_TOKEN_DETAILS,
				payload: data.data
			})
	}
	catch (err) {
			throw err;
	}
};

export const emptyTokenDetails = () => async dispatch => {
	dispatch({
		type: tokenTypes.EMPTY_TOKEN_DETAILS
	});
}

export const tokenEnableDisable = (id, status) => async dispatch => {
	try {
		await tokenServices.tokenEnableDisableApi(id, status);
		getTokens()(dispatch);
	}
	catch (err) {
			throw err;
	}
};

