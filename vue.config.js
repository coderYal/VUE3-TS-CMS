module.exports = {
  outputDir: './build',
  devServer: {
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        views: '@/views'
      }
    }
  }
}
