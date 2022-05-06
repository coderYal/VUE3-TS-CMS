import axios from 'axios'
class AlRequest {
  constructor(config) {
    this.instance = axios.create(config)
    this.config = config
    this.instance.interceptors.request.use(
      this.config.interceptors?.interceptorRequestOnFulfilled,
      this.config.interceptors?.interceptorRequestRejected
    )
    this.instance.interceptors.response.use(
      this.config.interceptors?.interceptorResponseOnFulfilled,
      this.config.interceptors?.interceptorResponseOnRejected
    )
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
export default AlRequest
//# sourceMappingURL=index.js.map
