import { createApp } from 'vue'
import { globalRegister } from './global'

import 'normalize.css'
import './assets/css/index.scss'

import App from './App.vue'

import router from './router'
import store from './store'

import { setupStore } from './store'

createApp(App).use(globalRegister).use(router).use(store).mount('#app')
setupStore()
