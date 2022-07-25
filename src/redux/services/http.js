import axios from 'axios';

//this is for response notifications
import { toast } from "react-toastify";

//mainly used to send asynchronous HTTP requests to REST endpoints. 
//This library is very useful to perform CRUD operations. 
//This popular library is used to communicate with the backend. 
//Axios supports the Promise API, native to JS ES6

//You can create a new instance of axios with a custom config.
export const http = axios.create({
    // baseURL: "http://3.6.88.59:8084/api",
    baseURL:"http://localhost:4004/api/"
});


const errorHandler = (error) => {
	// Handle errors
	//document.body.classList.remove("loading-indicator");
	toast.error(error.response.data.message, {
		position: toast.POSITION.BOTTOM_RIGHT,
		autoClose: 10000,
	});
	//return error.response.data;
	return Promise.reject(error.response.data);
};

const successHandler = (response) => {
	//document.body.classList.remove("loading-indicator");
	if (response.data.message) {
		if (response.data.responseCode === 200) {
			toast.success(response.data.message, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 10000,
			});
		} else {
			toast.error(response.data.message, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 10000,
			});
		}
	}
	return response;
};

//adding token on the request header
http.interceptors.request.use((config) => {
	config.headers.Authorization = localStorage.getItem("token");
	document.body.classList.add("loading-indicator");
	return config;
});
//getting the server response and pass it to success and error functions and alert using react-toastify
http.interceptors.response.use(
	(response) => successHandler(response),
	(error) => errorHandler(error)
);