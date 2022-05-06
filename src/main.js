import { createApp } from 'vue'
import router from './router'
import { globalRegister } from './global'
import App from './App.vue'
// alRequest
//   .request({
//     url: 'login',
//     method: 'POST',
//     data: {
//       name: 'coderwhy',
//       password: '123456'
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })
createApp(App).use(router).use(globalRegister).mount('#app')
//# sourceMappingURL=main.js.map
