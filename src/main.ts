import { createApp } from 'vue'
import router from './router'
import { globalRegister } from './global'

import App from './App.vue'

createApp(App).use(router).use(globalRegister).mount('#app')
