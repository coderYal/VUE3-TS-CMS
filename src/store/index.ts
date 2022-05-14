import { createStore } from 'vuex'
import { IRootStore } from '@/store/type.ts'

import login from '@/store/login/login'

import { getMenuList } from '@/service/login/login'
import { mapMenusToRoutes } from '@/utils/mapMenus'

import localCache from '@/utils/localCache'

// const dashboard = () => import('@/router/main/analysis/dashboard/dashboard')
import router from '@/router'
const store = createStore<IRootStore>({
  state: {
    navMenuList: []
  },
  mutations: {
    changeMenuList(state, { list }) {
      state.navMenuList = list
    }
  },
  actions: {
    async getInitInfoData({ commit }) {
      const data = await getMenuList()
      const {
        data: { list }
      } = data
      const token = localCache.getLocalCache('token')
      commit('changeMenuList', { list })
      commit('login/loginCacheToken', { token })
      const routes = mapMenusToRoutes(list)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      console.log(router.getRoutes())
    }
  },
  modules: {
    login
  }
})

export function setupStore(): void {
  store.dispatch('getInitInfoData')
}

export default store
