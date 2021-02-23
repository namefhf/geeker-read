const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://geeker.devhub.top/v1/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: config => {
    let UglifyPlugin = require('uglifyjs-webpack-plugin')
    if (process.env.NODE_ENV == 'production') {
      // 压缩混淆
      config.mode = 'production'
      // 将每个依赖包打包成单独的js文件
      let optimization = {
        minimizer: [
          new UglifyPlugin({
            uglifyOptions: {
              warnings: false,
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log']
              }
            }
          })
        ]
      }
      Object.assign(config, {
        optimization
      })
    } else {
      // 为开发环境修改配置
      config.mode = 'development'
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 开启gzip
      config.plugin('compressionPlugin').use(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: true
        })
      )
    }
  }
}
