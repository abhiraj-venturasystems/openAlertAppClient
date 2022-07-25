import * as shopTypes from "../types/shopTypes.js";
import * as userTypes from "../types/userTypes.js";
import { loginApi, logoutApi } from "../services/authServices.js";
//Here payload is the form datas after validation from useFormValidation
//while onSubmit of Form
export const authAction = (payload)=>{  
    //here dispath() function passed as the argument of the callback function from the redux. 
    //we can pass use this function to dispach the action
    return async (dispatch)=>{ 
        try{ 
                const { data }= await loginApi(payload);
                if(data.responseCode === 200){
                    localStorage.setItem('token',data.data.token);
                    localStorage.setItem('shopName', data.data.shopName);
                    localStorage.setItem('privilegeId', data.data.privilegeId);
                    localStorage.setItem('emailId', data.data.emailId);
                    localStorage.setItem('loginId', data.data.loginId);
                    localStorage.setItem('shopLogo', data.data.shopLogo);
                }
                //this is the dispatch function passed as argument from redux
                dispatch({
                    type: userTypes.AUTHENTICATE_USER,
                    payload: data
                });
        }
        catch(err){
            throw err;
        }
    }
}



export const logoutAction = () => async dispatch => {
	try {
		await logoutApi();
		dispatch({
			type: userTypes.LOGOUT_USER
		});
	} catch (error) {
		throw error;
	}
};

