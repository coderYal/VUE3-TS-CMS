import { RouteRecordRaw } from 'vue-router'
import type { IBreadcrumb } from '@/baseUi/breadcrumb/types'

let firstMenu = ''

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
        if (routesItem) {
          routes.push(routesItem)
          if (!firstMenu) firstMenu = routesItem.path
        }
      }
    })
  }

  _handleRoutesFormatData(userMenus)
  return routes
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  currentBreadcrumb?: IBreadcrumb[]
): any {
  for (const item of userMenus) {
    if (item.type === 1) {
      const findMenu = pathMapToMenu(item.children ?? [], currentPath)
      if (findMenu) {
        currentBreadcrumb?.push({ name: item.name })
        currentBreadcrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else {
      if (item.url === currentPath) return item
    }
  }
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const currentBreadcrumb: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, currentBreadcrumb)
  return currentBreadcrumb
}

export { firstMenu }
