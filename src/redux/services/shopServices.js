import { http } from './http.js';

export const regApi = async(payload)=>{
   return await http.post('/admin/shop/shopReg', payload);
}