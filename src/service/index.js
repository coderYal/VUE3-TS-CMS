import AlRequest from '@/service/request'
const alRequest = new AlRequest({
  baseURL: 'http://152.136.185.210:5000/',
  interceptors: {
    // 请求拦截成功
    interceptorRequestOnFulfilled(config) {
      console.log('请求拦截成功', config)
      return config
    },
    // 请求拦截失败
    interceptorRequestRejected(err) {
      console.log('请求拦截失败')
      return err
    },
    // 响应拦截成功
    interceptorResponseOnFulfilled(data) {
      console.log('响应拦截成功', data)
      return data
    },
    // 响应拦截失败
    interceptorResponseOnRejected(err) {
      console.log('响应拦截失败')
      return err
    }
  }
})
export default alRequest
//# sourceMappingURL=index.js.map
