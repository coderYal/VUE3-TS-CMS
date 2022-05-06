import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IaxiosInterceptor<R = AxiosResponse> {
  interceptorRequestOnFulfilled?: (
    config: AxiosRequestConfig
  ) => AxiosRequestConfig
  interceptorRequestRejected?: (error: any) => any
  interceptorResponseOnFulfilled?: (data: R) => R
  interceptorResponseOnRejected?: (error: any) => any
}

export interface AlAxiosRequestConfig<R = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: IaxiosInterceptor<R>
  showLoading?: boolean
}
