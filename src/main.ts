import { createApp } from 'vue'
import router from './router'
import store from '@/store'
import { globalRegister } from './global'

import App from './App.vue'

import 'normalize.css'
import '@/assets/css/index.scss'

createApp(App).use(router).use(store).use(globalRegister).mount('#app')
