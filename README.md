# rxjs-react-demo

基于 react 的 rxjs 学习与练习。

```
$ npm i
$ npm start
```

## description

Demo 实现了一个搜索 github 用户的功能，对请求做了防抖操作。用`流`的编程方式进行开发。

关于 `RxJS` 的更多工具函数使用翻阅[官网](https://rxjs-dev.firebaseapp.com/api)

### input fetch

纯 `RxJS` 实现功能。基于 `BehaviorSubject` 对动作事件监听。

主要练习 Subject 在 React 中的使用。

### with recompose

引用了 `recompose` 库的使用，这个库是在 react hooks 出现之前主处理 HOC 高阶组件的工具库，React 中的 lodash。随着 react hooks 的推广使用得也不多了，但是当中对 observable 处理的工具函数对 RxJS 在 react 中使用有着很好的兼容和帮助。

### with rxjs-hooks

引用了 `rxjs-hooks` 库。让 RxJS 在 React 中开发更好的适应 react hooks。

### combinable

不同与以上在于使用了第三方的 fetch，而非 rxjs/ajax，主要是对一些项目中适应性的使用，毕竟不是所有项目都适用 rxjs/ajax。

## about blog

参考博文：[挤牙膏之旅——RxJS记录](https://github.com/Coyeah/blog/issues/41)
