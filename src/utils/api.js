import request from '@/utils/http.js'

// 用户信息
export function getUserInfo(params, hideloading = false) {
  return request({
    url: '/user/userinfo',
    method: 'post',
    data: params,
    hideloading: hideloading // 隐藏 loading 组件
  })
}