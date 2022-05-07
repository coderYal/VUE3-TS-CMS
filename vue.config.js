module.exports = {
  outputDir: './build',
  devServer: {
    open: true,
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
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
