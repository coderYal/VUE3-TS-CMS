import alRequest from '@/service'

import { IAccount } from '@/service/login/type'
import { ICommonResult } from '@/service/common/commonType'

const LOGIN_API = {
  accountLogin: 'login',
  menu: 'menu/list'
}

/**
 * 登录接口
 * @param account
 */
export function accountLoginRequest(account: IAccount): Promise<ICommonResult> {
  return alRequest.request<ICommonResult>({
    method: 'POST',
    url: LOGIN_API.accountLogin,
    data: account
  })
}

/**
 * 获取菜单列表
 */
export function getMenuList(): Promise<ICommonResult> {
  return alRequest.request<ICommonResult>({
    method: 'POST',
    url: LOGIN_API.menu
  })
}
