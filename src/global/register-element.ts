import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import { ElButton, ElTable } from 'element-plus'

const components = [ElButton, ElTable]

export default function (app: App): void {
  components.forEach((cpn) => {
    app.component(cpn.name, cpn)
  })
}
