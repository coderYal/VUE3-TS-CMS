import alRequest from '@/service'

import { IAccount, ILoginData } from '@/service/login/type'

const LOGIN_API = {
  accountLogin: 'login',
  menu: 'menu/list'
}

/**
 * 登录接口
 * @param account
 */
export function accountLoginRequest(account: IAccount): Promise<ILoginData> {
  return alRequest.request<ILoginData>({
    method: 'POST',
    url: LOGIN_API.accountLogin,
    data: account
  })
}

/**
 * 获取菜单列表
 */
export function getMenuList(): Promise<ILoginData> {
  return alRequest.request<ILoginData>({
    method: 'POST',
    url: LOGIN_API.menu
  })
}
