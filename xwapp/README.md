# xwapp

> A Vue.js project
> 123

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
+ node下载地址 <https://nodejs.org/en/download/>
+ npm init 创建 package.json
+ 安装 react -> npm install react react-dom --save

# webpack 配置
```bash
# 安装 webpack 
npm install webpack webpack-dev-server --save-dev

# mac & linux package.json 里scripts 配置
	>"scripts": {
	    "start": "NODE_ENV=dev webpack-dev-server --progress --colors",
	    "mock": "node --harmony ./mock/server.js",
	    "build": "rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"
	},

# windows package.json 里scripts 配置
```
