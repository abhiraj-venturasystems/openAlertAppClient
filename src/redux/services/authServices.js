import { http } from './http.js';

export const loginApi = async(data)=>{
   return await http.post('/admin/shop/shopLogin', data);
}

//here function is reduced to single line, so return is not needed
export const logoutApi = async () => await http.post('cms/logout');