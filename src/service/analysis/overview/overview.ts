import alRequest from '@/service'

import type { ICommonResult } from '@/service/common/commonType'

const OVERVIEW_API = {
  list: '/goods/list',
  del: '/goods/'
}

/**
 * 获取列表
 */
export function getGoodsList() {
  return alRequest.request<ICommonResult>({
    url: OVERVIEW_API.list,
    method: 'POST'
  })
}

/**
 * 删除商品
 * @param id
 */
export function delGoods(id: string) {
  return alRequest.request<ICommonResult>({
    url: OVERVIEW_API.del + id,
    method: 'delete'
  })
}
