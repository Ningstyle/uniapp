import request from '@/common/request/ajaxRequest'
// 配置接口请求
export const getPublicTable = () => {
  return request({
    url: '/api/test',
    method: 'GET',
    params: {
    	
    }
  })
}