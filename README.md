# Yolk CLI
> 前端项目脚手架

### 开发指南
- [【手把手带你撸一个脚手架】第一步, 创建第一个命令](https://juejin.im/post/6844903713128218631)
- [【手把手带你撸一个脚手架】第二步, 搭建开发环境](https://juejin.im/post/6844903713870610446)
- [【手把手带你撸一个脚手架】第三步, 获取 github 项目信息](https://juejin.im/post/6844903713941749773)
- [【手把手带你撸一个脚手架】第四步, 通过撸码获取项目信息](https://juejin.im/post/6844903714629615624)
- [【手把手带你撸一个脚手架】第五步, 撸完收工](https://juejin.im/post/6844903715409772557)

### 介绍
`Yolk CLI` 是一个前端项目快速开发的完整系统，提供：
- [vue-spa-template](https://github.com/YolkPie/vue-spa-template)：Vue 单页应用项目模板
- [react-spa-template](https://github.com/YolkPie/react-spa-template)：React 单页应用项目模板
- [multi-project-template](https://github.com/YolkPie/multi-project-template)：用一个代码库维护多个前端项目
- [webpack-mpa-template](https://github.com/YolkPie/multi-project-template)：webpack 多页面应用项目模板
- 持续补充中...

`Yolk CLI` 致力于将前端开发不同技术栈的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。

### 安装
可以使用下列任一命令安装这个新的包：
```shell
$ npm install -g @yolkpie/yolk-cli
# OR
$ yarn global add @yolkpie/yolk-cli
```
安装之后，你就可以在命令行中访问 `yolk` 命令。

### 使用
运行以下命令来创建一个新项目：
```shell
$ yolk init
```
你会被提示选取一个项目模板:
![avatar](https://img12.360buyimg.com/imagetools/jfs/t1/102016/19/9766/278568/5e130047E808d22a1/eea30150757b6dff.png)

根据你项目使用的技术栈选择项目模板，选择完项目模板后你会被提示输入项目的名称：
![avatar](https://img14.360buyimg.com/imagetools/jfs/t1/103395/18/9855/225672/5e13020dE4219cbe0/ebf483193b28fe5f.png)

输入项目名称后，即会下载你选择的项目模板：
![avatar](https://img11.360buyimg.com/imagetools/jfs/t1/90093/7/9916/254379/5e130351E075aaed5/ea2ac6b3a7485c1d.png)

### 开发
不同项目模板的开发及使用方式有所不同，具体使用方式参考相关项目模板的开发文档：
- [vue-spa-template](https://github.com/YolkPie/vue-spa-template/blob/master/README.md)：Vue 单页应用项目模板
- [react-spa-template](https://github.com/YolkPie/react-spa-template/blob/master/README.md)：React 单页应用项目模板
- [multi-project-template](https://github.com/YolkPie/multi-project-template/blob/master/README.md)：用一个代码库维护多个前端项目
- [webpack-mpa-template](https://github.com/YolkPie/multi-project-template/blob/master/README.md)：webpack 多页面应用项目模板
- 持续补充中...

### 贡献

如果你在业务中还经常使用其他项目模板，但是该脚手架中未包括，欢迎给我们提 [issue](https://github.com/YolkPie/yolk-cli/issues)

当然你也可以给我们提PR，项目地址为：[YolkPie/yolk-cli](https://github.com/YolkPie/yolk-cli)