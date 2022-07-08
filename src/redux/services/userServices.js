import { http } from './http';

export const updatePasswordApi = async(data) =>{
   return await http.post('/cms/user/update-password', data);
}


