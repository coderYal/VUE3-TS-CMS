import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { AlAxiosRequestConfig } from '@/service/request/type'

import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const INIT_SHOW_LOADING = false

class AlRequest {
  instance: AxiosInstance
  config: AlAxiosRequestConfig
  loading?: ILoadingInstance // loading的实例，并且是单例模式
  showLoading: boolean // 是否显示loading

  constructor(config: AlAxiosRequestConfig) {
    this.instance = axios.create(config)
    this.config = config
    this.showLoading = config.showLoading ?? INIT_SHOW_LOADING // 默认不显示loading

    // 给每个实例都进行全局的请求拦截和响应拦截
    this.instance.interceptors.request.use(
      (config) => config,
      (err) => err
    )
    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => {
        if (err && err.response) {
          const {
            response: { status }
          } = err
          switch (status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权，请登录'
              break
            case 403:
              err.message = '拒绝访问'
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break
            case 408:
              err.message = '请求超时'
              break
            case 500:
              err.message = '服务器内部错误'
              break
            case 501:
              err.message = '服务未实现'
              break
            case 502:
              err.message = '网关错误'
              break
            case 503:
              err.message = '服务不可用'
              break
            case 504:
              err.message = '网关超时'
              break
            case 505:
              err.message = 'HTTP版本不受支持'
              break
            default:
              break
          }
        }
        ElMessage.error(err.message)
        return Promise.reject(err)
      }
    )

    // 看当前实例是否需要请求、响应拦截
    this.instance.interceptors.request.use(
      this.config.interceptors?.interceptorRequestOnFulfilled,
      this.config.interceptors?.interceptorRequestRejected
    )
    this.instance.interceptors.response.use(
      this.config.interceptors?.interceptorResponseOnFulfilled,
      this.config.interceptors?.interceptorResponseOnRejected
    )
  }

  request<T>(config: AlAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 看当前接口是否传递要加载loading
      if (config.showLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: '数据加载中...',
          background: 'rgba(0, 0, 0, .78)'
        })
      }
      // 看单个接口是否需要进行请求拦截
      if (config.interceptors?.interceptorRequestOnFulfilled) {
        config = config.interceptors.interceptorRequestOnFulfilled(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 看单个接口是否需要进行响应拦截
          if (config.interceptors?.interceptorResponseOnFulfilled) {
            res = config.interceptors.interceptorResponseOnFulfilled(res)
          }
          // 成功取消loading并且重置showLoading为初始值
          this.loading?.close()
          this.showLoading = INIT_SHOW_LOADING
          resolve(res)
        })
        .catch((err) => {
          // 请求失败取消loading并且重置showLoading为初始值
          this.loading?.close()
          this.showLoading = INIT_SHOW_LOADING
          reject(err)
        })
    })
  }
}

export default AlRequest
