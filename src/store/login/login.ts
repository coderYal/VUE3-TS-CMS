import { Module } from 'vuex'
import { ILoginStore } from '@/store/login/type'
import { IRootStore } from '@/store/type'

import { IAccount } from '@/service/login/type'
import { accountLoginRequest } from '@/service/login/login'

import localCache from '@/utils/localCache'

import router from '@/router'

const loginModule: Module<ILoginStore, IRootStore> = {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    loginCacheToken(state, { token }) {
      state.token = token
      localCache.setLocalCache('token', token)
      router.push('/main')
    }
  },
  actions: {
    // 处理登录
    handleLogin({ commit }, payload: IAccount) {
      return new Promise((resole) => {
        accountLoginRequest(payload).then(({ data }) => {
          const { token } = data
          if (token) {
            resole(true)
            commit('loginCacheToken', { token })
          }
        })
      })
    }
  }
}

export default loginModule
