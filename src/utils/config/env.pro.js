// 正式环境配置

const token = getStorage("token");
const BASE_URL = getServerUrl();

module.exports = {
  title: 'XBP',
  baseUrl: BASE_URL, // 项目地址
  baseApi: '', // 本地api请求地址
  token: token
}