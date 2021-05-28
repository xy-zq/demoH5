import axios from 'axios';
import { baseUrl, token } from '@/utils/config/index.js'

axios.defaults.timeout = 60000;
axios.defaults.baseURL = baseUrl;


axios.defaults.headers.post['Content-Type'] = 'multipart/json;charset=UTF-8;';


// 图片的请求
let imgAxios = axios.create({
	baseURL: baseUrl,
	timeout: 60000,
	headers: {
		'Content-Type': 'multipart/form-data',
		'token': `${ token }`
	}
});

// 请求拦截
axios.interceptors.request.use((config) => {
		config.headers.token = token;
		if (config.method === 'post') {
			config.data = {
				...config.data
			};
		} else if (config.method === 'get') {
			config.params = {
				...config.params
			};
		}
		return config;
	},
	(error) => {
		return Promise.error(error);
	});

// 响应的拦截
axios.interceptors.response.use((response) => {
	if (response.status === 200) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(response);
	}
});

/* GET方法，对应GET请求 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	})
}
/* post方法，对应post请求 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}

/* post IMg方法，对应post请求 */
export function postImg(url, params) {
	return new Promise((resolve, reject) => {
		imgAxios.post(url, params)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}

export const imgBaseUrl = baseUrl;
