import 'element-plus/lib/theme-chalk/base.css'
import { ElButton, ElTable } from 'element-plus'
const components = [ElButton, ElTable]
export default function (app) {
  components.forEach((cpn) => {
    app.component(cpn.name, cpn)
  })
}
//# sourceMappingURL=register-element.js.map
