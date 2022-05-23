import { Module } from 'vuex'
import { ILoginStore } from '@/store/login/type'
import { IRootStore } from '@/store/type'

import { IAccount } from '@/service/login/type'
import { accountLoginRequest } from '@/service/login/login'

import localCache from '@/utils/localCache'

const loginModule: Module<ILoginStore, IRootStore> = {
  namespaced: true,
  state: {
    token: '',
    name: ''
  },
  mutations: {
    loginCacheToken(state, { token }) {
      state.token = token
      localCache.setLocalCache('token', token)
    }
  },
  actions: {
    // 处理登录
    handleLogin({ commit, dispatch }, payload: IAccount) {
      return new Promise((resole) => {
        accountLoginRequest(payload).then(({ data }) => {
          const { token } = data
          if (token) {
            resole(true)
            commit('loginCacheToken', { token })
            dispatch('getInitInfoData', null, { root: true })
          }
        })
      })
    }
  }
}

export default loginModule
