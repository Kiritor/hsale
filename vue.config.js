const path = require('path')

module.exports = {
  // 定义基础路径baseUrl在vue-3.0被废除
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : '/',
  devServer: {
    proxy: {
        '/api': {
            target: 'http://localhost:8082/', // 你请求的第三方接口
            changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            pathRewrite: {  // 路径重写，
                '^/api': ''  // 
            }
        }
    }
  },
  // 定制vant主题
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // less 文件覆盖（文件路径为绝对路径）
          // 这里千万要写对，不然就会报错，或者直接没有效果，也找不到原因
          hack: `true; @import "${path.resolve(__dirname, 'src/assets/css/mixin.less')}";`
        }
      }
    }
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/assets/css/mixin.less'), // 需要全局导入的less
      ],
    })
}
/*
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            //"text-color": "#111",
            //"border-color": "#eee",
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "@/assets/css/mixin.less";`,
          },
        },
      },
    },
  },
};
*/