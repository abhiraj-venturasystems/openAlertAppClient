import { http } from './http.js';



export const getTokensApi = async (limit, skip, shopId, query) => 
	await http.get(
		`/cms/token/getTokensList/${shopId}?limit=${limit}&skip=${skip}&query=${query}`
	);

export const getTokenDetailApi =  async id =>
	await http.get(
			`/cms/token/${id}/detail`
		);

export const tokenEnableDisableApi = async (id, status) =>{
	(status === 0)? status=1: status=0;
	await http.delete(`/cms/token/tokenEnableDisable/${id}/${status}`);
}