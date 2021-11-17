import uniRequest from 'uni-request';
uniRequest.defaults.baseURL = '请求域名';
// uniRequest.defaults.headers.common['Authorization'] = AUTH_TOKEN;
uniRequest.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//HTTPrequest拦截
uniRequest.interceptors.request.use(config => {
	uni.showLoading({
		title: 'loading',
		mask:true
	});
  //headers中配置serialize为true开启序列化
  return config
}, error => {
  return Promise.reject(error)
});
//HTTPresponse拦截
uniRequest.interceptors.response.use(res => {
  const status = res.data.code || 200;//自定义返回状态字段,如果不是code请更换
  const message = res.data.msg || '未知错误';
	uni.hideLoading()
  if (status !== 200) {
    return Promise.reject(new Error(message))
  }else{
		return res;
	}
}, error => {
  return Promise.reject(new Error(error));
});
export default uniRequest