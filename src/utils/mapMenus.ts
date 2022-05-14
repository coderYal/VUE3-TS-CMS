import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((filesItem) => {
    const files = filesItem.replace(/^\./, '')
    allRoutes.push(require(`../router/main${files}`).default)
  })

  function _handleRoutesFormatData(menu: any[]) {
    menu.forEach((item) => {
      if (item.type === 1) {
        _handleRoutesFormatData(item.children)
      } else {
        const routesItem = allRoutes.find((aItem) => aItem.path === item.url)
        if (routesItem) routes.push(routesItem)
      }
    })
  }

  _handleRoutesFormatData(userMenus)
  return routes
}
