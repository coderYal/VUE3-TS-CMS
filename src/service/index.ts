import AlRequest from '@/service/request'

import { BASE_URL, TIME_OUT } from '@/service/request/config'

const alRequest = new AlRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default alRequest
