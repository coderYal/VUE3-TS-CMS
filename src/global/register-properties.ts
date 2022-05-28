import type { App } from 'vue'

import { formatUtcString } from '@/utils/dateFormat'

export default function (app: App): void {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    },
    formatMoney(value: string, format = '￥') {
      return format + value
    }
  }
}
