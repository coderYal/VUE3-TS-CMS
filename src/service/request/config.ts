const TIME_OUT = 10000
let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
}

export { TIME_OUT, BASE_URL }
