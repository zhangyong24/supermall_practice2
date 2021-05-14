module.exports = {
  //修改文件路径
  //publicPath:process.env.NODE_ENV === 'production'?'./':'/',
   publicPath: './',
  //声明配置webpack
  configureWebpack: {
    resolve: {
      //配置路径别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
            'tree-select-font-size':"#ff5777",
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "your-less-file-path.less";`,
        },
      },
    },
  },
  
}
