import axios from 'axios';
import { Toast } from 'vant';
import { baseUrl, token } from '@/utils/config/index.js';

axios.defaults.timeout = 60000;
axios.defaults.baseURL = baseUrl;

axios.defaults.headers.post['Content-Type'] = 'multipart/json;charset=UTF-8;';


const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
})

// 请求拦截
axios.interceptors.request.use((config) => {
		config.headers.token = token;
		
		// 不传递默认开启loading
		if (!config.hideloading) {
		  // loading
		  Toast.loading({
		    forbidClick: true
		  })
		}
		
		return config;
	},
	(error) => {
		console.log('err>>>>>>>' + error) // for debug
		return Promise.error(error);
	});

// 响应的拦截
axios.interceptors.response.use((response) => {
	if (response.status === 200) {
		Toast.clear();
		return Promise.resolve(response);
	} else {
		Toast.clear();
		return Promise.reject(response);
	}
}, (error) => {
	Toast.clear();
	Toast.fail('请求错误');
	console.log('err>>>>>>>' + error) // for debug
	return Promise.reject(error)
});

export default service
