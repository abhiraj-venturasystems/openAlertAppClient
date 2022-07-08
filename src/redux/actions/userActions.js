import * as userServices  from '../services/userServices';
import * as userTypes from '../types/userTypes';
import { useHistory } from "react-router-dom";


export const updatePasswordAction = (payload)=> async dispatch =>{
    await userServices.updatePasswordApi(payload);
}





