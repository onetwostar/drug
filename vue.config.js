const path = require("path");
module.exports = {
  // 基本路径   整个文件夹在哪
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // 输出文件目录   文件夹名
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。    资源放的目录
  assetsDir: "public",
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径    index的路劲和名字
  indexPath: "index.html",
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: true,
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,

  devServer: {
    open: true, //配置自动启动浏览器
    proxy: {
      "/index": {
        target: "http://127.0.0.1:58999",
        changeOrigin: true,
        pathRewrite: {
          "^/index": "/index"
        }
      },
      "/topology": {
        target: "http://127.0.0.1:58999",
        changeOrigin: true,
        pathRewrite: {
          "^/topology": "/topology"
        }
      },
      "/health": {
        target: "http://127.0.0.1:58999",
        changeOrigin: true,
        pathRewrite: {
          "^/health": "/health"
        }
      },
      "/detection": {
        target: "http://127.0.0.1:58999",
        changeOrigin: true,
        pathRewrite: {
          "^/detection": "/detection"
        }
      },
      "/resource": {
        target: "http://127.0.0.1:58999",
        changeOrigin: true,
        pathRewrite: {
          "^/resource": "/resource"
        }
      },
      "/xlsx": {
        target: "http://127.0.0.1:58999",
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "医药库存管理";
      return args;
    });
  }
};
