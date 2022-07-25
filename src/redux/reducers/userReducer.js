import * as userTypes  from '../types/userTypes';

const initState = {
    loginDetails:{},
    tokenExpire: false
}


const userReducer =  (state=initState, action) => {
    switch(action.type){
        case userTypes.AUTHENTICATE_USER:
            return {
                ...state,
                loginDetails: { ...action.payload },
                tokenExpire:false
            }
        case userTypes.LOGOUT_USER:
				return {
					...state,
					loginDetails: {}
			};
           
            
        default:
            return state;
    }

    
}

export default userReducer;