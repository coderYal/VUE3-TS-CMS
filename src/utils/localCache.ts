class LocalCache {
  getLocalCache(key: string) {
    const data = localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
  }
  setLocalCache(key: string, value: any) {
    const data = JSON.stringify(value)
    localStorage.setItem(key, data)
  }
  delLocalCache(key: string) {
    localStorage.removeItem(key)
  }
  clearLocalCache() {
    localStorage.clear()
  }
}

export default new LocalCache()
