## uniapp项目底层基础框架，导入HbuilderX即可使用
#### 目录说明：
  ┌─node_modules                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;npm组件目录  
  ├─common                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目公用组件及方法存放  
  │  └─api                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据请求api封装文件夹  
  │  └─components                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目其他封装组件存放目录  
  │  └─css                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目页面样式存放目录
  │  └─request                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uni-app的request封装文件夹  
  ├─components                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uni-app内置组件目录  
  ├─pages                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目页面存放目录  
  │  └─commons                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目页面内公用模块存放目录  
  │  └─index                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目主页面文件存放目录  
  │  └─tabbar                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app或小程序等下面的tab文件存放目录（可自定义）  
  ├─static                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目静态文件存放目录  
  ├─unpackage                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目编译配置  
  ├─App.vue                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目入口页面  
  ├─main.js                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目全局配置文件  
  ├─manifest.json                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目打包发布配置文件  
  ├─package.json                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目所需插件及版本信息文件  
  ├─pages.json                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目全局配置文件  

##### 代码说明：<br/>
##### 本基础代码框架包含页面配置，数据请求封装等
