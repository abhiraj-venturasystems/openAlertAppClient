import * as tokenTypes  from '../types/tokenTypes';

const initState = {
    tokenExpire: false,
    tokenlist: { items: [], count: 0 , activeCount:0, pendingCount:0 },
	tokenDetail: {}
}


const tokenReducer =  (state=initState, action) => {
    switch(action.type){
        
            case tokenTypes.GET_TOKENS:
                return {
                    ...state,
                    tokenlist: { 
                        items: [...action.payload],
                        count: action.tokenCount,
                        activeCount: action.activeCount,
                        pendingCount: action.pendingCount
                    }
                };
            case tokenTypes.GET_TOKEN_DETAILS:
                return {
                    ...state,
                    tokenDetail: { ...action.payload }
                }
            case tokenTypes.EMPTY_TOKEN_DETAILS:
                return {
                    ...state,
                    tokenDetail: {}
                }
        default:
            return state;
    }

    
}

export default tokenReducer;