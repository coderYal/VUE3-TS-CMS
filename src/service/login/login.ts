import alRequest from '@/service'

import { IAccount, ILoginData } from '@/service/login/type'

const LOGIN_API = {
  accountLogin: 'login'
}

export function accountLoginRequest(account: IAccount): Promise<ILoginData> {
  return alRequest.request<ILoginData>({
    method: 'POST',
    url: LOGIN_API.accountLogin,
    data: account
  })
}
