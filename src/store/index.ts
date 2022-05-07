import { createStore } from 'vuex'
import { IRootStore } from '@/store/type'

import login from '@/store/login/login'

const store = createStore<IRootStore>({
  state: {
    name: 'coderYal'
  },
  modules: {
    login
  }
})

export default store
