import { createApp } from 'vue'
import { globalRegister } from './global'

import 'normalize.css'
import './assets/css/index.scss'

import App from './App.vue'

import store from './store'
import router from './router'
import { setupStore } from './store'

const app = createApp(App).use(globalRegister).use(store)
setupStore()

app.use(router).mount('#app')
