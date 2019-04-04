## introduction
学习webpack的示例库。

1. [demo-1](./demo-1)
  - 测试webpack打包功能
  - 测试file-loader, url-loader的打包图片文件的功能
2. [demo-2](./demo-2)
  - 测试webpack打包样式文件
  - 测试postcss-loader(autoprefixer), sass-loader, css-loader, style-loader的功能
  - 验证loader chain
  - 理解sass-loader和css-loader在先后遇到`@import 'file.scss'`的先后处理结果
3. [demo-3](./demo-3) 
  - 测试css-loader的css module功能
4. [demo-4](./demo-4)
  - 测试file-loader打包字体文件
5. [demo-5](./demo-5)
  - 测试html-webpack-plugin
  - 测试clean-webpack-plugin
6. [demo-6](./demo-6)
  - 测试entry和output配置
7. [demo-7](./demo-7)
  - devtool: 测试source map
8. [demo-8](./demo-8)
  - devtool: 测试监听文件变化自动重新打包的三种方式
9. [demo-9](./demo-9)
  - devtool: 测试HMR