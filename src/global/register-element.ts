import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu
]

export default function (app: App): void {
  components.forEach((cpn) => {
    app.component(cpn.name, cpn)
  })
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
