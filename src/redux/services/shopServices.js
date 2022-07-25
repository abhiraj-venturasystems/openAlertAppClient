import { http } from './http.js';

export const regApi = async(payload)=>{
   return await http.post('/admin/shop/shopReg', payload);
}

export const updateShopApi = async (data, id) => {
	await http.put(`/cms/shop/${id}`, data);
}

export const getShopsApi = async (limit, skip, query) => 
	await http.get(
		`/cms/shop/getShopsList?limit=${limit}&skip=${skip}&query=${query}`
	);

export const getShopDetailApi =  async id =>
	await http.get(
			`/cms/shop/${id}/detail`
		);

export const shopEnableDisableApi = async (id, status) =>{
	(status === 0)? status=1: status=0;
	await http.delete(`/cms/shop/shopEnableDisable/${id}/${status}`);
}